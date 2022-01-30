class movie
{
    constructor(t,s,r)
    {
   this.title=t
   this.studio=s
  this.rating=r
 // console.log(this.rating)
  //getPG(this.rating)
      }
  getPG(x)
  {
  this.rat=x
  if(this.rat=="pg")
  {
    console.log(this.title,this.studio,this.rating)
  }
}
}
 film=new movie("Casino Royal","sony","PG")
film1=new movie("Casino Royal1","sony1","PG1")
film.getPG("pg")
