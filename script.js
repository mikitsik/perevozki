window.onload = function() {	
	var html = document.querySelector('html'),
	intro = document.querySelector('.intro'),
	hours25 = document.querySelector('#hours25'),
	intro_perevozka = document.querySelector('#intro_perevozka'),
	intro_perevozka_on = document.querySelector('#intro_perevozka_on'),
	rekvizit = document.querySelector('.rekvizit'),
	rekvizit_two = document.querySelector('#rekvizit_two'),
	telefon1 = document.querySelector('.telefon1'),
	telefon2 = document.querySelector('.telefon2'),
	section = document.querySelector('.section'),
	section2 = document.querySelector('.section2'),
	section3 = document.querySelector('.section3'),
	loaders = document.querySelector('.loaders'),
	loaders_wrapper = document.querySelector('.loaders_wrapper'),
	phrase_one = document.querySelector('.phrase_one'),
	phrase_on,
	divSmall = [],
	g,
	phrase_two = document.querySelector('.phrase_two'),
	phrase_three = document.querySelector('.phrase_three'),
	truck = document.querySelector('.truck'),
	trash = document.querySelector('#trash'),
	footer = document.querySelector('footer'),
	setIntFor25h,
	symbol = "-+",
	auto1 = document.querySelector('#auto1'),
	auto2 = document.querySelector('#auto2'),
	auto3 = document.querySelector('#auto3'),
	auto_light = document.querySelectorAll('.auto_light');	
	
	function rotate() {
		return Math.floor(Math.random() * 1201);
	}
	
	function yY() {
		return Math.floor(Math.random() * 98);
	}
	
	function xX() {
		return Math.floor(Math.random() * 96);
	}
	
	function scale() {
		return Math.floor(Math.random() * 12) + 3;
	}
	
	function symbolUp() {
		return symbol.charAt(Math.floor(Math.random() * 2));
	}
		
	function division(phrase, mesto, nameClass, formTrans, cityOp) {
		function ab() {
		if (formTrans === 1) {
			return 'translate(' + symbolUp() + xX() + 'vw, ' + symbolUp() + yY() + 'vw) scale(' + scale() + ') rotate(' + symbolUp() + rotate() + 'deg)';
			}}		
		g = 0;
		var divLarge = [];
		phrase = phrase.innerHTML.split(' ');		
		for (var i = 0; i < phrase.length; i++) {
			divLarge[i] = document.createElement('div');
			divLarge[i].style.display = 'inline-block';
			mesto.appendChild(divLarge[i]);
			phrase_on = phrase[i].split('');
			
			for (var k = 0; k < phrase[i].length; k++) {
				divSmall[g] = document.createElement('div');
				divSmall[g].innerHTML = phrase_on[k];
				divSmall[g].className = nameClass;
				divSmall[g].style.transform = ab(formTrans);		
				divSmall[g].style.opacity = cityOp;
				divLarge[i].appendChild(divSmall[g]);
				
				if (k == phrase[i].length - 1) {
					g++;
					divSmall[g] = document.createElement('div');
					divSmall[g].innerHTML = '&nbsp;';
					divSmall[g].className = nameClass;
					divLarge[i].appendChild(divSmall[g]);
				}
				g++;
			}
		}
	}
	
	html.onmousemove = function() {
		html.style.cursor = 'default';
	};
	
	html.onmouseover = function() {
		html.style.cursor = 'none';
	};

	setTimeout(function() {
		auto1.style.display = 'block';
	}, 4800);
	
	setTimeout(function() {
		intro.style.display = 'none';
	}, 5300);
	
	 setTimeout(function() {
		auto2.style.display = 'block';
	}, 5300);
		 
	setTimeout(function() {
		auto3.style.display = 'block';
		for ( var i = 0; i < auto_light.length; i++) {
		auto_light[i].style.animation = 'spark .7s 4';
		}
		rekvizit.style.display = 'block';
	}, 5600);
		
	setTimeout(function() {
		telefon1.style.display = 'block';
	}, 6500);
	
	setTimeout(function() {
		telefon2.style.display = 'block';
	}, 7100);
	
	setTimeout(function() {
		auto1.style.stroke = '#403047';
		auto2.style.stroke = '#403047';
		auto3.style.stroke = '#403047';
		
		section.style.display = 'block';	
		
		division(phrase_one, section, 'one');

		truck.style.display = 'block';
		
		var i = 0,
			ii = 0,
			f = 0,
			divSmallCount = 0,
			timerId = setInterval(function() {				
			if (i < g) {
				divSmall[i].style.display = 'inline-block';
				if (divSmallCount >= section.clientWidth) {
					ii = 0;
					f++;
					truck.style.transform = 'none';
					truck.style.transition = 'none';				
					truck.style.top = 7 * f + 'vh';
				}  			
				divSmallCount = divSmall[0].clientWidth * (ii + 1);
				truck.style.transform = 'translateX(' + divSmallCount + 'px)';
				truck.style.transition = 'transform .12s linear';			
				ii++;
			
				} else if (i === g + 2) {
					truck.style.opacity = '0';
					truck.style.transition = 'opacity 1s linear';
					
				} else if (i === g + 13) {
					truck.style.transform = 'none';
					truck.style.top = '0';
					truck.classList.add('truck_pos');
				
 				} else if (i === g + 14) {
					truck.style.opacity = '1';
					truck.style.transition = 'opacity 1s linear';
				
				} else if (i > g + 14) {
					clearInterval(timerId);
					return;
				}			
			i++;}, 70);						
			
			rekvizit_two.style.display = 'block';
			rekvizit_two.style.transform = 'scaleX(0)';
			rekvizit.style.transform = "scaleX(1)";
			setIntFor25h = setInterval(function() {
			if ( rekvizit.style.transform == "scaleX(1)") {
				rekvizit.style.transform = "scaleX(0)";
				rekvizit.style.transition = "transform 1.5s linear";
				rekvizit_two.style.transform = "scaleX(1)";
				rekvizit_two.style.transition = "transform 1.5s 1.5s";
			} else {
				rekvizit_two.style.transform = "scaleX(0)";
				rekvizit_two.style.transition = "transform 1.5s linear";
				rekvizit.style.transform = "scaleX(1)";
				rekvizit.style.transition = "transform 1.5s 1.5s";
			}
		}, 11000);			
	}, 8000);
	
	setTimeout(function() {		
		auto1.style.filter = 'url(#blur-filter)';
		auto2.style.filter = 'url(#blur-filter)';
		auto3.style.filter = 'url(#blur-filter)';		
	},  8800);
	
	setTimeout (function() {
		section2.style.display = 'block';		
		loaders.style.animation = 'move 1.3s 5 steps(25)';		
		phrase_two = phrase_two.innerHTML.split(' ');
				
		var phrase_count = phrase_two.length,
			div = [],
			i = 0,
			ii = 0,
			f = 0,
			divSmallCount = 0,
			timerId = setInterval(function() {	
			loaders_wrapper.style.display = 'inline-block';
				if (i < phrase_count) {
					div[i] = document.createElement('div');
					div[i].innerHTML = phrase_two[i] + '&nbsp;';
					div[i].classList.add('two');
					section2.appendChild(div[i]);
					
					if (divSmallCount >= section2.clientWidth) {
						ii = 0;
						f++;
						loaders_wrapper.style.transform = 'none';
						loaders_wrapper.style.transition = 'none';				
						loaders_wrapper.style.top = 7 * f + 'vh';
					}  			
					divSmallCount = div[0].clientWidth * (ii + 1);
					loaders_wrapper.style.transform = 'translateX(' + divSmallCount + 'px)';
					loaders_wrapper.style.transition = 'transform 1s linear';
					ii++;
					
				} else if (i === phrase_count) {
					loaders_wrapper.style.opacity = '0';
					loaders_wrapper.style.transition = 'opacity .7s linear';
					
				} else if (i === phrase_count + 1) {
					setTimeout (function() {
					loaders_wrapper.style.transform = 'none';
					loaders_wrapper.style.top = '0';
					loaders_wrapper.classList.add('l_wrap_pos');
					}, 300);
				
 				} else if (i === phrase_count + 2) {
					loaders_wrapper.style.opacity = '1';
					loaders_wrapper.style.transition = 'opacity .7s linear';
				
				} else {
					clearInterval(timerId);
					return;
				}				
				i++;
				}, 600); 		
	},  16500);
	
	setTimeout (function() {
		section3.style.display = 'block';
		trash.style.display = 'block';
		
		division(phrase_three, section3, 'three', 1, '0');		
	},  24300);
	
	setTimeout (function() {		
		for ( var i = 0; i < g; i++) {		
		divSmall[i].style.transform = 'none';	
		divSmall[i].style.opacity = '1';	
		}
	},  24500);
	
	setTimeout (function() {
		footer.style.display = 'block';
	},  27600);
};
