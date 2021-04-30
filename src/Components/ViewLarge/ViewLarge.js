import './ViewLarge.css';
// import { DragDropContext } from 'react-beautiful-dnd';

function ViewLarge({ selectedMovie }) {
    // console.log('View ', selectedMovie.selectedMovie)

    const { BoxOffice, Genre, Plot, Rated, Title, Released, Runtime, Ratings, Poster, imdbRating } = selectedMovie

    // console.log(Title, Poster)

    const convertDate = (item) => {
        let date = new Date(item);
        //add 1 to grab next date b/c formating it to Month DD, YY sets to previous date.
        let newDate = new Date(date.setDate(date.getDate() + 1))
        let convertedDate = newDate.toLocaleString('default', { year: 'numeric', day: 'numeric', month: 'long' })
        item = convertedDate;
        return item
    }


    return (
        <div className="movie-view">

            <div className="movie-view__img">
                <h2 className="movie-title">{Title}</h2>
                <img className="movie-img" src={Poster} alt={Title} />
                <div className="movie-genre">
                    <span>{Genre}</span>
                </div>
            </div>
            <div className="movie-content">
                <div className="movie-plot">
                    <h4>
                        Introduction:
                    </h4>
                    {Plot}
                </div>
                <div className="movie-date">
                    <h4>
                        Released Date:
                    </h4>

                    {convertDate(Released)}
                </div>

                <div className="movie-profit">
                    <h4>
                        Box Office:
                    </h4>
                    {BoxOffice}
                </div>
                <div className="movie-rated">
                    <h4>
                        Movie Rated
                    </h4>
                    {Rated}

                </div>
                <div className="movie-rating">
                    <h4>
                        Rating:
                    </h4>
                    {imdbRating}

                </div>

            </div>
        </div>
    )
}

export default ViewLarge;
