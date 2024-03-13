
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Button from "../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(640, 360, "Background");
		background.scaleX = 0.9187739718044534;
		background.scaleY = 0.9187739718044534;

		// menuBackground
		const menuBackground = this.add.rectangle(640, 360, 128, 128);
		menuBackground.scaleX = 4.007059581964025;
		menuBackground.scaleY = 4.007059581964025;
		menuBackground.isFilled = true;
		menuBackground.fillColor = 35723;
		menuBackground.fillAlpha = 0.6;
		menuBackground.isStroked = true;
		menuBackground.strokeColor = 657930;
		menuBackground.lineWidth = 3;

		// Title
		const title = this.add.text(448.7760405196609, 121, "", {});
		title.scaleX = 1.677403153336308;
		title.scaleY = 1.677403153336308;
		title.text = "Neon Paws: \nCyber Squad";
		title.setStyle({ "color": "#C71585", "fontFamily": "display", "fontSize": "40px", "fontStyle": "bold", "stroke": "#9400D3", "strokeThickness":2,"shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#FF69B4", "shadow.blur":10,"shadow.stroke":true,"shadow.fill":true});

		// playButton
		const playButton = new Button(this, 620, 374);
		this.add.existing(playButton);

		this.playButton = playButton;

		this.events.emit("scene-awake");
	}

	private playButton!: Button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
