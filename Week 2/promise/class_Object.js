
// rectangle is a class 

class Rectangle {
    constructor(width, height, color) {
     this.width = width;
     this.height = height;
     this.color = color; 
    }
    
    // area is a method or function of rectangle
    area() {
    const area = this.width * this.height;
  return area;
    }
    
    // print is also method 
    paint() {
  console.log(`Painting with color ${this.color}`);
    }
    
 }

 const rect = new Rectangle(2, 4,"red")  // rect is a object of rectangle 


  const area = rect.area();
  console.log(area)