userID = 1
bookID = 1
var userlist = []
var booklist = []

function addName(){
	var val = document.querySelector('#cadastrarNome').value;
	if (val.length >= 20){
		alert("This name is too long!");
		document.querySelector('#cadastrarNome').value = "Nome Completo";
	} else if (userlist.includes(val)) {
		alert("This name is already on the system!");
		document.querySelector('#cadastrarNome').value = "Nome Completo";
	} else if(val !== undefined){

			var tr = document.querySelector("#userTable");
			tr.innerHTML += "<tr>\n<td>" + userID + "</td>\n<td>" + val + "</td>\n</tr>";
			userID += 1;
			userlist.push(val);
			document.querySelector('#cadastrarNome').value = "Nome Completo";
	}
}

function addBook(){
	var val = document.querySelector('#cadastrarLivro').value;
	if (val.length >= 20){
		alert("This book name is too long!");
		val="Livro";
	}else if (booklist.includes(val)) {
		alert("This book is already on the system!");
		document.querySelector('#cadastrarBook').value = "Livro";
	} else if(val !== undefined){

		var tr = document.querySelector("#bookTable");
		tr.innerHTML += "<tr>\n<td>" + bookID + "</td>\n<td>" + val + "</td>\n</tr>";
		bookID += 1;
		booklist.push(val);
		document.querySelector('#cadastrarLivro').value = "Livro";
	}
}
function cleanInputName(){
	document.querySelector('#cadastrarNome').value = "";
}
function cleanInputBook(){
	document.querySelector('#cadastrarLivro').value = "";
}