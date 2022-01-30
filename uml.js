class circle
{
    constructor()
    {
       this.color="red"
        console.log("Parent class")
    }
   
}
class circle1 extends circle
{
 constructor(radius)
  {
      super(circle)
      this.r=radius
     
}
getcircumference()
{
    console.log(2*3.14*this.r)
}
getarea()
{
    //console.log("The color of the circle is:"+color)
   console.log(3.14*this.r*this.r)
}
getcolor()
{
    console.log("color of the circle is:"+this.color)
}
}

var cir=new circle1(10)
cir.getarea()
cir.getcircumference()
cir.getcolor()