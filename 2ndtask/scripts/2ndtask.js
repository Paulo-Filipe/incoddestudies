
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