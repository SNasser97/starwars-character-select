import React from "react";

// {name} = selectChars obj
const DropdownOptions = ({name}) => {
	return (
		<option className="select__characterOption" value={name}>
			{name}
		</option>
	)
}

export default DropdownOptions;