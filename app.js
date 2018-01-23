/******************************
	CREATE ARRAY WITH GIFFS
*******************************/

var giffs = [
	"https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
	"https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
	"https://media.giphy.com/media/3m97D6EGGc4sE/giphy.gif",
	"https://media.giphy.com/media/3m97D6EGGc4sE/giphy.gif",
	"https://media.giphy.com/media/FcHbO8FBMfsGY/giphy.gif",
	"https://media.giphy.com/media/FcHbO8FBMfsGY/giphy.gif",
	"https://media.giphy.com/media/4Z46NcIAOO3ok/giphy.gif",
	"https://media.giphy.com/media/4Z46NcIAOO3ok/giphy.gif",
	"https://media.giphy.com/media/gmg7s5bBQzlN6/giphy.gif",
	"https://media.giphy.com/media/gmg7s5bBQzlN6/giphy.gif",
	"https://media.giphy.com/media/UcK7JalnjCz0k/giphy.gif",
	"https://media.giphy.com/media/UcK7JalnjCz0k/giphy.gif",
	"https://media.giphy.com/media/EIJQbFyFFdo2s/giphy.gif",
	"https://media.giphy.com/media/EIJQbFyFFdo2s/giphy.gif",
	"https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
	"https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
	"https://media.giphy.com/media/aeIuSiMkcTsRO/giphy.gif",
	"https://media.giphy.com/media/aeIuSiMkcTsRO/giphy.gif",
	"https://media.giphy.com/media/wENb4DSakhJEA/giphy.gif",
	"https://media.giphy.com/media/wENb4DSakhJEA/giphy.gif",
	"https://media.giphy.com/media/143vPc6b08locw/giphy.gif",
	"https://media.giphy.com/media/143vPc6b08locw/giphy.gif",
	"https://media.giphy.com/media/xT8qBsOjMOcdeGJIU8/giphy.gif",
	"https://media.giphy.com/media/xT8qBsOjMOcdeGJIU8/giphy.gif"
]


var gameStatus = false;
var startButton = document.querySelector('#start')
var board = document.querySelector('#container')


// event listener for startbutton
startButton.addEventListener('click', startGame)

//STARTGAME
function startGame(){
	if(!gameStatus){
		gameStatus = true;
		shuffleArray(giffs)	
		buildBorad()
	}
	
}

function shuffleArray(array){
	for(var i = array.length-1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i+1))
		var itemValue = array[i]
		array[i] = array[j]
		array[j] = itemValue;
	}	
	return array
}

// CREATE BOARD
function buildBorad() {
	for(var i = 0; i < giffs.length; i++){
		// create elements
		var gameTile = document.createElement('div')
		var image = document.createElement('img')

		// set attributes
		gameTile.setAttribute('class', 'gameTile')
		image.setAttribute('id', 'card'+ i)
		image.setAttribute('class', 'giff')
		image.setAttribute('src', giffs[i])

		// set event listener on image
		image.addEventListener('click', function(){
			alert(event.target.id)
		})

		// append elements
		gameTile.append(image) 
		board.append(gameTile)

	}
}






