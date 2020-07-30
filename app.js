var count = 0;
function grater(){
	var number1 = document.getElementById('num1').value;
	var color = document.getElementById('color').value;
	console.log(color)
	
	for(let i = 0;i<Number(number1);i++)
	{
		count++;
		var Box=document.createElement("div");
		Box.id='box';
		Box.innerHTML = 'BOX ' + count;
		if (color === '#000000') {
			Box.style="background-color:"+color+";color:white;"
		}
		else if (color === '#ffffff') {
			Box.style="background-color:"+color+";border:2px solid black"
		}
		else{
			Box.style="background-color:"+color+";"
		}
		

	document.getElementById('container').appendChild(Box);}
}