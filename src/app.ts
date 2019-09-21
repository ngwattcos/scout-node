import express from "express";

const app = express();
const port = 3000;
	app.get('/', (req, res) => {
	res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, err => {
	if (err) {
		return console.error(err);
	}

	return console.log(`server is listening on ${port}`);
});

app.get("/", (req, res) => {
	console.log("main page");
	res.send({
		msg: "you have gotted this"
	});
})


app.get("/potato", (req, res) => {
	console.log("potato");
	res.send({
		msg: "potato"
	});
});