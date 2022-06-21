import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage'
import {BsFillHouseFill} from "react-icons/bs"

const  AdminHomePage = () => {
  const navigate = useNavigate();
  useProtectedPage()

  return (
    <>
      <h1>Painel Administrativo</h1>
      <div>
        <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
        <button onClick={() => navigate ("/admin/trips/create")}>Criar Viagem</button>
        <button>Logout</button>
      </div>
    </>
  )
}

export default AdminHomePage;