




 var todoList = document.getElementById("todoList");
function addTodo(){

    //creating list
    var todoItem = document.getElementById("todoItem");
    if (todoItem.value === ""){
        alert("Please Fill Out the Task Field");
        }
        else{
    var li = document.createElement("li");
   var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    var todoList = document.getElementById("todoList");
    li.setAttribute("class","todoList");
    


    //creating edit button
    var editBtn = document.createElement("button");
   li.appendChild(editBtn);
 editBtn.setAttribute("onclick","editItem(this)");
 editBtn.setAttribute("class","far fa-edit editBtn")
   
    //creating del button
    var delBtn = document.createElement("button");
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.setAttribute("class","fas fa-trash-alt  delBtn")

    


    todoList.appendChild(li);
   
    todoItem.value = "";
        }
}
function delItem(e){
    e.parentNode.remove();
}

function deleteAllElements(){
todoList.innerHTML = "";
}

function editItem(e){
    var a = prompt("Edit your Work",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a;

}