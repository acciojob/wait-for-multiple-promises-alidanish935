//your JS code here. If required.

function createPromise(pNum) {
	return new Promise((resolve,reject)=>{
		const time = Math.random()*2+1;
		setTimeOut(()=>{
			resolve(pNum);
		},time*1000);
	})
}
const promis1 = createPromise(1);