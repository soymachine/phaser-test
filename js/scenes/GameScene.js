import BackgroundScene from './BackgroundScene.js';
import Screen from '../helpers/Screen.js';
import Constants from '../helpers/Constants.js';


class GameScene extends Phaser.Scene
{
    constructor ()
    {
        super('GameScene');
        
        console.log(this)
    }

    preload ()
    {
        Screen.H = this.scale.gameSize.height
        Screen.W = this.scale.gameSize.width
        
        
        this.load.image('splash', 'assets/splash.png');
        this.load.image('perfume', 'assets/perfume.png');
        this.load.image('bgButton', '/assets/buttons/bgButton.png');
        this.load.image('bg', '/assets/background.jpg');
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
    }

    create ()
    {
        this.sections = []
        this.currentNode = undefined

        // SECTIONS
        this.presentation1 = this.scene.get('Presentation1')
        this.addSection({
            section:this.presentation1,
            position: Constants.BOTTOM

        })
        this.gotoNode('Presentation1')
        
        this.backgroundScene = this.scene.get('BackgroundScene')
        this.backgroundScene.start(this)        
        
        console.log(`w:${this.scale.gameSize.width} h:${this.scale.gameSize.height}`)

        // FPS Text
        this.FPStext = this.add.text(0, 0, "FPS:");
        // this.add.image(400, 300, 'sky');
        //this.star = this.add.image(400, 300, 'star').setInteractive()
        //this.star.name = "star"
        
        /*
        this.input.on('gameobjectdown', (pointer, button) =>
        {
            console.log(`button.name:${button.name}`)
        });
        */
        
    }

    addSection = ({section, position})=> {
        
        section.setPosition(position)
        section.start({
            game: this, 
            position: position
        })

        this.sections.push(section)
    }

    getSection = (nodeID) =>{
        return this.sections.find(node => node.id == nodeID)
    }

    gotoNode = (nextNodeID)=>{
        const nextNode = this.getSection(nextNodeID)
        
        if(this.currentNodeID != undefined){
            // Recogemos el nodo actual
            const currentNode = this.getSection(this.currentNodeID)
            // Calculamos a dónde se ha de mover el actual (depende de donde esté el siguiente)
            const outPosition = this.getOutPosition(nextNode.getPosition(), this.currentNodeID)
            // Movemos al actual fuera de la pantalla
            console.log(`move started, currentNode:${this.currentNodeID}`)
            const nodeOutID = this.currentNodeID
            this.move(this.currentNodeID, outPosition.top, outPosition.left, ()=>{
                //this.events.notify(GlobalEvents.ON_NODE_END_OUT, nodeOutID);
            })
            // Actualizamos la posición del actual
            currentNode.setPosition(outPosition.positionResult)
        }

        // console.log(`nextNodeID: ${nextNodeID}`)

        // Notificamos los inicios: qué nodo se va a ir y qué nodo va a entrar
        //this.events.notify(GlobalEvents.ON_NODE_START_IN, nextNodeID);

        //this.events.notify(GlobalEvents.ON_NODE_START_OUT, this.currentNodeID);
        
        // Movemos al siguiente dentro de la pantalla
        this.move(nextNodeID, 0, 0, ()=>{
            // this.events.notify(GlobalEvents.ON_NODE_END_IN, this.currentNodeID);
        })
        
        // Actualizamos los valores del current node
        this.currentNodeID = nextNodeID
        //Nodes.currentNodeID = nextNodeID

        // Enviamos evento de que hemos movido nodos
        
        //this.events.notify(GlobalEvents.ON_NODE_CHANGE, this.reversePosition(nextNode.getPosition()));

        // Actualizamos la posición del siguiente
        nextNode.setPosition(Constants.CENTER)

    }

    move = (targetID, x, y, callback) =>{
        
        const target = this.getSection(targetID)
        // console.log(`target x:${x} y:${y}`)

        target.moveTo(x, y, callback)
        
    }

    handler (gameObject)
    {
        gameObject.setTint(0xff0000);
    }
    
    update ()
    {
        var loop = this.sys.game.loop;
    
        this.FPStext.text = `FPS:${loop.actualFps}`;
    }

}

export default GameScene;