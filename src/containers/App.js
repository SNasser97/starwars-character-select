import React, { Component } from 'react';
import CharacterList from "./../components/CharacterList";
import Dropdown from "./../components/Dropdown";
import Loader from "./../components/Loader";

class App extends Component {
    constructor() {
       super();
       this.state = {
          characters:[],
          characterSelect:""
       }
    }

    async componentDidMount() {

      const url = "https://swapi.co/api/people/";
      const urls = [];

      // add char urls and remove first value since not in API
      for(let pageNum = 0; pageNum < 9; pageNum++) {
        if(urls.includes("https://swapi.co/api/people/?page=0")) {
          urls.shift();
        } else {
          urls.push(`${url}?page=${pageNum+1}`);
        }
      }

      // async await promise call to API for characters
      try{
        // const charData = [];
          const apiCall = await Promise.all(urls.map(async (url,i) => {
            let charURLResp = await fetch(url);
            let charURLRespJSON = await charURLResp.json();
            return charURLRespJSON;
        }))
        // console.log("starwars api call", apiCall);

        // assign array of char names + char data and setState
        const charResults = apiCall.map(char => char.results);
        this.setState({ characters: charResults });
      } catch(err) {
        console.log("Problem fetching data..", err);
      }
    }

    // our click event function
    // if state = {charSelect:char.name} == show this only
    selectCharacter = (event) => {
        // let {characters, characterSelect} = this.state;
        // console.log(event.target.value);
        // return event.target.value;
        this.setState({characterSelect:event.target.value});
    }

    render() {
      const {characters, characterSelect} = this.state;
      const filterChar = characters.map(char => {
        return char.filter(names => names.name === characterSelect)
      })
      // console.log("characters (array inside array of objects) =>",characters);
      // console.log(characterSelect);

      // if characters = empty then display msg else return values
      return (characters.length === 0) ? <Loader/> : (
        <React.Fragment>
          <h1 className="main-heading tc">Star Wars Characters</h1>
          <Dropdown clickSelect={this.selectCharacter} selectChar={characters}/>
          <CharacterList characters={filterChar}/>
        </React.Fragment>
      );
    }
}

export default App;
