import React from "react";

const TableHeaderCell = props => {
	const { column } = props;

	return <th>{column.label}</th>;
};

export default TableHeaderCell;
