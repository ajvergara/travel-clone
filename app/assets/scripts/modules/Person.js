
class Person{
  constructor(fullName, favColor){
    this.name = fullName;
    this.color = favColor;
    this.greet = function(){
      console.log("My Name is " + this.name + " and my favorite color is " + this.color);
    }
  }
}

export default Person;
