import './App.css'; // Importa estilos específicos para App
import api from './api/axiosConfig'; // Importa la configuración de axios para la API
import { useState, useEffect } from 'react'; // Importa useState y useEffect de React
import Layout from './components/Layout'; // Importa el componente Layout
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route de react-router-dom
import Home from './components/home/Home'; // Importa el componente Home
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  const [movies, setMovies] = useState(); // Estado para almacenar datos de películas
  const [movie,setMovie]=useState();
  const [reviews,setReviews]=useState();

  // Función asincrónica para obtener datos de películas desde la API
  const getMovies = async () => {
    try {
      // Realiza una solicitud GET a la API para obtener películas
      const response = await api.get("/api/v1/movies");
      console.log(response.data); // Muestra los datos de la respuesta en la consola
      setMovies(response.data); // Actualiza el estado movies con los datos obtenidos
    } catch (err) {
      console.log(err); // Captura y muestra cualquier error en la consola
    }
  }

  const getMovieData = async(movieId)=>{
    try {
      const response=await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie=response.data;

      setMovie(singleMovie)

      setReviews(singleMovie.reviews)

    } catch (error) {
      console.log(error);
    }
  }

  // useEffect se ejecuta al montar el componente (equivalente a componentDidMount en clases)
  useEffect(() => {
    getMovies(); // Llama a la función getMovies para obtener las películas al inicio
  }, []); // El array vacío [] indica que se ejecuta solo una vez al montar el componente

  return (
    <div className="App"> {/* Contenedor principal con clase CSS 'App' */}
    <Header/>
      <Routes> {/* Componente de enrutamiento */}
        <Route path="/" element={<Layout />}> {/* Ruta principal '/' que renderiza Layout */}
          <Route path="/" element={<Home movies={movies} />} /> {/* Ruta '/' dentro de Layout que renderiza Home */}
          <Route path='/Trailer/:ytTrailerId'element={<Trailer/>}></Route>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;