// const tableData = document.getElementById("table-data");
// const tableDataRow = document.getElementById("table-data-row")
// const tableset = document.getElementById("table-set")
// let count = 1;
// function Newrow() {
//     count++;
//     var row = '<tr><td><input type="number" placeholder="writing"></td><td><input type="number"placeholder="Reading"></td><td><input type="number" placeholder=" listening"></td><td><input type="number" placeholder=" speaking"></td><td ><span>Result</span></td><td><button id="table-row" onclick="Newrow()">+</button></td><td> <button id="deleteTableRow()" onclick="deleteTableRow()">-</button></td></tr>';
//     tableData.insertAdjacentHTML("beforeend", row);
// }
//     function deleteTableRow(button) {
//         const row = button.closest("tr");
//     if (count > 1) {
//         tableData.removeChild(row);
//         count--;
//     }
//     else {
//         console.error('cant');
//     }
// }
const tableset = document.getElementById("table-set");
const tableData = document.getElementById("table-data").querySelector("tbody");
const tablework = document.getElementById("table-work");
const tableworkdata = document.getElementById("tableworkdata");
let count = 1;
let previousRow = null; // Keep track of the previously added row
function Newrow() {
    if (previousRow) {
        // If there's a previous row, change its button to a minus sign
        previousRow.querySelector(".add-btn").textContent = "-";
    }
    count++;
    var row = `<tr>
    <td><input id="reading_${count}" type="number" placeholder="Reading"></td>
    <td><input id="Writing_${count}" type="number" placeholder="Writing"></td>
    <td><input id="Listening_${count}" type="number" placeholder="Listening"></td>
    <td><input id="Speaking_${count}" type="number" placeholder="Speaking" onkeypress="calculatetotal(event,this)"></td>
    <td><span id="overall_${count}"></span></td>
    <td> <button class="add-btn" onclick="Newrow()">+</button></td>
    <td><button class="delete-btn" onclick="deleteTableRow(this)">-</button></td>
    </tr>`;
    tableData.insertAdjacentHTML("beforeend", row);
    previousRow = tableData.lastElementChild; // Update the previousRow
}
function deleteTableRow(button) {
    const row = button.closest("tr");
    if (count > 0) {
        tableData.removeChild(row);
        count--;
    } else {
        console.error("Can't delete more.");
    }
    if (row === previousRow) {
        // If the deleted row was the previous row, set previousRow to null
        previousRow.disabled = false;
    }
}
const calculatetotal = (event, inputElement) => {
    const id = inputElement.id;
    const parts = id.split('_');
    const currentCount = parseInt(parts[1], 10);
    const reading = Number(parseFloat(document.querySelector(`#reading_${currentCount}`).value).toFixed(2));
    const Writing = Number(parseFloat(document.querySelector(`#Writing_${currentCount}`).value).toFixed(2));
    const Listening = Number(parseFloat(document.querySelector(`#Listening_${currentCount}`).value).toFixed(2));
    const Speaking = Number(parseFloat(document.querySelector(`#Speaking_${currentCount}`).value).toFixed(2));
    if (event.key === "Enter") {
        const result = document.querySelector(`#overall_${currentCount}`);
        let average = (reading + Writing + Listening + Speaking).toFixed(2);
        result.innerText = average;
    }
};
//         function deleteTableRow(button) {
//     const row = button.closest("tr");
//     if (count > 0) {
//         tableData.removeChild(row);
//         count--;
//         // Show the plus button in the last row
//         const lastRow = tableData.lastElementChild;
//         if (lastRow) {
//             toggleButtons(lastRow);
//         }
//     } else {
//         console.error("Can't delete more.");
//     }
// }
//         function Newrow() {
//     count++;
//     var row = '<tr><td><input type="number" placeholder="Writing"></td><td><input type="number" placeholder="Reading"></td><td><input type="number" placeholder="Listening"></td><td><input type="number" placeholder="Speaking"></td><td><input id="result" type="number"><span></span></td><td style="display: none;"><button id="Newrow" onclick="Newrow()">+</button></td><td><button id="deleteTableRow" onclick="deleteTableRow(this)">-</button></td></tr>';
//     // Hide the plus button in the previous row
//     if (count > 1) {
//         const previousRow = tableData.lastElementChild;
//         const plusButton = previousRow.querySelector('#Newrow');
//         plusButton.style.display = 'none';
//     }
//     tableData.insertAdjacentHTML("beforeend", row);
// }