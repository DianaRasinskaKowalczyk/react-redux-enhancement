import React, { useEffect } from "react";
import TableHeaderCell from "../TableHeaderCell/TableHeaderCell";
import TableRow from "../TableRow/TableRow";
import { columns } from "../../data/tableFields";
import { loadInitialDataFromLS } from "../../modules/localstorage/localstorage.actions";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentRateFromApi } from "../../modules/exchangeApi/exchangeApi.actions";
import TableCell from "../TableCell/TableCell";

const Table = () => {
	const dispatch = useDispatch();
	const formData = useSelector(state => state.form.entries);
	const tableData = useSelector(state => state.currency.currencies);

	const headerCells = columns.map(column => {
		return <TableHeaderCell key={column.label} column={column} />;
	});

	useEffect(() => {
		dispatch(loadInitialDataFromLS("localStorageData"));
	}, []);

	useEffect(() => {
		if (formData) {
			dispatch(loadCurrentRateFromApi());
		}
	}, [formData]);

	const renderRows = () => {
		const rows = formData.map(item => {
			const { currency, amount, purchaseDate, price } = item;

			const currentRate = Number(tableData[0]).toFixed(2);
			const currentValue = (Number(amount) * currentRate).toFixed(2);
			const difference = currentValue - Number(price) * Number(amount);
			const percentage = (currentValue * 100) / (price * amount) - 100;
			const profitOrLoss = `${difference.toFixed(2)} (${percentage.toFixed(
				2
			)} %)`;

			return (
				<tr>
					<TableCell>{currency}</TableCell>
					<TableCell>{amount}</TableCell>
					<TableCell>{purchaseDate}</TableCell>
					<TableCell>{price}</TableCell>
					<TableCell>{currentRate}</TableCell>
					<TableCell>{currentValue}</TableCell>
					<TableCell>{profitOrLoss}</TableCell>
				</tr>
			);
		});
		return rows;
	};

	return (
		<table>
			<thead>
				<TableRow>{headerCells}</TableRow>
			</thead>
			<tbody>{renderRows()}</tbody>
		</table>
	);
};

export default Table;
