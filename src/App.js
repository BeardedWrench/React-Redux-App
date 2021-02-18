import React from 'react';
import { connect } from 'react-redux';
import { getList } from './actions';
import './App.css';

function App( props ) {

  const fetchChars = e => {
    e.preventDefault()
    props.getList()
  }
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {props.isFetching && <b>Fetching list of characters...</b>}
      <div>
        <ul>
          { props.characters.map( person => {
            return <li>{ person.name }</li>
          }) }
        </ul>
      </div>
      <div>
        { props.error && <span className="error">{ props.error }</span> }
        <button onClick={ fetchChars }>Fetch character list</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
})

export default connect( mapStateToProps, { getList } )(App);
