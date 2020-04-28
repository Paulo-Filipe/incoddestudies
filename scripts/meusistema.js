userID = 1
bookID = 1



function addName(){
	var val = document.querySelector('#cadastrarNome').value;
	if((val !== undefined) && (val!== "Nome Completo")){
		if(val.lenght >== 28){
			alert("This name is too long!");
		}
		var tr = document.querySelector("#userTable");
		tr.innerHTML += "<tr>\n<td>" + userID + "</td>\n<td>" + val + "</td>\n</tr>";
		userID += 1;
	}
}
function addBook(){
	var val = document.querySelector('#cadastrarLivro').value;
	if((val !== undefined) && (val!== "Livro")){
		if(val.lenght >== 28){
			alert("The book name is too long!");
		}

		var tr = document.querySelector("#bookTable");
		tr.innerHTML += "<tr>\n<td>" + BookID + "</td>\n<td>" + val + "</td>\n</tr>";
		bookID += 1;
	}
}