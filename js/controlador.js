"use strict";
function WordSearchController(gameId, listId, solveId, newGameId, instructionsId, themeId) {

	var searchTypes = {

		"palabras": [["DOM", "CSS", "HTML", "ETIQUETA"],
			["DISEÑO", "GIT", "GITHUB", "FIGMA"],
			["HTTP", "FTP", "DNS", "NAVEGADOR"],
			["HEADER", "SECTION", "FOOTER", "FORMULARIOSWEB"],
			["DIV",  "DISPLAY",  "MARGIN", "PADDING"],
			["FLOAT",  "COLOR",  "BORDER", "FORO"],
			["JAVASCRIPT"]],
	};

	var game;
	var view;

	var mainInstructions = "Encuentra las palabras que aparecen a continuación";

	setUpWordSearch();

	function setUpWordSearch() {
		var searchTypesArray = Object.keys(searchTypes); 
		var randIndex = Math.floor(Math.random()*searchTypesArray.length); 
		var listOfWords = searchTypes[searchTypesArray[randIndex]];  

		updateHeadings(mainInstructions, searchTypesArray[randIndex]);

		game = new WordSearchLogic(gameId, listOfWords.slice());
		game.setUpGame();

		view = new WordSearchView(game.getMatrix(), game.getListOfWords(), gameId, listId, instructionsId);
		view.setUpView();
		view.triggerMouseDrag();

	}

	function updateHeadings(instructions, theme) {

		$(instructionsId).text(instructions);
		$(themeId).text(theme);
	}
	$(solveId).click(function() {
		view.solve(game.getWordLocations(), game.getMatrix());
	});

	$(newGameId).click(function() {

		$(gameId).empty();
		$(listId).empty();
		$(themeId).empty();
		
		setUpWordSearch();

	})

}