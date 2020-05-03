userID = 1
bookID = 1
var userlist = []
var booklist = []

function addName(){
	var val = document.querySelector('#cadastrarNome').value;
	if (val.length >= 20){
		alert("This name is too long!");
		document.querySelector('#cadastrarNome').value = "";
	} else if (userlist.includes(val)) {
		alert("This name is already on the system!");
		document.querySelector('#cadastrarNome').value = "";
	} else if((val !== undefined) && (val !== "")){

			var tr = document.querySelector("#userTable");
			tr.innerHTML += "<tr>\n<td>" + userID + "</td>\n<td>" + val + "</td>\n</tr>";
			userID += 1;
			userlist.push(val);
			document.querySelector('#cadastrarNome').value = "";
	}
}

function addBook(){
	var val = document.querySelector('#cadastrarLivro').value;
	if (val.length >= 20){
		alert("This book name is too long!");
		document.querySelector('#cadastrarLivro').value = "";
	}else if (booklist.includes(val)) {
		alert("This book is already on the system!");
		document.querySelector('#cadastrarLivro').value = "";
	} else if((val !== undefined) && (val !== "")){

		var tr = document.querySelector("#bookTable");
		tr.innerHTML += "<tr>\n<td>" + bookID + "</td>\n<td>" + val + "</td>\n</tr>";
		bookID += 1;
		booklist.push(val);
		document.querySelector('#cadastrarLivro').value = "";
	}
}
function showBooks(){
	let show = document.querySelector('.livros').style.visibility;
	if(show == "initial"){
		document.querySelector('.livros').style.visibility = "visible";
		document.querySelector('.usuarios').style.visibility = "hidden";
	} else if (show == "visible"){
		document.querySelector('.livros').style.visibility = "hidden";
	} else{
		document.querySelector('.livros').style.visibility = "visible";
		document.querySelector('.usuarios').style.visibility = "hidden";
	}
}
function showUsers(){
	let show = document.querySelector('.usuarios').style.visibility;
	if (show == "initial"){
		document.querySelector('.usuarios').style.visibility = "visible";
		document.querySelector('.livros').style.visibility = "hidden";
	} else if (show == "visible"){
		document.querySelector('.usuarios').style.visibility = "hidden";
	} else {
		document.querySelector('.usuarios').style.visibility = "visible";
		document.querySelector('.livros').style.visibility = "hidden";
	}
}
function enterInput1(ke){
	if((ke.keyCode == 13) || (ke.which == 13)){
		return document.querySelector('.createBook').click();
	}
}
function enterInput2(ke) {
	if((ke.keyCode == 13) || (ke.which == 13)){
		return document.querySelector('.createName').click();
	}
}