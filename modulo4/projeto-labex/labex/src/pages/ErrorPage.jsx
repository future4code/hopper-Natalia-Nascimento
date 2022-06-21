import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 onClick={() => navigate('/')}>Página não encontrada!!</h1>
    </>
  );
}

export default ErrorPage;