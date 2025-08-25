// Create a empty array to store the names here 
let names = [];

// create a function that can add names to the array and print it in the list here 
function addName(){
    let nameInput = document.getElementById("name").value;
names.push(nameInput);
console.log(names);
printNames();
}


function printNames() {
    let list = document.getElementById("namesList");
    list.innerHTML = "";

    names.forEach(function (element) {
        let li = document.createElement("li");
        li.textContent = element;
        list.appendChild(li);
      });
    }

names.array.forEach(element => {
    document.getElementById("but").innerHTML+= "<li>"+ element + "<li>"
});

console.log(add);

// create a function that can remove the last name from the array and print it in the list here 
function removeName() {
    names.pop();
    console.log(names);
    printNames();
}