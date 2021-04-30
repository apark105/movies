import React from 'react';
import './Container.css';
import List from '../List/List';
import { Droppable } from 'react-beautiful-dnd';
// import { DragDropContext } from 'react-beautiful-dnd';

function Container({ movieList, selectMovie }) {
    // console.log('container', movieList)


    const selected = () => {
        console.log('hello')
    }

    return (
        <Droppable droppableId="movies">
            { (provided) => {
                    return (
                        <div className="container" 
                        ref={provided.innerRef} 
                        {...provided.droppableProps} >
                            {
                                movieList.length > 0 && movieList.map((item, index) => {
                                    return (
                                        <List selectMovie={selectMovie} key={item.imdbID} info={item} index={index}/>
                                    )
                                })
                            }
                            {provided.placeholder}

                        </div>
                    )

                }
            }
        </Droppable>
    )
}

export default Container;
