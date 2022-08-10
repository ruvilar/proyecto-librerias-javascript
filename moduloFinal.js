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


// const apiUrl2 = 'https://my-json-server.typicode.com/ruvilar/proyecto-librerias-javascript/tasks'

// axios.get(apiUrl2)
// .then(resp => tasksInProgress(resp.data))
// .catch(err => console.log(err))

// const tasksInProgress = data => {
//     data.map(val => {
//         let newTask = document.createElement('article')
//         let taskTitle = document.createElement('h4')
//         taskTitle.innerHTML = val.title
//         newTask.appendChild(taskTitle)

//         let column = document.getElementById('inProgressTasks')
//         column.appendChild(newTask)
//     })
// }


// const apiUrl3 = 'https://my-json-server.typicode.com/ruvilar/proyecto-librerias-javascript/tasks'

// axios.get(apiUrl3)
// .then(resp => tasksDone(resp.data))
// .catch(err => console.log(err))

// const tasksDone = data => {
//     data.map(val => {
//         let newTask = document.createElement('article')
//         let taskTitle = document.createElement('h4')
//         taskTitle.innerHTML = val.title
//         newTask.appendChild(taskTitle)

//         let column = document.getElementById('inProgressTasks')
//         column.appendChild(newTask)
//     })
// }