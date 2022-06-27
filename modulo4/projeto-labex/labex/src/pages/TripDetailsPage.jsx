import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import { BsFillPersonXFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const TripDetailsPage = () => {
  const [ id, setId ] = useState(localStorage.getItem("id"));
  const [ tripDetails, setTripDetails ] = useState({});
  const [candidateTrip, setCandidateTrip] = useState([])
  const [approvedCandidate, setApproved] = useState()
  const navigate = useNavigate();
  useProtectedPage()

  useEffect(() => {getCandidate()}, []);
  const getCandidate = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:natalia-nascimento-hopper/trip/${id}`;
    axios
      .get(`${url}`, {
        headers: {
          auth: localStorage.getItem('token')
        }
      })
      .then((res) => {
        setTripDetails(res.data.trip);
        setCandidateTrip(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  
  const putApprovedCandidate = (candidateId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/natalia-nascimento-hopper/trips/${id}/candidates/${candidateId}/decide`
    const body = {
      approve: true,
    }
    axios.put(url, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((res) => {
      getCandidate()
    })
    .catch((err) => {
      alert('Candidato não foi aprovado!')
      console.log(err.response);
    })
  }
  
  const putDisaPproveCandidate = (reproveId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/natalia-nascimento-hopper/trips/${id}/candidates/${reproveId}/decide`
    const body = {
      approve: false
    }
    axios.put(url, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((res) => {
      alert("Removido na viagem!")
      getCandidate();
    })
    .catch((err) => {
      alert('Candidato não foi aprovado!')
    })
  
  }
  


  return(
    <div>
      <div>
          <h3>Lista de Viagem</h3>
            <div>
              <div>
                <p><strong>Nome: </strong>{tripDetails.name}</p>
                <p><strong>Descrição: </strong>{tripDetails.description}</p>
                <p><strong>Planeta: </strong>{tripDetails.planet}</p>
                <p><strong>Duração: </strong>{tripDetails.durationInDays}</p>
                <p><strong>Data: </strong>{tripDetails.date}</p>
              </div>
            </div>
        </div>
        
        <div>
          <h3>Lista de candidatos Pendentes</h3>
            <div>
            
            {candidateTrip && candidateTrip.length > 0 ? candidateTrip.map((item) => {
              return <div key={item.id}>
            <p><strong>Nome: </strong>{item.name}</p>
            <p><strong>Descrição: </strong>{item.applicationText}</p>
            <p><strong>Profissão: </strong>{item.profession}</p>
            <p><strong>Idade: </strong>{item.age}</p>
            <p><strong>País: </strong>{item.country}</p>
          <div>
          <button onClick={()=>{putApprovedCandidate(item.id)}}><FaUserPlus/></button>
          
          <button onClick={()=>{putDisaPproveCandidate(item.id)}}><BsFillPersonXFill/></button>
          </div>
          </div>}) : <p>Não tem candidatos pendente</p>}
            
            </div>
          </div>

          <div>
          <h3>Lista de candidatos Aprovados</h3>
            <div>
              {approvedCandidate && approvedCandidate.length > 0 ? approvedCandidate.map((item) => {
                return <div key={item.id}>
              <p><strong>Nome: </strong>{item.name}</p>
              <p><strong>Idade: </strong>{item.age}</p>
              <p><strong>País: </strong>{item.country}</p>
            </div>}) : <p>Não tem candidatos pendente</p>}
          </div>
      </div>
      <button onClick={() => navigate("/login")}>Logout</button>
  </div>
  );
}
export default TripDetailsPage;
