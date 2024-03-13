
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { ScriptNode } from "@phasereditor2d/scripts-core";

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ButtonScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public SceneKey: string = "";

	/* START-USER-CODE */

	// Write your code here.
	public startScene() {
		if (this.SceneKey) {
				// Correctly accessing the 'start' method on the scene manager
				this.scene.scene.start(this.SceneKey);
		}
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
