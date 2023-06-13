	(function(){
	let display = document.querySelector('.display');
	let buttons = document.querySelectorAll('.btn');
	let clearButton = document.querySelector('.clear');
	let equalButton = document.querySelector('.equal');

	buttons.forEach(function(btn){
		btn.addEventListener('click',function(e){
			let values = e.target.value;
			display.values += values;
		})
	});
equalButton.addEventListener('click',function(e){
	if (display.values==="") {
		display.values = '';
	}
	else{
		let answear = eval(display.values);
		display.values = answear;
	}
})
clearButton.addEventListener('click',function(e){
	display.values = '';
})
});