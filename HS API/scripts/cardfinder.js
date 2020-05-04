function findCard(){
	document.querySelector('.showCards').innerHTML = "";
	let val = document.querySelector('#cardSearch').value;
	let showCard = document.querySelector('.showCards');


	if (val.length >= 20){
		alert("This name is too long!");
		document.querySelector('#cardSearch').value = "";
	} else if((val !== undefined) && (val !== "")){
		let search = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${val}?collectible=1&locale=ptBR`
		fetch(search, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
				"x-rapidapi-key": "956dfec896msha4abd84ff58f505p1dca14jsn9158346487a2"
			}
		})
		.then(response => {
			
			if(!response.ok){
				throw new Error("Not found!");
			}else {return response.json()}
		})
  		.then(data => {
  			let cardList = [];
  			let cardIds = [];
  			let cardFlavor = [];

  			console.log(data);

  			for (let i=0 ; i < data.length ; i++ ) {
  				cardList.push(data[i].name);
  				cardIds.push(data[i].cardId);
  				cardFlavor.push(data[i].flavor);
  			};
  			

  			for (let i=0 ; i < cardList.length ; i++) {
  				showCard.innerHTML +=  `<div class="card">
  											<h3>${cardList[i]}</h3>
  											<img src="https://art.hearthstonejson.com/v1/render/latest/ptBR/512x/${cardIds[i]}.png" >
  											<h6>${cardFlavor[i]}</h6>
  										</div>`
  			};
  		})
  		.catch(err =>{alert("No card found!");
  		});
		document.querySelector('#cardSearch').value = "";
	}
}

function enterInput(ke){
	if((ke.keyCode == 13) || (ke.which == 13)){
		return document.querySelector('.findCard').click();
	}
}