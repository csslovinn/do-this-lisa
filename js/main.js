//To-Do List
var list = ["Haircut" , "Groceries" , "Homework" , "Buy Tent" , "Dance Practice"];
document.write("<ul class='list-group'>");
for (var i=0; i < list.length; i++){
    document.write("<li class='list-group-item'>" + list[i] + " </li>");
}
document.write("</ul>");