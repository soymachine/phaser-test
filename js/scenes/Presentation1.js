import Section  from './Section.js'
import TextButton  from '../helpers/TextButton.js'
import Constants  from '../helpers/Constants.js'
import Screen  from '../helpers/Screen.js'

class Presentation1 extends Section
{
    constructor ()
    {
        super("Presentation1");
    }

    start ({game, position}){
        super.create({
            position: position
        })

        this.game = game
        this.perfume = this.game.add.image(0, 0, 'perfume').setOrigin(0, 0).setInteractive();
        this.perfume.name = "perfume"
        
        this.view.add(this.perfume);
        console.log(`this.perfume:${this.perfume.displayWidth} this.sectionH:${this.sectionH}`)

        this.scaleImage({
            img: this.perfume, 
            type:"pixels",
            value: this.sectionH * .7,
            side: "height"
        })
        this.centerIMG(this.perfume)



        
        // Texto
        //this.presentationText = this.add.rexBBCodeText(0, 0, 'PRESENTACIÓN [b]TÍTULO[/b]', { fontFamily: '"Roboto", "Roboto-Bold", serif', fontSize: 64, color: '#5656ee' });
        this.textButton = new TextButton({
            game:this.game,
            text: 'PRESENTACIÓN [b]TÍTULO[/b]'

        })
        this.centerIMG(this.textButton)

        this.game.input.on('gameobjectdown', (pointer, button) =>
        {
            if( button.name == "perfume"){

                console.log("Click perfume")
                this.moveRandom()
            }
        });
    }

    moveRandom() {
        const randX = Phaser.Math.Between(this.perfume.displayWidth, Screen.W - this.perfume.displayWidth);
        const randY = Phaser.Math.Between(this.perfume.displayHeight, Screen.H - this.perfume.displayHeight);
        this.tweens.add({
            targets: this.perfume,
            x: randX,
            y: randY,
            duration: 1000,
            ease: Constants.easing,
            callbackScope: this,
            onComplete: function(){
            }
        });
    } 
}

export default Presentation1;