var fs = require('fs');

var file_reader = fs.readFileSync('data1.json', 'utf8');
//console.log(file_reader);
var mydata = JSON.parse(file_reader);
//console.log(mydata);
var variant, m1, m2, d1, d2, p1, p2, bildProb, noBuildProb, years;

function bestDecison() {
	let decision = [];
	let best;
	for (let i = 0; i < 4; i++) {
		best = parseFloat((mydata[i].D1 * mydata[i].P1 + mydata[i].D2 * mydata[i].P2) * mydata[i].years / mydata[i].M1);
		decision.push(best);
		mydata[i].coef = best;
		console.log("Eficciency " + mydata[i].var + " equals = " + decision[i]);
	}


	for (let i = 0; i < 4; i++) {
		if (mydata[i].coef == Math.max.apply(Math, decision)) {
			console.log("The best solution is: " + mydata[i].var + "\nPrice: " + mydata[i].M1 + "\nIncome: " + mydata[i].D1 + "\nProbability: " + mydata[i].P1 + "\nLoss: " + mydata[i].D2 + "\nProbability: " + mydata[i].P2 + "\nNumber of years: " + mydata[i].years);
		}
	}
}

bestDecison();


require('readline')
	.createInterface(process.stdin, process.stdout)
	.question("Press [Enter] to exit...", function () {
		process.exit();
	});


