// 
$(document).ready(function () {



	// // Varible Declarations
	// --------------------------------------------------------------------------------------
	// 

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCA2t1BoDDCwEso49kYMl_IaJNrrKKnGfg",
		authDomain: "the-project-e0832.firebaseapp.com",
		databaseURL: "https://rpsgame-d1d4e.firebaseio.com/",
		projectId: "rpsgame-d1d4e",
		storageBucket: "",
		messagingSenderId: "428869478928"
	};

	firebase.initializeApp(config);
	// Database Connections
	// Create a variable to reference the database
	var database = firebase.database();
	var connectionsRef = database.ref("/players");
	var connectedRef = database.ref(".info/connected");
	var p1Ref = connectionsRef.child('/p1'); // firebase.database().ref().child("/p1")
	var p2Ref = connectionsRef.child('/p2');
	var chatRef = database.ref("/chat");

	// console.log(database.ref());
	// console.log(database.ref(".info/connected"));

	// Varibles

	var name = "";
	var wins = 0;
	var losses = 0;
	var choice = "";


	var p1name = "";
	var p1wins = 0;
	var p1losses = 0
	var p1choice = "";
	var p2name = "";
	var p2wins = 0;
	var p2losses = 0;
	var p2choice = "";
	var activeConnections = 0;

	// var turn = '';
	// var resultsin = '';

	// DOM Caching
	var $submitName = $("#submit-name");
	var $username = $("#username");
	var $p1Area = $("#player-one");
	var $p2Area = $("#player-two");
	var $pwinArea = $("#player-win");
	var $messageDisp = $("#messenger");
	var $messageInput = $("#messenger-input");
	var $sendBtn = $("#send-btn");

	// Functions
	// --------------------------------------------------------------------------------------
	//

	// initial load or upon connections changes...
	function playername() {

		// Prevent default behavior
		event.preventDefault();

		connectedRef.on("value", (snapshot) => {
			if (snapshot.val()) {
				connectionsRef.push(true);
				connectionsRef.onDisconnect().remove();
			}
		});

		connectionsRef.on('value', (snapshot) => {

			activeConnections = snapshot.numChildren();
			console.log('Number of players ONLINE: ' + activeConnections);

				name = $username.val();
				if (name != '') {
					console.log(name);
					if (activeConnections == 1) {

						$p1Area.html(name);

						database.ref().child("/p1").set({
							name: name,
							wins: p1wins,
							losses: p1losses,
							choice: p1choice
						});
					} else if (activeConnections == 2) {

						$p2Area.html(name); //name of opponent update from firebase

						database.ref().child("/p2").set({
							name: name,
							wins: p2wins,
							losses: p2losses,
							choice: p2choice
						});
					} else {
						console.log("The game is full, please try again later...");
						// connectionsRef.remove(); how do i kick
					}
				}
		})
	};

 // Event Binders
 $submitName.on('click', playername);
//  $sendBtn.on('click', chat);

	// database.ref().on("value", function(snapshot) {
	// 	console.log(snapshot.val());

	// }, function(errorObject) {
	// 	console.log("The read failed: " + errorObject.code);
	// });








	// https://github.com/jpdevspace/Firebase-Multiplayer-Game
	// https://console.firebase.google.com/project/rpsgame-d1d4e/database/rpsgame-d1d4e/data/players/-L6tVaYYkzmC1lU1GOKf

	var game = {
		// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
		choices: ["Rock", "Paper", "Scissors"],


		createRPS: function () {

		},

		updateStats: function () {

		},

		selection: function (e) {
			// if ($(e.target).data("name") == 1) {
			// 	game.win();
			// } else {
			// 	game.lose();
			// };
		},

		win: function () {
			console.log('win');
		},

		lose: function () {
			console.log('lose');
		},
		playeractive: function () {

		},

	}



	// start the game
	/// enter player 1 and player 2 names into inputs
	//// press start; writes the players name into the html/database

	// once both players exist
	/// run createRPS, to create option buttons for each player
	//// each player must select 1of3 to continue, their choice is written to the db and displayed only on the individual players screen

	// logic decides winner; winner displayed in center div #player-win

	// get im working


	// player 1 inputs name /
	// waiting for player 2
	// player 2 inputs name
	// firebase save names
	// alert player 2 name to player 1 firebase call names
	// alert player 1 name to player 2 firebase call names
	// ready, go!
	// provide three picture choices to click and a 5 second timer
	// on player click, fill half split battle screen with that player's choice push choice to firebase under player's name
	// on both clicks, populate both halves with images pull opponent from firebase
	// on both clicks, animate winning picture covering losing picture increment and push win/lose/tie counter to firebase
	// on timeout by one player, alert other player that they've won by timeout push win to firebase
	// alert win/lose/tie to each player pull from firebase
	// display as wins losses and ties at the top of the screen
	// repeat from ready, go!
	// on end game button, alert player that game end, push end game to firebase, alert other player that name has ended the game and reset both to name $('#name-input').val() screen
	// .child.set()




	// Process
	// --------------------------------------------------------------------------------------
	// 



	// This function is run whenever the user presses a key.
	// document.onkeyup = function (event) {

	// 	// Determines which key was pressed.
	// 	var userGuess = event.key;

	// 	// Randomly chooses a choice from the options array. This is the Computer's guess.
	// 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// 	// Reworked our code from last step to use "else if" instead of lots of if statements.

	// 	// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
	// 	if ((userGuess === "Rock") || (userGuess === "Paper") || (userGuess === "Scissors")) {

	// 		if ((userGuess === "Rock") && (computerGuess === "Scissors")) {
	// 			wins++;
	// 		} else if ((userGuess === "Rock") && (computerGuess === "Paper")) {
	// 			losses++;
	// 		} else if ((userGuess === "Scissors") && (computerGuess === "Rock")) {
	// 			losses++;
	// 		} else if ((userGuess === "Scissors") && (computerGuess === "Paper")) {
	// 			wins++;
	// 		} else if ((userGuess === "Paper") && (computerGuess === "Rock")) {
	// 			wins++;
	// 		} else if ((userGuess === "Paper") && (computerGuess === "Scissors")) {
	// 			losses++;
	// 		} else if (userGuess === computerGuess) {
	// 			ties++;
	// 		}

	// 		// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	// 		var html =
	// 			"<p>You chose: " + userGuess + "</p>" +
	// 			"<p>The computer chose: " + computerGuess + "</p>" +
	// 			"<p>wins: " + wins + "</p>" +
	// 			"<p>losses: " + losses + "</p>" +
	// 			"<p>ties: " + ties + "</p>";

	// 		// Set the inner HTML contents of the #game div to our html string
	// 		document.querySelector("#game").innerHTML = html;
	// 	}
	// };
});