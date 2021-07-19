// from data.js
var tableData = data;

var tbody = d3.select("tbody");
//loop through data and console log each record
data. forEach(function(sightingReport){
    console.log(sightingReport)
});
console.log(tableData.length);

    buildTable(tableData);

var filterKey = {}

function filterData(){
    var newData = data;
    var current = d3.select(this);
    var category =  current.property("value").toLowerCase();
    if (qry) {
        filterKey [category] = qry
    } else {
        delete filterKey [category]
    }
    console.log(filterKey)
    Object.entries(filterKey).forEach(([key, value]) => {
        newData = newData.filter(obj => obj[key]===value)
    })
    //newData =  newData.filter(obj =>obj.datetime===newDate)
    buildTable(newData);
}
function buildTable (data){
    tbody.html("")
    data.forEach((sightingReport) => {
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

d3.selectAll("input").on("change", filterData);