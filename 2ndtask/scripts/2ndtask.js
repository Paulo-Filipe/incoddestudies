
function getUsers(){
  document.querySelector().innerHTML = "";
  let search = `https://quizka-development.herokuapp.com/api/users`
  fetch(search, {
    "method": "GET",
    "headers": {
      
    }
  })
  .then(response => {
      
    if(!response.ok){
      throw new Error("Not found!");
    }else {return response.json()}
    })

  .then(data => {

  })

  .catch(err => {

  });
}