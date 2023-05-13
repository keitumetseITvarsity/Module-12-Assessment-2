document.getElementById("refresh").addEventListener("click", fetchContacts);
document.getElementById("addContact").addEventListener("click", addContact);
function fetchContacts() {
    fetch(rootPath + "controller/get-contacts/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayOutput(data);
    })
}


function displayOutput(data) {
    let output = '';
  
    for (let i in data) {
      output += `
        <div class="card" onclick="editContact(${data[i].id})">
          <img src="${rootPath}controller/uploads/${data[i].avatar}">
          <div>
            <h5>${data[i].firstname}</h5>
            <h5>${data[i].lastname}</h5>
          </div>
        </div>
      `;
    }
  
    document.getElementById('table').innerHTML = output;
  }
  






function addContact() {
    window.open("add-contact.html", "_self");
}

function editContact(id) {
    window.open("edit-contact.html?id=" + id, "_self");
}
