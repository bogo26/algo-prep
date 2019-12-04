var x = $0.textContent.toString()
x = x.split('\n');

var total = 0;
var y = x.splice(0, 100)

y.forEach(el => {
	let fuel;
	fuel = Math.floor(parseInt(el)/3) - 2;
	while (fuel > 0) {
		total += fuel;
		fuel= Math.floor(fuel/3) - 2;
    }
})

console.log(total);