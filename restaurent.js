const buttonElement = document.getElementById("btn");
const jokeEL = document.getElementById("joke");
const apiKey = "MV32TabvT4whtqJyHLaPWw==I5ZBM1nX5Q0VzdFY";
const options = {
	method: "GET",
	headers:{
		"X-Api-Key":apiKey,
	},
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getAjoke() {
	
	// body...
	try{
	jokeEL.innerText = "updating...";
	buttonElement.disabled = true;
	buttonElement.innerText = "Loading...";

	const response = await fetch(apiURL,options);
	const data = await response.json();
	buttonElement.disabled = false;
	buttonElement.innerText = "You want another joke";

	jokeEL.innerText = data[0].joke;
 }catch(error){
 	jokeEL.innerText = "An error occured,try again after";
 	console.log(error);
 }	
}
buttonElement.addEventListener("click",getAjoke);