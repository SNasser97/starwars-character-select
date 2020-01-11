/* 
	Big thanks to Johan Andres for the images!
	@ https://github.com/andresochoa91/
*/

import React from "react";

const ImageList = ({ characterImage }) => {

		// no switch, assign name to each img
	const getCharImg = (name) => {
		const myCharsImg = {
			"Luke Skywalker": () => "https://img.pngio.com/star-wars-a-new-hope-luke-skywalker-png-by-metropolis-hero1125-on-luke-skywalker-png-802_996.png",
			"C-3PO": () => "https://www.model-space.com/media/catalog/product/cache/1/thumbnail/1280x/9df78eab33525d08d6e5fb8d27136e95/s/s/ss2171_1500.png",
			"R2-D2": () => "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdb6.png",
			"Darth Vader": () => "https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/11/darth-vader-transparent-image.png?fit=608%2C514",
			"Leia Organa": () => "https://img.pngio.com/leia-organa-png-vector-clipart-psd-peoplepngcom-leia-organa-png-400_729.png",
			"Owen Lars": () => "https://i.pinimg.com/originals/b5/3a/5a/b53a5ae9a90265578ecec1a99b0134cc.png",
			"Beru Whitesun lars": () => "http://wookiee.ru/wp-content/uploads/2014/01/berulars_detail.png",
			"R5-D4": () => "https://vignette.wikia.nocookie.net/starwars/images/7/70/R5-D4-Droidography.png/revision/latest/scale-to-width-down/180?cb=20190823071450",
			"Biggs Darklighter": () => "https://vignette.wikia.nocookie.net/swmerchandise/images/0/06/Biggs_Darklighter_with_Blaster_Pistol_%2869758%29_P.gif/revision/latest?cb=20140701000435",
			"Obi-Wan Kenobi": () => "https://img.pngio.com/star-wars-the-clone-wars-obi-wan-kenobi-png-by-metropolis-hero1125-obi-wan-png-809_988.png",
			"Anakin Skywalker": () => "https://vignette.wikia.nocookie.net/vsbattles/images/c/cc/Anakin.png/revision/latest?cb=20161016165244",
			"Wilhuff Tarkin": () => "https://issue1studios.com/wp-content/uploads/2017/08/GM-Tarkin-566x800.png",
			"Chewbacca": () => "http://www.pngmart.com/files/5/Chewbacca-PNG-HD.png",
			"Han Solo": () => "https://i.ibb.co/3FybwjT/hsolo.png",
			"Greedo": () => "https://i.ibb.co/pKPnv3M/greedo.png",
			"Jabba Desilijic Tiure": () => "https://vignette.wikia.nocookie.net/starwars/images/1/19/JabbaPromo.png/revision/latest?cb=20161110010925",
			"Wedge Antilles": () => "https://i.ibb.co/wKgSt4m/wedge-antilles-1-png-clipart-removebg-preview.png",
			"Jek Tono Porkins": () => "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png/revision/latest?cb=20150920215118",
			"Yoda": () => "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png",

			// "Character Name" : () => "https://example.com/image.png"
			// More can be added, set default as Star Wars logo
			"default": () => "https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png"
		}
		return (myCharsImg[name] || myCharsImg["default"])();
	}
	return <img src={getCharImg(characterImage)} alt={characterImage}/>
}

export default ImageList;


	// console.log("img test default", myCharsImg.default);
	// 	console.log("img test luke", myCharsImg["Luke Skywalker"]);
	// 	console.log("props test", myCharsImg[characterImage]);
	// return (
	// <img src={myCharsImg[characterImage]} 
	// alt={characterImage}/> 
	// || <img src={myCharsImg[characterImage]} alt="img"/>
	// );