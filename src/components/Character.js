import React from "react";
import ImageList from "./ImageList";

const Character = ({name,height,mass,hairCol,eyeCol,skinCol,birth,gender}) => {
	return (

		<div className="card">
			<div className="card__character">
				<div className="card__details">
					<ImageList characterImage={name}/>
					<h3 className="card__details--name title-heading">{name}</h3>
					<table className="card__table">
						<tbody className="card__tableBody">
							<tr className="card__tableRow">
								<td >Height:</td>
								<td >{height}</td>
							</tr>
							<tr className="card__tableRow">
								<td >Mass:</td>
								<td >{mass}</td>
							</tr>
							<tr className="card__tableRow">
								<td>Hair colour:</td>
								<td>{hairCol}</td>
							</tr>
							<tr className="card__tableRow">
								<td>Eye colour:</td>
								<td >{eyeCol}</td>
							</tr>
							<tr className="card__tableRow">
								<td >Skin colour:</td>
								<td >{skinCol}</td>
							</tr>
							<tr className="card__tableRow">
								<td >Birth year:</td>
								<td >{birth}</td>
							</tr>
							<tr className="card__tableRow">
								<td >Gender:</td>
								<td >{gender}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

	);
}

export default Character;