let li_Element = document.getElementById("list");

li_Element.addEventListener("click", function handleClick(event) {
    var allItems = li_Element.children;
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].classList.contains("active")) {
        allItems[i].classList.remove("active");
      }
      event.target.classList.add("active");
      changePage(1);
    }
  });


var current_page = 1;
var records_per_page = 2;

var objJson = [
    { adName: "AdName 1"},
    { adName: "AdName 2"},
    { adName: "AdName 3"},
    { adName: "AdName 4"},
    { adName: "AdName 5"}
]; 

function changePage(page)
{
    
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};