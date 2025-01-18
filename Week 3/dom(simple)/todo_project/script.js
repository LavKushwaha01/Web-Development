
let i=1;

function addTodo(){
    const todoval = document.getElementById("input")

    const newdiv = document.createElement("div");
    newdiv.innerHTML =  i+ " -:  " + todoval.value;
    newdiv.id='todo-'+ i
    i++;
   const parent = document.getElementById("todos");
   parent.appendChild(newdiv);
}

function deleteTodo(){
    const num = document.getElementById("delete")
    if(num.value>i){
        alert("please enter number in range of todo")
    }
    const element = document.getElementById("todo-"+num.value)
    element.parentNode.removeChild(element);
}