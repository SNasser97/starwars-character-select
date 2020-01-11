import React from "react";
import Character from "./Character";

const CharacterList = ({ characters }) => {

	return (
		<div className="card-container">
		  {
			// nested loop -> [[ourdata]]
			characters.map(charArr => {
			  return charArr.map((charVal,i) => {
				return (
				  <Character key={i} name={charVal.name}height={charVal.height}mass={charVal.mass}hairCol={charVal.hair_color}eyeCol={charVal.eye_color}skinCol={charVal.skin_color}birth={charVal.birth_year}gender={charVal.gender}
				  />
				)
			  })
			})
		  }
		</div>
	);
}


export default CharacterList;