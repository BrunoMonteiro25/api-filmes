import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { APIKey } from '../../config/key'
import Head from '../../Head/Head'
import { Container } from './styles'

const Details = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`,
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date } = data
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <Head title="Detalhes" />
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Data de Lançamento: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details
