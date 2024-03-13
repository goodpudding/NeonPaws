
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ButtonScript from "../script-nodes/ButtonScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Button Normal", frame);

		this.play("playButton");

		// buttonScript
		const buttonScript = new ButtonScript(this);

		// buttonScript (prefab fields)
		buttonScript.SceneKey = "NextPage";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
