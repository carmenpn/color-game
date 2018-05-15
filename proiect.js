//Definire variabile

var totalCercuri = 6,
    culoriCercuri = [],
    culoareSelectata;

var buton = document.getElementById("schimbaCuloarea"),
	mesaj = document.getElementById("mesaj"),
	cerc = document.getElementsByClassName("cerc"),
	culoareDinHeader = document.getElementById("culoare");

var header = document.getElementById("header");

//Initializare aplicatie
initializareApp();

function initializareApp(){
	reset();
	apasaCuloarea();
}

function reset() {
	header.style.background = "white";
	header.style.color = "black";
	for (var i = 0; i < totalCercuri; i++) {
		cerc[i].addEventListener("mouseover", function() {
			this.style.boxShadow = "4px 4px rgba(0,0,0,0.2)";
		});
		cerc[i].addEventListener("mouseout", function() {
			this.style.boxShadow = "0px 0px";
		});
	};
	culoriCercuri = arrayCulori(totalCercuri);
	culoareSelectata = alegeCuloarea();
	culoareDinHeader.textContent = afisareCuloare();
	mesaj.textContent = "";
	buton.textContent = "Alte culori";
	for (var i = 0; i < totalCercuri; i++) {
		cerc[i].style.background = culoriCercuri[i];
	}
};

buton.addEventListener("click", reset);

function apasaCuloarea(){
	for (var i = 0; i < cerc.length; i++) {
		cerc[i].addEventListener("click", function(ev){
			var clickCuloare = this.style.background;
			if (culoareSelectata == clickCuloare){
				mesaj.textContent = "Bravo! Ai ghicit culoarea!";
				buton.textContent = "Noi culori?";
				header.style.background = culoareSelectata;
				header.style.color = "white";

				//Schimbare fundal
				for (var i = 0; i < totalCercuri; i++){
					cerc[i].style.background = culoareSelectata;
				};
			} else {
				mesaj.textContent = "Mai incearca!";
				this.style.background = "white";
				this.style.boxShadow = "0px 0px rgba(255,255,255,0)";	
				this.addEventListener("mouseover", function(){
					this.style.boxShadow = "0px 0px rgba(255,255,255,0)";
				})
			}
		});	
	}
};

function arrayCulori(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(culoriRandom());
	}
	return arr;
}

function alegeCuloarea() {
	var random = Math.floor(Math.random() * culoriCercuri.length);
	return culoriCercuri[random];
}

function culoriRandom() {
	var a = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var c = Math.floor(Math.random() * 256);
	return "rgb(" + a + ", " + b + ", " + c + ")";
}

//Alta modalitate de a afisa culoarea
function afisareCuloare(){
	var a = culoareSelectata.split("(");
	a.shift();
	var b = a.join("");
	var c = b.split(")");
	c.pop();
	var d = c.join("");
	var e = d.split(" ");
	var f = e.join("");
	var g = f.split(",");
	var firstNum = g[0];
	var secondNum = g[1];
	var thirdNum = g[2];
	return "RED: " + firstNum + " ||" + 
		   " GREEN: " + secondNum + " ||" +
		   " BLUE: " + thirdNum;
}
