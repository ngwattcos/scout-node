import express from "express";

const app = express();
const port = process.env.PORT || 3000;

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