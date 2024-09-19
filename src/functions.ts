
const fullName: string = "Jonatan Vahlberg";

const courses: string[] = ["HTML/CSS", "Backend 1"]
const courseIds: number[] = [1,2]

const date: Date = new Date()// Could be implicit
const hourOfTheDay: number = date.getHours() 
console.clear()
console.log(`Hello there, ${fullName}!`);
console.log(courses);

//Functional typing "always type parameters"
function add(x: number,y: string) {
    return x + y
}

// functional parameters with correct typing
function multiply(x: number, y: number) {
    return x * y
}

// Explicit any is not an error though not desirable
function newConsole(param: any): void {

    if(Math.random() < 0.5){
        return
    }
     
}

//Should return a number through explicit return
function subtract(x: number,y: number): number {
    return x - y
}


function mult(a: number, b: number): number {
    return a * b;
}
    
const multiplicand: number = 8;
const multiplier: number = 12;

console.log(mult(multiplicand, multiplier))

function divide(x: number, y: number): number | string {
    if(y === 0){
        return "can't divide by zero"
    }
    return x / y;
}
    

// Function "rules"
// Always type params
// Try to type return types unless sufficently simple
// Try not to return multiple types unless there is good reason for it
// Void is exlusivly a single type meaning no other types should be returned along with it


function calculateTotal(price:number, quantity:number, discount:number, taxRate:number) {
    let total = price * quantity;
  
    if (discount) {
      total *= (1 - discount);
    }
  
    const tax = total * taxRate;
    total += tax;
  
    return total;
  }

  function calculateTotalRevised(price:number, quantity:number, discount:string, taxRate:number) {
    let total = price * quantity;
    switch(discount) {
        case "30%":
            total * 0.7;
            break;
        case "Back to school":
            total * 0.85;
    }
    total = total + total * taxRate
    return total;
  }



  //implicitly typed object
  const item1 = {
    name: "Toothbrush",
    price: 200,
    quantity: 1
  }

  item1.name = "Fancy toothbrush"

  //explicitly typed object
  const item2: {
    name: string;
    price: number;
    quantity: number
  } = {
    name: "Toothpaste",
    price: 30,
    quantity: 20
  }

  function calculateTotalOfCart(items: any[] = []) {
    let total = 0;
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
  
      let itemTotal = item.price * item.quantity;
      if(item.isOnSale){
        let salePercentage = ((100 - item.salePercentage) / 100)
        let salePrice = item.price * salePercentage
        itemTotal = salePrice * item.quantity
      }
      let taxRate = 0;
  
      switch(item.category) {
        case 'food':
          taxRate = 0.05;
          break;
        case 'clothing':
          taxRate = 0.1;
          break;
        case 'electronics':
          taxRate = 0.15;
          break;
        default:
          taxRate = 0.2;
      }
  
      let tax = itemTotal * taxRate;
      itemTotal += tax;
  
      total += itemTotal;
    }
  
    return total;
  }
  
  const items: {
    
  }[] = [{
    //fyll i med variabler och typer
  }]
  
  calculateTotalOfCart(items)

