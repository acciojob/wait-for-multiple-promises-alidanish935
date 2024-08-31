//your JS code here. If required.

function createPromise(pNum) {
	return new Promise((resolve,reject)=>{
		const time = Math.random()*2+1;
		setTimeout(()=>{
			resolve({pNum,time});
		},time*1000);
	})
}
const p1 = createPromise(1);
const p2 = createPromise(2);
const p3 = createPromise(3);

const startTime = Date.now();
Promise.all([p1,p2,p3]).then((results)=>{
	const totalTime = (Date.now()-startTime)/1000;
	const output = document.getElementById("output");
	results.forEach((result)=>{
		const Row = document.createElement("tr");
		Row.innerHTML = `<td>Promise ${result.pNum}</td><td>${result.time.toFixed(3)}</td> `
		output.appendChild(Row);
	})
	const totalRow = document.createElement("tr");
	totalRow.innerHTML = `<td>Total</td> <td>${totalTime}</td> `
	output.appendChild(totalRow)
	
})



