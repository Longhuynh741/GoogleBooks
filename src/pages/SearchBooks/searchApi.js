import axios from "axios";

// const SEARCHURL = "https://content.guardianapis.com/search?q="
// const APIKEY = "&show-fields=thumbnail&api-key=d3d603c5-e29e-41d6-abcd-b89ac28211e1";

// eslint-disable-next-line
export default {
    bookSearch: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
    },
    saveBook: function (article) {
        console.log(article);
        return axios.post("/api/MyBooks/savedBooks", article);
    },
};
