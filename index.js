let gm = require("gm");

gm("1.png").crop(800, 200, 0, 100).write("3.png", function (err) {
	if (err) {
		console.log(err);
	}
});

gm("1.png").rotate('red', 90).write("4.png", function (err) {
	if (err) {
		console.log(err);
	}
});