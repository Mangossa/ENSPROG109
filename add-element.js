function addItem() {
  var newItemText = document.getElementById("newItemText").value;
  var newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode(newItemText));
  document.getElementById("todo").appendChild(newItem);
}
