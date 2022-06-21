import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTrips } from '../services/RequestApi'
import {BsFillHouseFill} from "react-icons/bs"
import {BsFillFilePersonFill} from "react-icons/bs"
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-items:center;
  justify-content: center;
  flex-direction:column;
  background-image:url(https://financeone.com.br/wp-content/uploads/2021/07/Viagem-ao-espaco-533x261.jpg);
  background-size: cover;
  height: 100vh;
`;

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:50px;
  color: white;
`;

const Button = styled.button`  
  position: relative;
  border-color: white;
  border-radius: 10em;
  border: 1px solid;
  margin: 20px; 
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: white;
  cursor: pointer;
  margin-top: 50px;
  background-color: transparent;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
`;

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips , setTrips] = useState([])

  useEffect(() => {getTrips()}, []);

  return (
    <Div>
      <H1>Lista de Viagens</H1>
      {trips &&
        trips.map(trip => (
          <ul key={trip.id}>
            <li>
              <strong>Nome:</strong>
              {trip.name}
            </li>
            <li>
              <strong>Descrição:</strong>
              {trip.description}
            </li>
            <li>
              <strong>Planeta:</strong>
              {trip.planet}
            </li>
            <li>
              <strong>Duração:</strong>
              {trip.durationInDays}
            </li>
            <li>
              <strong>Data:</strong>
              {trip.date}
            </li>
          </ul>
        ))}
        <Button onClick={() => navigate("/")}>Home <BsFillHouseFill/></Button>
        <Button onClick={() => navigate("/login")}>Login <BsFillFilePersonFill/></Button>
    </Div>
  );
}

export default ListTripsPage;