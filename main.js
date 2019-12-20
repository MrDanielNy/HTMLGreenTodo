var allActivities = []; //The main array that handles objects

var EventHandler = (function(){

    function init(){

        $("#list-of-todos").on("click", ".done-button", function () {

                TODOStorage.updateTodo(this.dataset.id);
                window.location.reload();
        });

        
        $("#list-of-todos").on("click", ".delete-button", function () {

            TODOStorage.deleteTodoById(this.dataset.id);
            window.location.reload();
            
    });



    }

  return{
      init,
  }

})();





var DocumentHandler = (function() {

    function init() {
        TODOStorage.init();
        var wrapper = "";
        var gottenTodo = TODOStorage.listTodos();
        var listOfTodos = document.getElementById("list-of-todos");

        for (var i = 0; i < gottenTodo.length; i++) {
            console.log(gottenTodo[i].activity.activityName);
            if (i%2==0) {
                wrapper = "wrappereven"
            }
            else{wrapper = "wrapperodd"}
            if (gottenTodo[i].activity.done) {
                listOfTodos.innerHTML += "<div id="+wrapper+"><div id="+"text"+"><li><span class="+"gdot"+"></span>" + gottenTodo[i].activity.activityName + "</div><div id="+"twobuttons"+"><button class='done-button' data-id=" + gottenTodo[i].id + "> Ej klar</button><button class='delete-button' data-id=" + gottenTodo[i].id + ">Ta bort</button><br></div></div>";
            } else {
                listOfTodos.innerHTML += "<div id="+wrapper+"><div id="+"text"+"><li><span class="+"rdot"+"></span>" + gottenTodo[i].activity.activityName + "</div><div id="+"twobuttons"+"><button class='done-button' data-id=" + gottenTodo[i].id + ">Klar</button><button class='delete-button' data-id=" + gottenTodo[i].id + ">Ta bort</button><br></div></div>";
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

    return { init }

})()

document.addEventListener("DOMContentLoaded", function() {
DocumentHandler.init(),
EventHandler.init()
});