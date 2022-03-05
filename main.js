// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/




// sem začni psát svůj program

function vratPx(pozice) {
	return pozice + "px";
}

function prehraj(zvuk) {
	zvuk.play();
}





class PanacekTrida {
	constructor(panacekHTML) {
		this.panacekHTML = panacekHTML;
		this.x = (window.innerWidth - panacekHTML.naturalWidth) / 2;
		this.y = (window.innerHeight - panacekHTML.naturalHeight) / 2;
		this.panacekHTML.style.left = vratPx(this.x);
		this.panacekHTML.style.top = vratPx(this.y);
	}

	posunVlevo() {

		if (this.x > 0) {
			this.x = this.x - this.panacekHTML.naturalWidth;
			if (this.x < 0) {
				this.x = 0;
			}
			this.panacekHTML.style.left = vratPx(this.x);
			this.panacekHTML.src = "obrazky/panacek-vlevo.png";
		}
	}


	posunVpravo() {
		// TODO zkusit opravit posuvník :/
		if (this.x < window.innerWidth) {
			this.x = this.x + this.panacekHTML.naturalWidth;
			if (this.x > window.innerWidth) {
				this.x = window.innerWidth - this.panacekHTML.naturalWidth;
			}
			this.panacekHTML.style.left = vratPx(this.x);
			this.panacekHTML.src = "obrazky/panacek-vpravo.png";
		}
	}

	posunNahoru() {

		if (this.y > 0) {
			this.y = this.y - this.panacekHTML.naturalHeight;
			if (this.y < 0) {
				this.y = 0;
			}
			this.panacekHTML.style.top = vratPx(this.y);
			this.panacekHTML.src = "obrazky/panacek-nahoru.png";
		}
	}

	posunDolu() {

		if (this.y < window.innerHeight) {
			this.y = this.y + this.panacekHTML.naturalHeight;
			if (this.y > window.innerHeight) {
				this.y = window.innerHeight - this.panacekHTML.naturalHeight;
			}
			this.panacekHTML.style.top = vratPx(this.y);
			this.panacekHTML.src = "obrazky/panacek.png";
		}
	}
}



class MinceTrida {
	constructor(minceHTML) {
		this.minceHTML = minceHTML;
		this.x = Math.floor(Math.random() * (window.innerWidth - minceHTML.naturalWidth));
		this.y = Math.floor(Math.random() * (window.innerHeight - minceHTML.naturalHeight));
		this.minceHTML.style.left = vratPx(this.x);
		this.minceHTML.style.top = vratPx(this.y);
	}

}

let hudba = document.querySelector("#hudba");
let zvukMince = document.querySelector("#zvukmince");
let fanfara = document.querySelector("#zvukfanfara");
let scoreHTML = document.querySelector("#score");
let score = 0;

function prunik(panacek, mince) {
	if (!(panacek.x + panacek.panacekHTML.naturalWidth < mince.x || mince.x + mince.minceHTML.naturalWidth < panacek.x || panacek.y + panacek.panacekHTML.naturalHeight < mince.y || mince.y + mince.minceHTML.naturalHeight < panacek.y)) {


		prehraj(zvukMince);
		if (score < 4) {
			score++;
			scoreHTML.textContent = score;
			console.log(score);
		} else if (score == 4) {
			score++;
			scoreHTML.textContent = score;
			console.log("Fanfara" + score);
			prehraj(fanfara);
		} else {
			score++;
			scoreHTML.textContent = score;
			console.log(score);
		}



		mince.x = Math.floor(Math.random() * (window.innerWidth - mince.minceHTML.naturalWidth));
		mince.y = Math.floor(Math.random() * (window.innerHeight - mince.minceHTML.naturalHeight));

		mince.minceHTML.style.left = vratPx(mince.x);
		mince.minceHTML.style.top = vratPx(mince.y);


	}
}

let mujPanacek = new PanacekTrida(document.getElementById('panacek'));
let mojeMince = new MinceTrida(document.getElementById('mince'));





window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'ArrowDown':
			mujPanacek.posunDolu();
			break;
		case 'ArrowUp':
			mujPanacek.posunNahoru();
			break;
		case 'ArrowLeft':
			mujPanacek.posunVlevo();
			break;
		case 'ArrowRight':
			mujPanacek.posunVpravo();
			break;
	}
	prehraj(hudba);
	prunik(mujPanacek, mojeMince)
});









