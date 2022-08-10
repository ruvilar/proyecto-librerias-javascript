const apiUrl = 'https://my-json-server.typicode.com/ruvilar/proyecto-librerias-javascript/tasks'

axios.get(apiUrl)
.then(resp => fillTasks(resp.data))
.catch(err => console.log(err))

const fillTasks = data => {
    data.map(val => {
        let newTask = document.createElement('article')
        let taskTitle = document.createElement('h4')
        taskTitle.innerHTML = val.title
        newTask.appendChild(taskTitle)

        let column = document.getElementById('toDoTasks')
        column.appendChild(newTask)
    })
}