var allActivities = []; //The main array that handles objects


var DocumentHandler = (function() {

    function init() {
        TODOStorage.init();

        //var gottenTodo = TODOStorage.getTodoById(0);
        var gottenTodo = TODOStorage.listTodos();
        var listOfTodos = document.getElementById("list-of-todos");

        for (var i = 0; i < gottenTodo.length; i++) {
            console.log(gottenTodo[i].activity.activityName);
            if (gottenTodo[i].activity.done) {
                listOfTodos.innerHTML += "<li> 🔵" + gottenTodo[i].activity.activityName + "<button data-id=" + i + "> Ej klar</button>";
            } else {
                listOfTodos.innerHTML += "<li> 🔴" + gottenTodo[i].activity.activityName + "<button>Klar</button>";
            }

        }

        var addButton = document.getElementById("add").addEventListener("click", function() {
            var txt;
            var activity = prompt("Please enter todo activity");
            if (activity == null || activity == "") {
                txt = "User cancelled the prompt.";
            } else {
                var newActivity = new ActivityObject(0, activity, false);
                TODOStorage.saveTodo(newActivity);
                window.location.reload();
            }
        })
    }

    function addToList(newActivity) {

    }

    return { init, addToList }

})()

document.addEventListener("DOMContentLoaded", DocumentHandler.init);