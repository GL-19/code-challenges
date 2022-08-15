function countSoldiers(row) {
	let soldiers = 0;

	for (let element of row) {
		if (element === 1) {
			soldiers++;
		} else {
			break;
		}
	}

	return soldiers;
}

function kWeakestRows(mat, k) {
	const orderedRows = [0];

	for (let i = 1; i < mat.length; i++) {
		const currentRowSoldiers = countSoldiers(mat[i]);
		let rowHasBeenInserted = false;

		for (let row of orderedRows) {
			if (currentRowSoldiers < countSoldiers(mat[row])) {
				orderedRows.splice(orderedRows.indexOf(row), 0, i);
				rowHasBeenInserted = true;
				break;
			}
		}

		if (!rowHasBeenInserted) {
			orderedRows.push(i);
		}
	}

	return orderedRows.slice(0, k);
}
