
let input = window.document.querySelector('input[name=tarefa]');

// input goes here 

let registerButton = window.document.querySelector('#register_button');

// task add

let tasks = window.document.querySelector('#list');

// input window

let card = window.document.querySelector('.card');

let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];


function renderTasks() {

    tasks.innerHTML = '';

    for (task of allTasks) {

        let taskItem = window.document.createElement('li');
        

        taskItem.setAttribute('class', 'list-group-item list-group-item-action');


        taskItem.onclick = function() {
            deleteTask(this);
        }


        let textItem = window.document.createTextNode(task);

   
        taskItem.appendChild(textItem);

      
        tasks.appendChild(taskItem);
    }
}

renderTasks();

registerButton.onclick = function() {
    let newTask = input.value;
    if (newTask !== '') {

        allTasks.push(newTask);
        renderTasks();

  
        input.value = '';


        removeWarnings();


        saveTasks();
    } else {

        removeWarnings();


        let span = window.document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        let msg = window.document.createTextNode("You have to enter some task to be added to the list.");
        span.appendChild(msg);
        card.appendChild(span);
    }
}


function removeWarnings() {
    let warnings = window.document.querySelectorAll('span');

    for (let i = 0; i < warnings.length; i++) {
        card.removeChild(warnings[i]); 
    }
}


function deleteTask(task) {
   // Remove the task from 'allTasks' array
    allTasks.splice(allTasks.indexOf(task.textContent), 1);


    renderTasks();


    saveTasks();
}


function saveTasks() {
    let jsonData = JSON.stringify(allTasks);
    localStorage.setItem('tasks', jsonData);

}

