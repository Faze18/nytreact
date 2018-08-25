import React, { Component } from "react";
import API from "../../utils/API";
import Saved from "../../components/saved";
import Articles from "../../pages/Books";
class SavedPage extends Component {
state = {
    articles: []
};
log = () =>{
    console.log(Articles);
}
componentDidMount(){

    console.log( "load articles running" );
    API.getArticles()
      .then( res => {
        console.log( "articles retreived" + res );
        this.setState( { thisArticles: res.data } );
        console.log( this.state.thisArticles );
      } )
      .catch( err => console.log( "set articles did not work" ) );
  };
  handleDeleteButton = event_id =>{
    console.log("delete clicked");
    console.log(event_id);
    // var deleteArticle = this.state.articles.find((art)=> art._id===event_id)
    // console.log(deleteArticle);
    // var articleDeleteData = {title: deleteArticle.headline.main, date: deleteArticle.pub_date, url: deleteArticle.web_url };
    API.deleteArticle(event_id). then(this.loadArticles);
  }

render() {
    return (
    
        <div>
            {this.log}
            <h1>Saved Articles</h1>

{this.state.articles.map( article => (
  <Saved
    title={article.title}
    url={article.url}
    date={article.date}
    id = {article._id}
    deleteButton = {this.handleDeleteButton}
    />
))};
  </div>

        
    )};
}

export default SavedPage;