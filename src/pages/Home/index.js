import { useState, useEffect } from 'react'
import { Container, Movie, MovieList } from './styles'
import { Link } from 'react-router-dom'
import Head from '../../Head/Head'

const Home = () => {
  const APIKey = '5b5c4bcb2cda8e6cc5c45d08e8f31ec1'

  const [movies, setMovies] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`,
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])

  return (
    <Container>
      <Head title="Lançamentos" />
      <h1>Filmes | Lançamentos</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/detalhes/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home
