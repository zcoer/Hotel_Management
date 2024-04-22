
document.addEventListener("DOMContentLoaded", function() {
   
    var items = JSON.parse(localStorage.getItem("items")) || [];

    
    populateTable(items);

    
    document.getElementById("deleteButton").addEventListener("click", function() {
      
        var updatedItems = items.filter(function(item, index) {
            return !document.getElementById("checkbox" + index).checked;
        });
        
        
        localStorage.setItem("items", JSON.stringify(updatedItems));
        alert("Item Deleted Successfully");


       


        
        populateTable(updatedItems);
    });
});

 
function populateTable(items) {
    var deleteList = document.getElementById("deleteList");
    deleteList.innerHTML = ""; 

    items.forEach(function(item, index) {
        var row = deleteList.insertRow();
         row.insertCell(0).textContent = item.name;
        row.insertCell(1).textContent = item.type;
        row.insertCell(2).textContent = item.cost;
       

        var selectCell = row.insertCell(3);
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox" + index;
        selectCell.appendChild(checkbox);
    });
}


/*
  var items = JSON.parse(localStorage.getItem("items")) || [];
 var totalCost = 0;
        items.forEach(function(item) {
        totalCost += parseFloat(item.cost);
       
    });

        console.log(totalCost);

 */       