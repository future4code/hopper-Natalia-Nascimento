import React from 'react'
import { countries } from '../hooks/Countries';
import {BsFillHouseFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';


const ApplicationFormPage = () => {

  
  const navigate = useNavigate();

  return (
    <div>
      <h3>Se inscreva para uma viagem</h3>
      <form>
        <select defaultValue="" onChange="">
          <option value="" disabled>
            Escolha uma Viagem
          </option>
        </select>
        <input
          placeholder={'Nome'}
          name={'name'}
          value=""
          onChange=""
          pattern={'^.{3,}$'}
          title={'O nome deve ter no mínimo 10 caracteres'}
          required
        />
        <input
          placeholder={'Idade'}
          type={'number'}
          name={'age'}
          value=""
          onChange=""
          required
          min={18}
        />
        <input
          placeholder={'Texto de Candidatura'}
          name={'applicationText'}
          value=""
          onChange=""
          required
          pattern={'^.{30,}$'}
          title={'O texto deve ter no mínimo 30 caracteres'}
        />
        <input
          placeholder={'Profissão'}
          name={'profession'}
          value=""
          onChange=""
          required
          pattern={'^.{10,}$'}
          title={'A profissão deve ter no mínimo 10 caracteres'}
        />
        <select
          placeholder={'País'}
          name={'country'}
          value=""
          onChange=""
          required
        >
          <option value={''} disabled>
            Escolha um País
          </option>
          {countries.map(country => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            )
          })}
        </select>
        <div>
          <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
          <button type={'submit'}>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ApplicationFormPage;