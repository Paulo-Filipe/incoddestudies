
function getUsers(){


  let show =  document.querySelector('.showUsers');
  let search = `https://quizka-development.herokuapp.com/api/users`;

  console.log(show.length);

  while(show.childNodes.length > 4){
    show.removeChild(show.lastChild);
  }

  fetch(search)
  .then(response => {
    if(!response.ok){
        throw new Error("Not found!");
      } else {return response.json()}
  })
  .then(data => {return data.data})
  .then(usersData =>{
    console.log(usersData);

    var idsList =   [];
    var usersList = [];
    var emailList = [];

    for(let i=0; i < usersData.length;i++){
      idsList.push(usersData[i]._id);
      usersList.push(usersData[i].username);
      emailList.push(usersData[i].email);
    }

    for(let i=0; i < idsList.length; i++){
      show.innerHTML +=`<tr class="tableBody">
                          <td>${idsList[i]}</td>
                          <td>${usersList[i]}</td>
                          <td>${emailList[i]}</td>
                        </tr>`;
    }
  })
  .catch(err =>{alert("something went wrong!")});
}

function createUser(){

  let search = `https://quizka-development.herokuapp.com/api/users`;

  let login = document.querySelector('#newUserLogin').value;
  let pass = document.querySelector('#newUserPassword').value;
  let email = document.querySelector('#newUserEmail').value;

  if((login == "") || (pass == "") || (email== "") || (pass.length < 6)){
    return alert("é preciso fornecer login, senha de pelo menos 6 caracteres e email válido");
  }else{

    var data = {
      'username': login,
      'password': pass,
      'email'   : email
    };

    fetch(search, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => {
    if(!response.ok){
        throw new Error("Not found!");
      } else {return response.json()}
    })
    .then(data => {
      console.log('Success:', data);
    })
    .then(document.querySelector('#newUserLogin').value = "")
    .then(document.querySelector('#newUserPassword').value = "")
    .then(document.querySelector('#newUserEmail').value = "")
    .then(setTimeout(getUsers(), 1200))
    .catch((error) => {
      alert("something went wrong!");
      console.error('Error:', error);
    });
  }
}

function deleteUser(){

 let del =  document.querySelector('#deleteUser').value;

 if(confirm(`tem certeza que deseja deletar ${del}?`)){

  search = `https://quizka-development.herokuapp.com/api/users/${del}`
  console.log(del);

  fetch(search, {
  method: 'DELETE',
  })
  .then(response => {
    if(!response.ok){
        throw new Error("Not found!");
      } else {return response.json()}
    })
  .then(data => console.log(data))
  .then(getUsers())
  .then(document.querySelector('#deleteUser').value = "")
  .catch(err => console.error("something went wrong!"))
 } else {alert("usuário não deletado.")}
}