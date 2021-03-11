class Box{
    constructor(x,y,w,h){
        var options = {
            'restitution':.6,
            'friction':1.0,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){	
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle*60)
        rectMode(CENTER)
        fill(128,128,128)
        rect(0,0,this.w, this.h);
        pop();
    }
}