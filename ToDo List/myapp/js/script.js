const addInput = document.getElementById("add-input");
const listContainer = document.getElementById("list-container")
function addTask(){
    if(addInput.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=addInput.value;
        listContainer.appendChild(li);
        let deltIcon = document.createElement("span");
        deltIcon.innerHTML="\u00d7";
        deltIcon.classList.add("delt-btn")
        li.appendChild(deltIcon);
        
        
       
    }
    addInput.value=''
    saveData()

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.classList.contains("delt-btn")){
        e.target.parentElement.remove()
        saveData()
    }
},false)

listContainer.addEventListener("dblclick", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("important");
        saveData()
    }
    else if(e.target.classList.contains("delt-btn")){
        e.target.parentElement.remove()
        saveData()
    }
},false)


function removeAllTasks() {
    const listContainer = document.querySelector("#list-container");
    listContainer.innerHTML = ''; // Clear all child elements
    saveData()
}

function deleteCompletedTasks() {
    const listItems = document.querySelectorAll("#list-container li");
    listItems.forEach(function(item) {
        if (item.classList.contains("checked")) {
            item.remove();
            saveData()
        }
       
        
    });
}


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTasks()


  
  