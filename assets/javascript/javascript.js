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
	var choices = ["Rock", "Paper", "Scissors"];


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

			if ($username.val() != '') {

				if (activeConnections == 1) {
					p1name = $username.val();
					database.ref().child("/p1").set({
						name: p1name,
						wins: p1wins,
						losses: p1losses,
						choice: p1choice
					});
					// console.log(database.ref().child("/p1"));
					// 	$p1Area.html(p1name);
					// $p2Area.html(p2name);
					showName();
					showButtons();

				} else if (activeConnections == 2) {
					p2name = $username.val();
					database.ref().child("/p2").set({
						name: p2name,
						wins: p2wins,
						losses: p2losses,
						choice: p2choice
					});
					// 	$p1Area.html(p1name);
					// $p2Area.html(p2name);
					showName();
					showButtons();

				} else {
					console.log("The game is full, please try again later...");
					// connectionsRef.remove(); how do i kick
				}
				// $p1Area.html(p1name);
				// $p2Area.html(p2name); //name of opponent update from firebase
			}
		})
	};

	// Event Binders
	$submitName.on('click', playername);
	// $submitName.on('click', playername, function(){
	// 	$("#submit-form").remove();
	// });


	//  $sendBtn.on('click', chat);

	// database.ref().on("value", function(snapshot) {
	// 	console.log(snapshot.val());

	// }, function(errorObject) {
	// 	console.log("The read failed: " + errorObject.code);
	// });

	function showName() {
		console.log("hey ya!");
		$p1Area.html(p1name);
		$p2Area.html(p2name);
	};

	function showButtons() {
		$("#choicesBtn").removeClass("hidden")
	};

	function chat() {

	};




	


	// var game = {
	// 	// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
	// 	choices: ["Rock", "Paper", "Scissors"],


	// 	createRPS: function () {

	// 	},

	// 	updateStats: function () {

	// 	},

	// 	selection: function (e) {
	// 		// if ($(e.target).data("name") == 1) {
	// 		// 	game.win();
	// 		// } else {
	// 		// 	game.lose();
	// 		// };
	// 	},

	// 	win: function () {
	// 		console.log('win');
	// 	},

	// 	lose: function () {
	// 		console.log('lose');
	// 	},
	// 	playeractive: function () {

	// 	},

	// }



	// start the game
	/// enter player 1 and player 2 names into inputs
	//// press start; writes the players name into the html/database

	// once both players exist
	/// run createRPS, to create option buttons for each player
	//// each player must select 1of3 to continue, their choice is written to the db and displayed only on the individual players screen

	// logic decides winner; winner displayed in center div #player-win

	// get chat working


	// player 1 inputs name /// waiting for player 2
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

// replace on keyup with something like:-----
	// $(document).on("click", '.answer-button', function (event) {
	// 	theWholeGame.clickedOn(event);
	// });

	// where the event would attach to the value of the choice buttons (Rock, Paper, Scissors)
// ---------

	
	// 	// Determines which key was pressed.
	// 	var userChoise = event.val;


	// 	// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
	// 	if ((userChoise === "Rock") || (userChoise === "Paper") || (userChoise === "Scissors")) {

	// 		if ((userChoise === "Rock") && (computerGuess === "Scissors")) {
	// 			wins++;
	// 		} else if ((userChoise === "Rock") && (computerGuess === "Paper")) {
	// 			losses++;
	// 		} else if ((userChoise === "Scissors") && (computerGuess === "Rock")) {
	// 			losses++;
	// 		} else if ((userChoise === "Scissors") && (computerGuess === "Paper")) {
	// 			wins++;
	// 		} else if ((userChoise === "Paper") && (computerGuess === "Rock")) {
	// 			wins++;
	// 		} else if ((userChoise === "Paper") && (computerGuess === "Scissors")) {
	// 			losses++;
	// 		} else if (userChoise === computerGuess) {
	// 			ties++;
	// 		}

	// 		// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	// 		var html =
	// 			"<p>You chose: " + userChoise + "</p>" +
				// "<p>Your opponent chose: " + ?userChoise + "</p>" +
	// 			"<p>wins: " + wins + "</p>" +
	// 			"<p>losses: " + losses + "</p>";



	// 	}
	// };
});



// Link to firebase db.
	// https://console.firebase.google.com/project/rpsgame-d1d4e/database/rpsgame-d1d4e/data/players/-L6tVaYYkzmC1lU1GOKf
