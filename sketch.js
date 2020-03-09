const World = Matter.World 

const Engine = Matter.Engine

const Bodies = Matter.Bodies

var world,engine

var ground 

var box

var boxes3 = []

function setup() {
    createCanvas(400,400)
    
    engine = Engine.create()

    world = engine.world 

    ground = new Ground(200,380,400,20) 
    

}


function draw() {

    background(0)

Engine.update(engine)

for(var i = 0;i < boxes3.length;i ++) {

    boxes3[i].display()
}

ground.display()

//box.display()


}

function mousePressed() {

    if(mouseY < 350) {

        boxes3.push(new Box9(mouseX,mouseY,20,20))
    }
}