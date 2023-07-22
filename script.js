const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#add");
const todolist = document.querySelector(".itemlist");
const taskleft = document.querySelector(".taskleft");


var todoitem = [];

//Todo item addition into item array
add.onclick = () => {
    todoitem.push(inputbox.value)
    display(); 
}

// Dynamically adding Add Button 
inputbox.onkeyup = () => {
    let EnteredValue = inputbox.value;//Getting value of input box
    if (EnteredValue.trim() != 0) {//if the user value isn't blank
        add.style.display = "block"; //add button show
    }
    else {
        add.style.display = "none";//add button hide
    }
}

// display function display all the added task
function display() {
    let ListTag = "";
    todoitem.forEach((element, index) => {
        ListTag += `<li>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                                <span class="checkmark"></span>${element}
                        </label>
                        <span class="icon">
                            <i class="del fa-regular fa-circle-xmark" onclick="deleteTask(${index})"></i>
                        <span>
                    </li>`;
                });
    todolist.innerHTML = ListTag; //adding inside itemlist ul.
    inputbox.value = ""; //clearing input field
    add.style.display = "none";//Hiding add Butto
    taskleft.textContent = todoitem.length;//Remaining task count
}

// Delete task function is used to remove the task from the list
function deleteTask(index) {
    todoitem.splice(index, 1);//remove element from array
    display();
}

// clearing entire array
document.querySelector(".clearall").onclick = () => {
    todoitem = []; //empty the array
    display();
}

// Clear Completed is used for deleting completed task from list.
document.querySelector('.delcomptask').onclick = () => {
    var selectedElement = document.querySelectorAll(".checkinput"); // Select selected task in list
    var temp = [] //   new temp array for storing completed task
    for (var i = 0; i < todoitem.length; i++) {
        if (selectedElement[i].checked === true) {
            temp.push(todoitem[i]);
        }
    }
    var j = 0;
    for (i = 0; i < todoitem.length; i++) {
        if (todoitem[i] === temp[j]) {
            todoitem.splice(i, 1);//if task store in temp array than remove from todoitem array
            j++;
            i--;//Array.length -1 because 1 element splice than i-- use for back
        }
    }
    display();
}

//Checked function is used to check and uncheck task
function checked(params) {
    var selectedElement = document.querySelectorAll(".checkinput"); // Selecting selected task in list
    for (var i = 0; i < todoitem.length; i++) {
        if (params == true) {
            selectedElement[i].checked = true;
        }
        else {
            selectedElement[i].checked = false;
        }
    }
}

document.querySelector('.markall').onclick = () => {
    checked(true);
}

//Uncomplete all task is used for uncompleter all task
document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}
