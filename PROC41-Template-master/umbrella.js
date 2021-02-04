class Umbrella {
    constructor(x,y){
        var option ={ 
            isStatic : true 
        }

       this.walking = loadAnimation( "images/Walking Frame/walking_1.png",
       "images/Walking Frame/walking_2.png",
       "images/Walking Frame/walking_3.png",
       "images/Walking Frame/walking_4.png",
       "images/Walking Frame/walking_5.png",
       "images/Walking Frame/walking_6.png",
       "images/Walking Frame/walking_7.png",
       "images/Walking Frame/walking_8.png")
       this.body=Bodies.circle(x,y,50,option)
       World.add (world,this.body); 
    }
    display(){
        var umbrella = createSprite(this.body.position.x , this.body.position.y,50,50)
        umbrella.addAnimation("walking",this.walking)
    }
}