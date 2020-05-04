function findCard(){
	let val = document.querySelector('#cardSearch').value;
	let showCard = document.querySelector('.showCards');

	if (val.length >= 20){
		alert("This name is too long!");
		document.querySelector('#cadastrarNome').value = "";
	} else if((val !== undefined) && (val !== "")){
		let search = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${val}?collectible=1&locale=ptBR`
		fetch(search, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
				"x-rapidapi-key": "956dfec896msha4abd84ff58f505p1dca14jsn9158346487a2"
			}
		})
		.then(response => response.json())
  		.then(data => {
  			let cardList = [];
  			let cardImgList = [];
  			

  			for (let i=0 ; i < data.length ; i++ ) {
  				cardList.push(data[i].name);
  				cardImgList.push(data[i].img);
  			};
  			

  			for (let i=0 ; i < cardList.length ; i++) {
  				showCard.innerHTML += `<h3>${cardList[i]}</h3>`;
  				showCard.innerHTML += `<img src=${cardImgList[i]}>`;
  			};
  		})
  		.catch(err =>{console.log(err);
  		});
	}
}