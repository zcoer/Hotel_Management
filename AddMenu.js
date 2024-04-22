
function addMenu(){
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var cost = document.getElementById("cost").value;
    var type = document.getElementById("type").value;

    let nameP = /^[A-Za-z\s]+$/;
   


    if (!name.match(nameP)) {
        alert("Name must contain letters and spaces only.");
        return false;
    }

   
    if (cost> 500 || cost <= 0) {
        alert("Cost must be a number less than 500 and greater than 0.");
        return false;
    }

    if (!type.match(nameP)) {
        alert("Type must contain letters and spaces only.");
        return false;
    }

    
    var items = JSON.parse(localStorage.getItem("items")) || [];

    
    items.push({ name: name, cost: cost, type: type });
     alert("Item Added Successfully");
  
    localStorage.setItem("items", JSON.stringify(items));

    
    document.getElementById("name").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("type").value = "";

   
   
    window.location.href = "ViewMenu.html";

}