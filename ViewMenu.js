document.addEventListener("DOMContentLoaded", function() {
    
    var items = JSON.parse(localStorage.getItem("items")) || [];

    
    var itemList = document.getElementById("itemList");

    
    populateTable(items);

   
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        var searchText = searchInput.value.trim().toLowerCase();
        var filteredItems = items.filter(function(item) {
            return item.name.toLowerCase().includes(searchText) ||
                   item.cost.toString().includes(searchText) ||
                   item.type.toLowerCase().includes(searchText);
        });
        
        itemList.innerHTML = "";
        
        populateTable(filteredItems);
    });
});

function populateTable(items) {
    var itemList = document.getElementById("itemList");
    items.forEach(function(item, index) {
        var row = itemList.insertRow();
        var serialNumberCell = row.insertCell(0);
        var itemNameCell = row.insertCell(1);
        var itemCostCell = row.insertCell(2);
        var itemTypeCell = row.insertCell(3);
        serialNumberCell.textContent = index + 1;
        itemNameCell.textContent = item.name;
        itemCostCell.textContent = item.cost;
        itemTypeCell.textContent = item.type;
    });
}
