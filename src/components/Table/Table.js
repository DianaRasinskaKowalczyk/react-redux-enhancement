import React from "react";
import TableCell from "../TableCell/TableCell";
import TableHeaderCell from "../TableHeaderCell/TableHeaderCell";
import TableRow from "../TableRow/TableRow";

const Table = props => {
	const { tableHeaderCells } = props;

	const headerCells = tableHeaderCells.map(cell => {
		return <TableHeaderCell key={cell.label}>{cell.label}</TableHeaderCell>;
	});

	return (
		<thead>
			<TableRow>{headerCells}</TableRow>
			<tbody>
				<TableRow>{cells}</TableRow>
			</tbody>
		</thead>
	);
};

export default Table;
