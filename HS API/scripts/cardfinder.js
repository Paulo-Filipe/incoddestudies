async function findCard(){
	let val = document.querySelector('#cardSearch').value;
	console.log(val);
	if (val.length >= 20){
		alert("This name is too long!");
		document.querySelector('#cadastrarNome').value = "";
	} else if((val !== undefined) && (val !== "")){
		let search = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/"+ val;
		fetch(search, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
				"x-rapidapi-key": "956dfec896msha4abd84ff58f505p1dca14jsn9158346487a2"
			}
		})
		.then(response => response.json())
  		.then(data => console.log(data))
  		.catch(err =>{console.log(err);
  		});
	}
}