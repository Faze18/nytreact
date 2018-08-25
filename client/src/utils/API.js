import axios from "axios";
const functions = {
    search: function ( query, start, end ) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
        const APIKEY = "api-key=b9f91d369ff59547cd47b931d8cbc56b%3A0%3A74623931";
        // var startYear = 2001;
        // var endYear = 2009;
        console.log( BASEURL + APIKEY + "&q=" + query + "&begin_date=" + start + "0101&end_date=" + end + "0101" );
        return axios.get( BASEURL + APIKEY + "&q=" + query + "&begin_date=" + start + "0101&end_date=" + end + "0101" );
    },
    // Gets all books
    getArticles: function () {
        return axios.get( "/api/articles" );
    },
    // Gets the book with the given id
    getArticle: function ( id ) {
        return axios.get( "/api/articles/" + id );
    },
    // Deletes the book with the given id
    deleteArticle: function ( id ) {
        return axios.delete( "/api/articles/" + id );
    },
    // Saves a book to the database
    saveArticle: function ( articleData ) {
        return axios.post( "/api/articles", articleData );
    }
};
export default functions;
