var rand =  Math.floor(Math.random()*101);
a = [];

function new_element(){
	num = document.getElementById('array').value;
	n = a.push(num);
	if(n == 10 || num == rand)
	{
		if(n == 10)
			{
				next_time();
			}
		if(num == rand)
			{
				win();
			}
			exit();
	}
	document.getElementById('counter').innerHTML = "Guess left:- " + (10-n);
	document.getElementById('show').innerHTML = "";
	help1();
	help2();
	for(x in a)
	{
		document.getElementById('show').innerHTML += a[x];
		document.getElementById('show').innerHTML += " ";	
	}
}
function next_time()
{
	alert("The random number was "+rand);
}

function win()
{
	alert("ok you win");
}

function exit()
{
	location.reload();
}

function help1()
{
	if(rand%2==0)
	{
		document.getElementById('help1').innerHTML = "when random number is divided by 2  and \n";	
	}
	else if(rand%3==0)
	{
		document.getElementById('help1').innerHTML = "when random number is divided by 2  and \n";	
	}
}

function help2()
{
	if(rand<50)
	{
		document.getElementById('help2').innerHTML = "maybe random number is equal or less than 50";	
	}
	else if(rand>50)
	{
		document.getElementById('help2').innerHTML = "maybe random number is equal or greater  than 50";	
	}
}