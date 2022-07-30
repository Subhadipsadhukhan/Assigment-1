//for Add Row at thge Top
function addTop() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    var table = document.getElementById("newTable");

    // create an empty row and it to the top position of the table
    var row = table.insertRow(1);

    // insert new table data (<td>) element at the top position 
    var column5 = row.insertCell(0);
    var column1 = row.insertCell(1);
    var coulmn2 = row.insertCell(2);
    var column3 = row.insertCell(3);
    var column4 = row.insertCell(4);

    // Add new data to the nwe columns
    column1.innerHTML = fname;
    coulmn2.innerHTML = lname;
    column3.innerHTML = city;
    column4.innerHTML = country;
}
//For Add row at the Bottom
function addBottom() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    var table = document.getElementById("newTable");
    // create an empty row and it to the bottom position of the table
    var row = table.insertRow(-1);

    // insert new table data (<td>) element at the top position 
    var column5 = row.insertCell(0);
    var column1 = row.insertCell(1);
    var coulmn2 = row.insertCell(2);
    var column3 = row.insertCell(3);
    var column4 = row.insertCell(4);

    // Add new data to the nwe columns
    column1.innerHTML = fname;
    coulmn2.innerHTML = lname;
    column3.innerHTML = city;
    column4.innerHTML = country;
}