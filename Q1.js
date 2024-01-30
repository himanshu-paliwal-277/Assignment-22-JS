// Q1. In the following shopping cart add, remove, and edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

// 1. add 'Meat' in the beginning of your shopping cart if it has not been already added.
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// 2. add Sugar at the end of you shopping cart if it has not been already added.
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// 3. remove 'Honey' if you are allergic to honey.
shoppingCart.pop();
console.log(shoppingCart);

// 4. modify Tea to 'Green Tea'.
const teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
console.log(shoppingCart);
