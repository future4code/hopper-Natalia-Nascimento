import { Competition } from "../models/Competition";
import { CompetitionDb } from "../models/CompetitionDB";
import { Result } from "../models/Result";
import { ResultDb } from "../models/ResultDB";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {

    public static TABLE_COMPETITION = "Competitions"
    public static TABLE_RESULTS = "Results"

    public async createCompetition(competition: Competition) {
        const competitionDb: CompetitionDb = {
            id: competition.getId(),
            title: competition.getTitle(),
            status: competition.getStatus()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITION)
            .insert(competitionDb)
    }

    public findById = async (id: string) => {
        const competitionDb: Array<CompetitionDb> = await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITION)
            .select()
            .where({ id })

        return competitionDb[0]
    }

    public createResult = async (result: Result) => {
        const resultDb: ResultDb = {
            id: result.getId(),
            idCompetition: result.getIdCompetition(),
            competition: result.getCompetition(),
            athlete: result.getAthlete(),
            value: result.getValue(),
            unit: result.getUnit()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_RESULTS)
            .insert(resultDb)
    }

    public endCompetition = async (competition: Competition) => {

        const competitionDb: CompetitionDb = {
            id: competition.getId(),
            title: competition.getTitle(),
            status: competition.getStatus()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITION)
            .update(competitionDb)
            .where({ id: competitionDb.id })
    }

    public rankingCompetition = async (idcompetition: string, orderType: string) => {

        const result = await BaseDatabase
            .connection(CompetitionDatabase.TABLE_RESULTS)
            .select("id", "athlete", "value", "unit")
            .where({ idcompetition })
            .orderBy("value", orderType)

        return result
    }
}