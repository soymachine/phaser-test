import GameScene from './scenes/GameScene.js';
import BackgroundScene from './scenes/BackgroundScene.js';
import Presentation1 from './scenes/Presentation1.js';
import Presentation2 from './scenes/Presentation2.js';


const config = {
    type: Phaser.CANVAS,
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: 640,
        height: 960,
        min: {
            width: 320,
            height: 480
        },
        max: {
            width: 1400,
            height: 1200
        }
    },
    scene: [ GameScene, BackgroundScene, Presentation1, Presentation2 ], // , BackgroundScene, Presentation2
    
};

const game = new Phaser.Game(config);









