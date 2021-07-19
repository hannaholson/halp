//SVG Container
var svgHeight=590;
var svgWidth=900;
var margin={
    top:50,
    right: 50;
    bottom: 50;
    left: 50;
var height=svgHeight-margin.top-margin.bottom;
var width=svgWidth-margin.right-margin.left;

// Connect with HTML scatter element
var svg=d3.select('#scatter').append("svg").attr("height", svgHeight).attr("width", svgWidth);
var scatterGroup=svg.append("g".attr("transform", 'translate(${margin.top})`);

// Assign x and y axis
let Xselect= 'smokes'
let Yselect= 'age'

d3.csv('assets/data/data.csv').then(function(data){
    data.forEach(function(d){
        d.poverty = +d.poverty;
        d.age =+d.age;
        d.income = +d.income;
        d.healthcare = +d.healthcare;
        d.obesity = +d.obesity;
        d.smokes = +d.smokes;
    })
    // 
    function slctX(data, Xselect){
    var x = d3.scaleLinear()
        .domain([d3.min(data, d => d[Xselect])*.8, d3.max(data, d => d[Xselect])*1.1])
        .range([d3.min(data, d => d[Xselect]), width])
    return x};

    var y = d3.scaleLinear()
        .domain([d3.min(data, d => d[Yselect])*.8, d3.max(data, d => d[Yselect])*1.1])
        .range([height, d3.min(data, d => d[Yselect])])
    return y};


    }
})

