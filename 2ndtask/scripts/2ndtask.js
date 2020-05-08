
function getUsers(){

  let show =  document.querySelector("showUsers");
  let search = `https://quizka-development.herokuapp.com/api/users`;

  fetch(search)
  .then(response => response.json())
  .then(data => {return data.data})
  .then(usersdata =>{
    console.log(usersdata);

    var idsList =   [];
    var usersList = [];
    var emailList = [];
    
  })
}