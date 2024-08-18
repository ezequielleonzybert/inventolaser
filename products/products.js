const table = document.getElementById('table');
const rows = table.getElementsByTagName('tr');
const lastRow = rows[rows.length - 1];

function isRowEmpty(row) {
    const cells = row.getElementsByTagName('td');
    for (const cell of cells) {
        const value = cell.querySelector('input').value;
        if (value !== '') {
            return false;
        }
    }

    return true;
}

const cells = lastRow.getElementsByTagName('td');
for (let cell of cells) {
    cell.addEventListener('input', function () {
        if (!isRowEmpty(lastRow)) {
            console.log('Caracter insertado en la última fila');
        }
    });
}