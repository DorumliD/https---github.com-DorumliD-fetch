// fetch - server bilan muloqot qilish uchun ishlatiladigan js metod
// fetch('qayerga?', nima?);

fetch("http://localhost:8081/api/users") // bekendga murojat ketdi
  .then((javob) => javob.json()) // kelgan javobni json formatga o'girildi
  .then((data) => {
    console.log(data); // consolga chiqarildi
    console.log(data); // consolga chiqarildi

    data.forEach((obj) => {
      let newDiv = document.createElement("div");

      newDiv.setAttribute("class", "box");

      newDiv.innerHTML = `
        <h1>${obj.id}</h1>
        <button onclick="deleteUser(event)">delete</button>
        <p>${obj.email}</p>
        <p>${obj.phone}</p>
        <p>${obj.name}</p>
        <span>${obj.username}</span>
        `;
      document.body.appendChild(newDiv); // bodyga div qo'shildi
    });
  });

// http metodlari
// Get -> ma'lumot olish
// Post -> yangi ma'lumot yaratish
// Put -> ma'lumotni o'zgartirish (to'la)
// Patch -> ma'lumotni o'zgartirish (qisman)
// Delete -> ma'lumotni o'chirish


function deleteUser(event){
    let clickedButton = event.target;
    let id = clickedButton.previousElementSibling.innerText;


    fetch(`http://localhost:8081/api/users/${id}`, {
        method: 'Delete',
        headers: {'Content-Type': 'application/json'},    
    })

}





function createUser(){

let newName = document.getElementById("name").value;
let newUserName = document.getElementById("username").value;
let newEmail = document.getElementById("email").value;
let newPhone = document.getElementById("phone").value;

    fetch("http://localhost:8081/api/users", {
        method: "POST", // http metodlari ichida 'POST' qo'shildi
        headers: {
    "Content-Type": "application/json", // json formatda o'zgartirish uchun header qo'shildi
    },
    body: JSON.stringify({
        name: newName,
        username: newUserName,
        email: newEmail,
        phone: newPhone,
        }),
    });

}


