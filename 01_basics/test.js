// factory function

// function createRectanle(len,bre){
//     rectangle  = {
//         length : len,
//         breadth : bre,
//         draw(){
//             console.log("drawinh the rectangle");
//         }
//     }
//     return rectangle;
// }


// let rectangle1 = createRectanle(4,5);
// console.log(rectangle1);

// console.log(rectangle1.constructor);


let factoryrec = new Function('len','bre',`
     rectangle  = {
        length : len,
         breadth : bre,
        draw(){
             console.log("drawinh the rectangle");
    }
 }
    return rectangle;
    `
 )

 let rec = factoryrec(3,4);
 console.log(rec);




// constructor function


// function Rectangle(len,bre){
//     console.log(typeof this);
//     this.length = len,
//     this.breadth = this.breadth,
//     this.draw = function(){
//         console.log("drawing the rectangle");
//     }
// }

// let rectangl1 = new Rectangle(4,5);

// // to add the property

// rectangl1.color = "yellow";
// console.log(rectangl1);
// delete rectangl1.color;
// console.log(rectangl1);







// let createRectangle =  new Function('length','breadth',`
//      this.length = length;
//      this.breadth = breadth;
//      this.draw = function(){
//         consoe.log("drawing the rectangle");
//      }`
// )



// let rectangle = new createRectangle(3,4);
// console.log(rectangle);






