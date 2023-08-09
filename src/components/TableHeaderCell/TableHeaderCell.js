import React from "react";

const TableHeaderCell = props => {
	const { columnField } = props;

	return <th>{columnField.label}</th>;
};

export default TableHeaderCell;
