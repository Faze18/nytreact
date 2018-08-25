import React, { Component } from "react";
import API from "../../utils/API";
import Saved from "../../components/saved";
import SearchForm from "../../components/form";
import Results from "../../components/results";


class Articles extends Component {
  state = {
    articles: [],
    search: [],
    startYear: 2005,
    endYear: 2018,
    subject: "war",
    showSaved: false,
    showResults: true
  };
  componentDidMount() {
    console.log( ':::did mount:::' )
    this.loadArticles();
  }

  loadArticles = () => {
    console.log( "load articles running" );

    API.getArticles()
      .then( res => {
        console.log( "articles retreived" + res );
        this.setState( { articles: res.data } );
        console.log( this.state.articles );
      } )
      .catch( err => console.log( "set articles did not work" ) );
  };

  setStartYear = event => {
    this.setState({startYear:event.target.value});
    console.log(this.state.startYear);
  }
  setEndYear = event => {
    this.setState({endYear:event.target.value});

  } 
  setTopic = event => {
    this.setState({subject: event.target.value});

  }


  handleSaveButton = event_id => {
    // event.preventDefault();
    console.log("save clicked");
    console.log(event_id);
    var newArticle = this.state.search.find((art)=> art._id===event_id)
    console.log(newArticle);
    var articlePushData = {title: newArticle.headline.main, date: newArticle.pub_date, url: newArticle.web_url };
    API.saveArticle(articlePushData). then(this.loadArticles);
  }

  viewSaved = event =>{
    event.preventDefault();
    this.setState({showSaved:true});
    this.setState({showResults:false})
  }
  handleDeleteButton = event_id =>{
    console.log("delete clicked");
    console.log(event_id);
    // var deleteArticle = this.state.articles.find((art)=> art._id===event_id)
    // console.log(deleteArticle);
    // var articleDeleteData = {title: deleteArticle.headline.main, date: deleteArticle.pub_date, url: deleteArticle.web_url };
    API.deleteArticle(event_id). then(this.loadArticles);
  }
  handleFormSubmit = event => {
    event.preventDefault();

    API.search(this.state.subject, this.state.startYear, this.state.endYear)
      .then( res => {
        var search=[];

        for (let i=0; i<5;i++ ){
          search.push(res.data.response.docs[i]);
        }
        this.setState( { search: search } )
        this.setState({showSaved:false});
        this.setState({showResults:true})
        console.log( this.state.search );

      } );
  }

 

  render() {
    return (
      <div>
      
        <SearchForm 
          handleFormSubmit={this.handleFormSubmit}
          setStartYear = {this.setStartYear}
          setEndYear = {this.setEndYear}
          setTopic = {this.setTopic}
          viewSaved={this.viewSaved}
        />
        <br/>
        {this.state.showResults?
        <div>
        <h1>Search Results</h1> 

        {this.state.search.map( search => (

        <Results 
              title={search.headline.main}
                url={search.web_url}
                date={search.pub_date}
                saveButton = {this.handleSaveButton}
                id = {search._id}
                />  
            ) )} 
            </div>
            : null}

            
        
            {this.state.showSaved?
            <div>
            <h1>Saved Articles</h1>

        {this.state.articles.map( article => (
          <Saved
            title={article.title}
            url={article.url}
            date={article.date}
            id = {article._id}
            deleteButton = {this.handleDeleteButton}
          />
        ) )}
        </div>
        : null}

      </div>

    );
  }
}

export default Articles;
