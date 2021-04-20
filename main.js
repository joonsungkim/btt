// Runs all the logic when user submits boolean expression
// REWRITE :)
function main() {
    console.log("main works");
    var input = document.getElementById("boolexp").value;

    // parse
    var struct = makeStruct(input);


    makeTable(input);
    //let struct = makeStruct(input);
    //let table = makeTable(struct);
    // render(table);
}