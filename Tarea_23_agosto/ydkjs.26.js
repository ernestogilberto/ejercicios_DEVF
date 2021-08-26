/*
•	Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!)
    until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase
    amount is below your mental spending threshold.
•	After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly
    for‐matted.
•	Finally, check the amount against your bank account balance to see if you can afford it or not.
•	You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as
    well as a variable for your “bank account balance.”
•	You should define functions for calculating the tax and for for‐matting the price with a “$” and rounding to two
    decimal places.
•	Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” on
    page 6. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

const taxRate = 0.15, phonePrice = 100, accessoryPrice = 20, spendingThreshold = 200
let bankAccount, subtotal = 0, total = 0, phones = 0, accessories = 0, tax = 0;

function account() {
    let temp
    do {
        temp = Number(prompt("Bienvenido, ¿Cúal es el saldo de su cuenta? "))
    } while (Number.isNaN(temp))
    return temp
}

function taxCalc(subtotal) {
    tax = subtotal * taxRate
    total = subtotal + tax
    return tax
}

function format(num) {
    return num.toFixed(2)
}

function purchase() {
    console.log(`Usted ha comprado: \n\t teléfonos: ${phones}\n\t accesorios: ${accessories} \n\n Por un costo de: ${format(subtotal)} + iva \n\n El impuesto es de: ${format(tax)} \n\n Para un total de: ${format(total)}`)
}

bankAccount = account()

while (subtotal < bankAccount) {
    subtotal += phonePrice
    phones++

    if (subtotal < spendingThreshold) {
        subtotal += accessoryPrice
        accessories++
    }
}

taxCalc(subtotal)

purchase()

if (total <= bankAccount) {
    console.log("Gracias por su compra")
} else {
    console.log("Saldo insuficiente, gracias por su visita.")
}




