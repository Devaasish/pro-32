class Superman extends BaseClass {
  constructor(x,y){
    super(x,y,150,80);
    this.image = loadImage("superman.png");
  }

  display() {
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
  }
}
