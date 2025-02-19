
import '../css/Favorites.css'
import {useMovieContext} from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {
  const {favorites} = useMovieContext()
  return (
    <div className='favorites-empty'>
    { favorites.map(movie=>(
      <MovieCard movie={movie} key={movie.id}/>
    ))}
    </div>
  )
}

export default Favorites