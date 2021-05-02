import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Container from './Components/Container/Container';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from './Components/Header/Header';
import ViewLarge from './Components/ViewLarge/ViewLarge';
import Menu from './Components/Menu/Menu';

import dogLogoErr from './Assets/dog.png'



function App() {

  const [searchInfo, setSearchInfo] = useState('');
  const [queryInfo, setQueryInfo] = useState('');
  const [movieList, setMovieList] = useState([])
  const [selectedMovieId, setSelectedMovieId] = useState('tt0848228');
  const [selectedMovie, setSelectedMovie] = useState();
  const [dropDown] = useState(['A - Z', 'Z - A'])
  const [selected, setSelected] = useState("Sort");
  const [error, setError] = useState(false);


  useEffect(() => {
    // console.log('did update', queryInfo)
    console.log('componentDidUpdate')
    if (queryInfo.length > 0) {
      console.log('componentDidUpdate: movie list changed')
      const searchData = async () => {

        try {

          const res = await fetch(`http://www.omdbapi.com/?apikey=5b14df79&s=${queryInfo}`)
          const data = await res.json("");
          // console.log('Movie Data: ', data);
          if (data.Response === "False") {
            console.log(data.Error);
            setError(true);
            setMovieList([]);
            setSelectedMovie();

            return;
          }
          setError(false);
          setMovieList([...data.Search]);
        } catch (err) {
          console.log(err)
        }
        setQueryInfo("");

      }
      searchData();
    }

    if (selectedMovieId.length > 0) {
      console.log('componentDidUpdate: movie plot changed')


      const fetchPlotData = async () => {

        const res = await fetch(`http://www.omdbapi.com/?apikey=5b14df79&i=${selectedMovieId}&plot=full`)
        const data = await res.json("");
        // console.log('plot data: ', data);
        setSelectedMovie(data);
        // console.log(movieList);ß
      }
      fetchPlotData();
    }

  }, [queryInfo, selectedMovieId])


  useEffect(() => {
    console.log('componentDidMount')
    fetchDataOnRender()
  }, [])

  const fetchDataOnRender = async () => {
    try {

      const res = await fetch(`http://www.omdbapi.com/?apikey=5b14df79&s=avengers`)
      const data = await res.json("");
      // console.log('Movie Data: ', data);
      if (data.Response === "False") {
        console.log(data.Error);
        setError(true);
        setMovieList([]);

        return;
      }
      setError(false);
      setMovieList([...data.Search]);
    } catch (err) {
      console.log(err)

    }

  }




  const selectMovie = (movieId) => {
    console.log('this has been clicked', movieId)
    setSelectedMovieId(movieId);
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(movieList);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);

    // console.log('Reordered:', items)
    setMovieList(items)
  }

  const sortMovies =  (selectedItem) => {
    console.log('called sort movie')
    setSelected(selectedItem)

    setMovieList(prevMovies => {
      const sortedMovies = [...prevMovies]
      sortedMovies.sort((a, b) => {
        switch (selectedItem) {
          case dropDown[0]:
            return a.Title < b.Title ? -1 : 1
          case dropDown[1]:
            return a.Title < b.Title ? 1 : -1
          default:
            return ""
        }
      })

      return sortedMovies
    })

  }



  return (
    <div className="App">

      <Header />
      <Search searchInfo={searchInfo} setSearchInfo={setSearchInfo} setQueryInfo={setQueryInfo} />

      <Menu menuItem={dropDown} selected={selected} sort={sortMovies} />

      {
        error &&
        <div className="error">
          <img className="error-dog" src={dogLogoErr} alt="error" />
        Movie Not Found
         </div>


      }
      <div className="movie">
        {
          selectedMovie &&
          <ViewLarge selectedMovie={selectedMovie} />
        }
        <DragDropContext onDragEnd={onDragEnd}>
          <Container movieList={movieList} selectMovie={selectMovie} />
        </DragDropContext>

      </div>


    </div>
  );
}

export default App;
