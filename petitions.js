const apiUrl = 'https://my-json-server.typicode.com/ruvilar/proyecto-librerias-javascript/tasks'

axios.get(apiUrl)
    .then(resp => fillTasks(resp.data))
    .catch(err => console.log(err))

const fillTasks = data => {
    console.log(data)
    data.map(val => {
        let newTask = document.createElement('article'),
            taskTitle = document.createElement('h4'),
            taskDescription = document.createElement('p')

        taskTitle.innerHTML = `${val.title}<hr>`;
        taskDescription.innerHTML = `<b>Responsable:</b> ${val.responsable}<br> <b>Fecha de Creación:</b> ${timeToDate(val.created)}<br> <b>Fecha Límite:</b> ${timeToDate(val.deadline)}`;

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDescription);

        let columnToDo = document.getElementById('toDoTasks'),
            columnInProgress = document.getElementById('inProgressTasks'),
            columnDone = document.getElementById('doneTasks')

        if (val.state === 'TO DO') { columnToDo.appendChild(newTask) };
        if (val.state === 'IN PROGRESS') { columnInProgress.appendChild(newTask) };
        if (val.state === 'DONE') { columnDone.appendChild(newTask) };
    });
};


const form = document.getElementById('formTask')

form.addEventListener('submit', ev => {
    ev.preventDefault();

    const formData = ev.target,
        days = formData.taskTitle.value
        res = formData.respTask.value
        console.log(formData.respTask)
    const dataPost = {
        title: formData.taskTitle.value,
        responsable: formData.respTask[res].text,
        deadline: Number(moment().add(7, 'days').format('X')),
        created: Number(moment().add(Number(days), 'days').format('X')),
        state: 'TO DO'
    };

    axios.post(apiUrl, dataPost)
    .then(resp => {
        let arr = [];
        arr.push(resp.data)
        fillTasks(arr)
        formData.reset()
    })
    .catch(err => console.log(err))
});