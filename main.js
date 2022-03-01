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

class PanacekTrida {
	constructor(panacekHTML) {
		this.panacekHTML = panacekHTML;
		this.x = (window.innerWidth - panacekHTML.naturalWidth) / 2;
		this.y = (window.innerHeight - panacekHTML.naturalHeight) / 2;
		this.panacekHTML.style.left = vratPx(this.x);
		this.panacekHTML.style.top = vratPx(this.y);
	}

	posunVlevo() {
		this.x = this.x - this.panacekHTML.naturalWidth;
		this.panacekHTML.style.left = vratPx(this.x);
		document.getElementById('panacek').src = "obrazky/panacek-vlevo.png";
	}

	posunVpravo() {
		this.x = this.x + this.panacekHTML.naturalWidth;
		this.panacekHTML.style.left = vratPx(this.x);
		document.getElementById('panacek').src = "obrazky/panacek-vpravo.png";
	}

	posunNahoru() {
		this.y = this.y - this.panacekHTML.naturalHeight;
		this.panacekHTML.style.top = vratPx(this.y);
		document.getElementById('panacek').src = "obrazky/panacek-nahoru.png";
	}

	posunDolu() {
		this.y = this.y + this.panacekHTML.naturalHeight;
		this.panacekHTML.style.top = vratPx(this.y);
		document.getElementById('panacek').src = "obrazky/panacek.png";
	}
}


let mujPanacek = new PanacekTrida(document.getElementById('panacek'));
window.addEventListener('keydown', (e) => {
	console.log('Stisknutí klávesy.');

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
});







