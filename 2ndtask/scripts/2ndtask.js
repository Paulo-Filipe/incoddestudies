
function getUsers(){

  let show =  document.querySelector('.showUsers');
  let search = `https://quizka-development.herokuapp.com/api/users`;

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
      show.innerHTML +=`<tr>
                          <td>${idsList[i]}</td>
                          <td>${usersList[i]}</td>
                          <td>${emailList[i]}</td>
                        </tr>`;
    }
  })
  .catch(err =>{alert("something went wrong!")});
}

function createuser(){

  let search = `https://quizka-development.herokuapp.com/api/users`;
  
  let login = document.querySelector('#newUserLogin').value;
  let pass = document.querySelector('#newUserPassword').value;
  let email = document.querySelector('#newUserEmail').value;

  fetch('https://example.com/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}