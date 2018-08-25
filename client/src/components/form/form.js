import React from "react";

const SearchForm = props => (
  <form>

 
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.setTopic}
          name="search"
          type="text"
          className="form-control"
          placeholder="Subject"
          id="search"
        />      <br />

        <input
          onChange={props.setStartYear}
          name="startYear"
          type="text"
          className="form-control"
          placeholder="Starting year"
          id="startYear"
        />      <br />

        <input
          onChange={props.setEndYear}
          name="endYear"
          type="text"
          className="form-control"
          placeholder="Ending Year"
          id="endYear"
        />
        <br />      <br />

        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
        >
          Search
      </button>
        <button
        
          onClick={props.viewSaved}
          className="btn btn-primary"
          style = {{margin:10}}
        >
          View Saved
      </button>
      </div>

    <div className='col-md-3'></div>

  </form >
);

export default SearchForm;
