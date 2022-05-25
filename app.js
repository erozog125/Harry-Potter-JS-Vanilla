const URL = "http://hp-api.herokuapp.com/api/characters/";
const main = document.querySelector("main");
const btnGenerate = document.getElementById("btn-generate");
const txtFind = document.getElementById("txt-find");

const getAllCharacters = async () => {
	const response = await fetchData(URL);
	main.innerHTML = "";	  		
	const selectedCharacters = response.slice(0, 14);
	selectedCharacters.map(character => generateCharacter(character));
};

const getXTxt = async (event) => {
	main.innerHTML = "";
	const characters = await fetchData(URL);	
	const txtFind = event.target.value;	
	const find = characters.filter( character => character.name.includes(txtFind)).slice(0,14);		
	console.log(find);
	console.log(find.length);
	find.map(character => generateCharacter(character));
}

const generateCharacter = (character) => {
 const card = document.createElement("div");
 card.classList.add("card");

 const nameCharacter = document.createElement("p");
 nameCharacter.classList.add("randomTitle");
 nameCharacter.textContent = character.name;

 const imgCharacter = document.createElement("img");
 imgCharacter.classList.add("img-card");
 imgCharacter.src = character.image;
 imgCharacter.alt = character.name;

 card.appendChild(imgCharacter);
 card.appendChild(nameCharacter);

 main.appendChild(card);
};

btnGenerate.addEventListener("click", getAllCharacters);
txtFind.addEventListener("keypress", getXTxt); 

const fetchData = async (api) => {
	const res = await fetch(api);
	const data = await res.json();
	return data;
}