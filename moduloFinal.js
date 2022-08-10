const apiUrl = 'https://my-json-server.typicode.com/ruvilar/proyecto-librerias-javascript/tasks'

axios.get(apiUrl)
.then(resp => fillTasks(resp.data))
.catch(err => console.log(err))

const fillTasks = data => {
    data.map(val => {
        let newTask = document.createElement('article'),
            taskTitle = document.createElement('h4'),
            taskDescription = document.createElement('p')

        taskTitle.innerHTML = `${val.title}<hr>`;
        taskDescription.innerHTML = `<b>Responsable:</b> ${val.responsable}<br> <b>Estado:</b> ${val.state}<br> <b>Fecha Límite:</b> ${val.deadline}<br> <b>Fecha de Creación:</b> ${val.created}`;

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDescription);

        let columnToDo = document.getElementById('toDoTasks'),
            columnInProgress = document.getElementById('inProgressTasks'),
            columnDone = document.getElementById('doneTasks')

        if(val.state === 'TO DO') {columnToDo.appendChild(newTask)};
        if(val.state === 'IN PROGRESS') {columnInProgress.appendChild(newTask)};
        if(val.state === 'DONE') {columnDone.appendChild(newTask)};
    });
};