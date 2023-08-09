import React from "react";
import TableHeaderCell from "../TableHeaderCell/TableHeaderCell";
import TableRow from "../TableRow/TableRow";

const Table = props => {
	const { tableHeaderCells, children } = props;

	const headerCells = tableHeaderCells.map(cell => {
		return <TableHeaderCell key={cell.label}>{cell.label}</TableHeaderCell>;
	});

	return (
		<thead>
			<TableRow>{headerCells}</TableRow>
			<tbody>{children}</tbody>
		</thead>
	);
};

export default Table;
