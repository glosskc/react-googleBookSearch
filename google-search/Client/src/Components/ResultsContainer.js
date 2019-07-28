import React from "react";
import BookResult from '../Components/BookResult';

function ResultsContainer(props) {
    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results Found</h3>
                {props.bookData.map((book) => {
                    const bookInfo = book.volumeInfo;
                    return <BookResult
                    title={bookInfo.title}
                    authors={bookInfo.description}
                    description={bookInfo.description}
                    link={bookInfo.cannonicalVolumeLink}
                    img={bookInfo.imageLinks}
                    path={props.path}
                    key={book.id} />
                })}
            </div>
        );
    }else if (props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map((book) => {
                        return <BookResult
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        link={book.link}
                        img={book.img}
                        id={book._id}
                        path={props.path}
                        key={book._id} />
                    })}
                </div>
            );
        } else {
            return(
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No Saved Books Here</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;