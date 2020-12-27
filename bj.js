let blackjackgame={
	'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
	'value':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':11,'J':12,'Q':13,'A':14},
	'you':{'score':0},
	'dealer':{'score':0}
};
let hitsound=new Audio('sounds/swish.m4a')
let wonsound=new Audio('sounds/cash.mp3')
let lostsound=new Audio('sounds/aww.mp3')
document.querySelector('#hit').addEventListener('click',blackjackHit);
document.querySelector('#stand').addEventListener('click',blackjackStand);
document.querySelector('#deal').addEventListener('click',blackjackDeal);

function blackjackHit(){
	let card=randimage()
	if(blackjackgame['you']['score']+blackjackgame['value'][card]<=21){
	var image=document.createElement('img')
	image.setAttribute('class','imgsize')
	image.src=`images/${card}.png`
	document.querySelector('#b1').appendChild(image)
	hitsound.play();
	updateyourscore(card)
}
	else
	document.getElementById('youscore').innerHTML="BUST!";
}

function blackjackStand(){
	let card=randimage()
	if(blackjackgame['dealer']['score']+blackjackgame['value'][card]<=21){
	var image=document.createElement('img')
	image.setAttribute('class','imgsize')
	image.src=`images/${card}.png`
	document.querySelector('#b2').appendChild(image)
	hitsound.play();
	updatedealerscore(card)
}
	else
	document.getElementById('dealerscore').innerHTML="BUST!";
}

function randimage(){
	randnum=Math.floor(Math.random()*13);
	return blackjackgame['cards'][randnum];
}

function blackjackDeal(){
	var images=document.getElementsByClassName('imgsize');
	i=images.length;
	while(i--)
	images[i].remove();
document.getElementById('youscore').innerHTML="0";
document.getElementById('dealerscore').innerHTML="0";
blackjackgame['you']['score']=0
blackjackgame['dealer']['score']=0
}

function updateyourscore(card){
blackjackgame['you']['score']+=blackjackgame['value'][card];
document.getElementById('youscore').innerHTML=""+blackjackgame['you']['score']+"";
}

function updatedealerscore(card){
blackjackgame['dealer']['score']+=blackjackgame['value'][card];
document.getElementById('dealerscore').innerHTML=""+blackjackgame['dealer']['score']+"";
}