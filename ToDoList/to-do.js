var subBtn = document.getElementById('submitBtn');
subBtn.addEventListener("click", addChore);
counter = 0;


function addChore(){
    counter += 1;
    var newLi = document.createElement("li");
    newLi.className = "listItem";
    newLi.id = counter;
    
    
    var newChore = document.getElementById("chore").value
    var desc = document.getElementById("info").value
    
    
    newLi.textContent = newChore + " " + desc
    var htLi = document.getElementById("myList");
    htLi.append(newLi);

    var deleteButton = document.createElement('button');
    deleteButton.className = "deleteBtn"; 
    deleteButton.id = counter;
    deleteButton.addEventListener("click", deletedItems);
    var textContent = document.createTextNode("Delete");
    deleteButton.appendChild(textContent)
    newLi.appendChild(deleteButton)
    ClearFields()
}

function ClearFields() {
    document.getElementById("chore").value = "";
    document.getElementById("info").value = "";
}

function deletedItems(){
  var delItem = document.getElementById(this.id);
  delItem.remove();
  itemdel.remove();
}