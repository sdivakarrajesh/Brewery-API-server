var drinktype = ["iced-coffee",
    "evolution-fresh",
    "refreshers",
    "iced-tea",
    "bottled-drinks",
    "brewed-coffee",
    "espresso",
    "frappuccino-blended-beverages",
    "kids-drinks-and-other"]

var table = document.getElementById("api-table")
var row1 = table.insertRow(-1);
var cell11 = row1.insertCell(0);
var cell12 = row1.insertCell(1);
cell11.innerHTML = "drink";
var cellContent="<strong>(required)</strong> You select the type of drink to return in the results. Some of the available types are:<br><br>";
drinktype.forEach(element => {
    cellContent+="<code><strong>"+element+"</strong></code><br><br>"
    console.log(element);
});
cell12.innerHTML = cellContent;

var row2 = table.insertRow(-1);
var cell21 = row2.insertCell(0);
var cell22 = row2.insertCell(1);
cell21.innerHTML = "limit"
cell22.innerHTML = "a numerical value describing the number of results to be returned. Defaults to 10. If limit = 0, it returns all drinks in that category"