import './List.css'
// import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';


function List({ info, index, selectMovie }) {
    const { Poster, Title, Year, imdbID } = info
    // console.log('list:', Poster, Title, Year)
    // console.log(info)
    return (
        <Draggable key={imdbID} draggableId={imdbID} index={index}>
            { (provided) => (

                <div onClick={ ()=> {selectMovie(imdbID)}}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="card">

                    <img className="card-img" src={Poster} alt={Title} />
                    <div className="card-content">
                        <div className="card-title">{Title}</div>
                        <div className="card-date">{Year}</div>
                    </div>

                </div>
            )
            }
        </Draggable>

    )
}

export default List
