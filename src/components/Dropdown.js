import React from "react";
import DropdownOptions from "./DropdownOptions";


const Dropdown = ({selectChar, clickSelect}) => {
	return (
		<React.Fragment>
		<p className="description tc">Select a character to view their info</p>
		<div className="select ">
			<select className="select__character" onChange={clickSelect}>
				<option className="select__characterOption">Select your character</option>
				{
					selectChar.map(char => {
						return char.map((val, i) => {
							return <DropdownOptions key={i} name={val.name} />
						})
					})
				}
			</select>
		</div>
		</React.Fragment>
	)
}

export default Dropdown;