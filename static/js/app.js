// from data.js
var tableData = data;

// YOUR CODE HERE!
//get the tbody reference from the html
var tbody = d3.select("tbody");

//build the table
function build_table(data){
    //loop through each data
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        
        Object.values(dataRow).forEach((val)=> {
            var cell = row.append("td");
        HTMLTableCellElement.text(val);
    });
});
}
build_table(tableData);

