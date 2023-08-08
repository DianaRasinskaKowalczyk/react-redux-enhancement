import React from "react";

const TableHeaderCell = props => {
	const { tableField } = props;

	return <th>{tableField.label}</th>;
};

export default TableHeaderCell;
