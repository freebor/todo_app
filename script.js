// sideBar code starts here 
const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

toggle.addEventListener('click', ()=>{
    sidebar.classList.toggle("close");
})

// this code is used to toggle from light mode to dark mode 
modeSwitch.addEventListener('click', ()=>{
    body.classList.toggle("dark");
    
    // this condition is used to switch text from "light mode" to "dark mode" 
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    }else{
        modeText.innerText = "Dark Mode"
    }
})
// sideBar code ends here 



// main body code 
window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const task_list = document.querySelector("#task-list");
    const deleteAll = document.querySelector("#btn-del");


    form.addEventListener('submit', (e)=>{
        // this stops it "e.preventDefault();" from refreshing the page 
        e.preventDefault();

        // input type 
        const task = input.value;
        
        if (!task) {
            alert("please fill out the task");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');

        // class name of the input tag 
        task_input_el.classList.add('inp_text');

        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute('readonly','readonly');

        // this to show that i want my input tag to be inside my content div tag 
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        // this code is for the edit button
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        // this is to help me display button name of edit 
        task_edit_el.innerHTML = "Edit";
        
        // this code is for the delete button 
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        // this is to help me display button name of delete 
        task_delete_el.innerHTML = "Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        // this is used in order to leave the "new-task-input" empty after clicking "add-task" button
        input.value = "";
        
        // this is the EventListener for the edit button 
        task_edit_el.addEventListener('click', ()=>{
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save" ;
            }else{
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit" ;
            };
        });
        
        // this is the EventListener for the delete button 
        task_delete_el.addEventListener('click', () =>{
            list_el.removeChild(task_el);
        })
    });
    deleteAll.addEventListener('click', () =>{
        list_el.replaceChildren();
    })
});