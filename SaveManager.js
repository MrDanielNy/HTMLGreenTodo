function ActivityObject(newId, newName, isDone) {
    this.id = newId;
    this.activityName = newName;
    this.done = isDone;
}

var TODOStorage = (function() {
    var todosList = [];
    /* var userList = []; */
    var todos = [];

    function init() {

        //Get todos
        const lsTodos = localStorage.getItem('QuickTodo');
        todosList = JSON.parse(lsTodos)

        if (todosList != null) {
            for (let i = 0; i < todosList.length; i++) {
                todos.push(todosList[i]);
            }
        }


        if (todosList === null) {
            todosList = [];
        }

        //New DN code to add objects to list
        for (let i = 0; i < todos.length; i++) {

            var newId = todos[i].id;
            var newAName = todos[i].activity;
            var newADone = todos[i].done;
            let listObject = new ActivityObject(newId, newAName, newADone);
            allActivities.push(listObject);
        }
    }

    function clearTodos() {
        for (let i = todosList.length; i > 0; i--) {
            todosList.pop(i);
        }

        for (let i = todos.length; i > 0; i++) {
            todos.pop(i);
        }
    }

    function saveTodo(activity) {

        let maxId = 0
        for (const i in todos) {
            const todo = todos[i];
            if (todo.id > maxId) {
                maxId = todo.id;
            }

        }
        const todo = {
            id: maxId + 1,
            activity: activity,
            done: false
        }

        todosList.push(todo);

        saveChanges();
    }

    function listTodos() {
        return todosList;
    }

    function updateTodo(newId) {
        for (let i = 0; i < todosList.length; i++) {
            if (todosList[i].id == newId) {
                todosList[i].done = true;
            }
        }
        saveChanges();
    }


    //Get todo-activity by id
    function getTodoById(id) {
        for (const i in todos) {
            const todo = todos[i];
            debugVar = todo;
            return todo;
        }

        if (todo.id === id) {
            return todo;
        }

        return null;
    }

    function deleteTodoById(id) {
        for (let i = 0; i < todosList.length; i++) {
            const todo = todosList[i];
            if (todo.id == id) {
                todosList.splice(i, 1);
                break;
            }
        }
        saveChanges();
    }

    function saveChanges() {
        const lsTodos = JSON.stringify(todosList)
        localStorage.setItem('QuickTodo', lsTodos);
    }

    return { init, saveTodo, listTodos, getTodoById, updateTodo, deleteTodoById, clearTodos };
})();