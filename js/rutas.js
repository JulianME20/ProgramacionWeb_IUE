"use strict";
var paths = { 

	vert: "vertical",
	horizon: "horizontal",

	vertBack: "verticalBackwards",
	horizonBack: "horizonBackwards",
};

var bounds = { 

	[paths.vert]: (x, y, s) => (x < s),
	[paths.horizon]: (x, y, s) => (y < s),

	[paths.vertBack]: (x, y, s) => (x >= 0),
	[paths.horizonBack]: (x, y, s) => (y >= 0),
};
var incr = { 

	[paths.vert]: (x, y) => ({x: x+1, y: y}),
	[paths.horizon]: (x, y) => ({x: x, y: y+1}),

	[paths.vertBack]: (x, y) => ({x: x-1, y: y}),
	[paths.horizonBack]: (x, y) => ({x: x, y: y-1}),
};