function makeTable(input) {
    var tt = createTableElement();

    createFirstRow(tt);

    displayTable(tt);
}

function createTableElement() {
    var result = document.createElement("table");
    result.className = "truthTable";
    return result;
}


function createFirstRow(table) {
    var fr = document.createElement("tr");
    fr.className = "fr";

    for (var i = 0; i < 4; i++) {
        var cell = document.createElement("th");
        cell.className = "variable"
        cell.innerHTML = i.toString();
        fr.appendChild(cell);
    }

    table.appendChild(fr);
}

function displayTable(table) {
    // container
    var container = document.createElement("div");
    container.className = "output";
    container.appendChild(table);

    output(container);
}



// Render the output into the area
function output(object) {

    // the div where table is displayed
    var loc = document.getElementById("truthtable");

    // clear div before adding table
    while (loc.children.length !== 0) {
        loc.removeChild(loc.children[0]);
    }

    // render table
    loc.appendChild(object);
}