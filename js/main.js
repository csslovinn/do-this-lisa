//To-Do List
var list = [{due: "2013-10-30 19:00", completed: false}, 
    {name : "Groceries", due: "10/26/2013", completed: false}, 
    {name : "Homework", due: "2013-10-22 23:59", completed: true}, 
    {name : "Buy Tent", due: "2013-11-25 16:00", completed: false}, 
    {name : "Dance Practice", due: "2013-10-26 09:00", completed: false}];

   document.write("<ul class='list-group'>");
    for (var i=0; i < list.length; i++){
        try {
            writeList(list[i]);
        }catch(error){
            console.log("Error:" + error);
        }
    } 
    document.write("</ul>");
    
    function writeList (task){
        if (typeof task.name == 'undefined'){
            throw "Name is missing!";
        } 
        if (task.completed){
        document.write("<li class='list-group-item done'>" + task.name + " </li>");
        }
        else {
        document.write("<li class='list-group-item'>" + task.name + " </li>");    
        }
    }


   