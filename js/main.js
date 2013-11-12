//To-Do List
var list = [{due: "2013-10-30 19:00", completed: false}, 
    {name : "Groceries", due: "2013-10-26 16:00", completed: true}, 
    {name : "Homework", due: "2013-10-22 23:59", completed: true}, 
    {name : "Buy tent", due: "2013-11-25 16:00", completed: false}, 
    {name : "Dance practice", due: "2013-10-26 09:00", completed: false},
    {name : "Call mom", due: "2013-11-04 12:00", completed: false}, 
    {name : "Buy flowers", due: "2013-10-28 23:59", completed: false}, 
    {name : "Register for next class", due: "2013-12-01 16:00", completed: false}, 
    {name : "Sweep house", due: "2013-10-27 23:59", completed: false}];

$(document).ready(function() {
    //create list
    $("<ul class='list-group'>").appendTo(".panel-body");
    for (var i=0; i < list.length; i++){
        try {
            writeList(list[i]);
        }catch(error){
            console.log("Error:" + error);
        }
    } 
});
    $( "</ul>" ).appendTo( ".panel-body" );

//determine how to display tasks according to completed status and check for missing task names
function writeList (task){
        //check for missing task name data
        if (typeof task.name == 'undefined'){
            throw "Name is missing!";
        } 
        //style completed tasks and remove
        if (task.completed){
        $("<li class='list-group-item done'>" + task.name + " </li>").appendTo('.list-group');
        }
        else {
        $("<li class='list-group-item'>" + task.name + " </li>").appendTo('.list-group');
        }
    }

function removeCompleted(){
        $(".done").remove();
        }

function Task(name) {
    this.name = name;
    this.completed = false;
    var due = new Date();
        due.setDate(due.getDate() + 7); 
    this.due = due;
        }
  
function addTask(name) {
    var newTask = new Task(name);
    list.push(newTask);
    var add = writeList(newTask);
    }



   