import React from "react";
import API from "../../utils/API";
import { useState, useEffect } from "react";
import bookStyle from "./searchBooks.css";

function SearchBooks() {
  const [search, setSearch] = useState([]);
  const [userInput, setInput] = useState([]);

  const [type, setType] = useState({
    title: "",
    authors: "",
      decsription: "",
      image: "",
    link:"",
  });

  function changeState(e) {
    setInput(e);
  }

  useEffect(() => {
    API.bookSearch("Harry Potter")
      .then((response) => {
        setSearch(response.data.items);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    API.bookSearch(userInput)
      .then((response) => {
        setSearch(response.data.items);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  function handleFormSubmit(title, authors, description, image, link) {
    setType({
      title: title,
        authors: authors,
      description: description,
        image: image,
      link: link,
    });
      
    API.saveBook({
        title: title,
        authors: authors,
      description: description,
        image: image,
      link: link,
    });
  }

  return (
    <div id="articlesBackground">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-md-6 text-center">
            <h2 id="articlesHeader">Search Books Here </h2>
            <>
              <form>
                <input
                  className="form-control nav-search text-center"
                  id="articlesSearchBar"
                  type="text"
                  placeholder="e.g Harry Potter"
                  name="search"
                  onChange={(e) => changeState(e.target.value)}
                  style={{ display: "inline-grid" }}
                />
                <button className="articlesBtn" onClick={handleSearch}>
                  Search
                </button>
              </form>
              <div className="row">
                {search.map((type) => {
                  return (
                    <div key={type.id} style={bookStyle} className="col-sm-4">
                      <div className="card plant-card">
                        <div
                          className="practice image"
                          style={{
                            backgroundImage: `url(${type.volumeInfo.imageLinks.smallThumbnail})`,
                            height: "350px",
                            width: "100%",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>

                        <div className="card-body">
                          <h5 className="card-title">
                            <u>{type.common_name}</u>
                          </h5>
                          <p className="card-text">
                            <b>Title:</b> {type.volumeInfo.title}
                          </p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <b>Authors:</b> {type.volumeInfo.authors}
                          </li>
                          <li className="list-group-item">
                            <b>Description:</b> {type.volumeInfo.description}
                          </li>
                          <li className="list-group-item">
                            <b>Link:</b> {type.selfLink}
                          </li>
                        </ul>
                        <div className="card-body">
                          <button
                            className="articlesBtn"
                            onClick={() =>
                              handleFormSubmit(
                                type.volumeInfo.title,
                                type.volumeInfo.authors,
                                type.volumeInfo.description,
                                type.volumeInfo.imageLinks.smallThumbnail,
                                type.selfLink,
                              )
                            }
                          >
                            Save to My Account
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBooks;
