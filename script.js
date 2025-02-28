var guests = JSON.parse(localStorage.getItem("guests")) || [];
        
var elList = document.getElementById("list");
var elField = document.getElementById("field");
var elBtn = document.getElementById("btn");

var addGuest = function () {
    var name = elField.value;
    guests.push({ name: name });
    elField.value = "";

    saveGuests();
    listGuests();
}

elBtn.onclick = addGuest;

function saveGuests(){
    localStorage.setItem("guests", JSON.stringify(guests));
}

function listGuests() {
    elList.innerHTML = "";

    for (const guest of guests) {
        var elGuest = document.createElement("li");
        var elName = document.createTextNode(guest.name);

        var elDel = document.createElement("a");
        elDel.setAttribute("href", "#");
        elDel.onclick = function() {
            guests = guests.filter(function(item){
                return item.name !== guest.name;
            });
            saveGuests();
            listGuests();
        }

        var elDelText = document.createTextNode("Excluir");
        elDel.appendChild(elDelText);

        elGuest.appendChild(elName);
        elGuest.appendChild(elDel);
        elList.appendChild(elGuest)
    }
}

listGuests();