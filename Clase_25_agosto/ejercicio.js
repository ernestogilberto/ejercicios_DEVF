/*
Create a  Car class:

1) Add properties like model, so you can create a "Ford" with model "Mondeo". Add the properties
    you like in the constructor method.
2) Add a method to accelerate
3) Add a method to stop
4) Add a method turn directions
5) Add a method call status to display the information of the car (properties, methods, etc)

Instance at least 2.*/
class Car {

    constructor(brand, model, year, maxSpeed) {
        this.brand = brand
        this.model = model
        this.year = year
        this.maxSpeed = maxSpeed
        this.velocity = 0
    }

    accelerate(velocity) {
        console.log("Acelerando")
        if (this.velocity + velocity <= this.maxSpeed){
            this.velocity += velocity
            console.log(`Ahora tienes una velocidad de ${this.velocity} km/h`)
        }else{
            this.velocity = this.maxSpeed
            console.log(`Alcanzaste la velocidad máxima ${this.velocity}`)
        }
    }

    brake(brake) {
        console.log("Frenando")
        if (this.velocity === 0 || this.velocity <= brake) {
            this.velocity = 0
            console.log("Te has detenido.")
        } else {
            this.velocity -= brake
            console.log(`Bajando velocidad a ${this.velocity} km/h`)
        }
    }

    turn(direction) {
        this.direction = direction
        console.log(`Girando a la ${direction}`)
    }

    status() {
        let status = `Este es un auto de la marca ${this.brand} modelo ${this.model} del año ${this.year} que alcanza una velocidad maxima de ${this.maxSpeed}. `
        if(this.velocity === 0){
            status += `Actualmente se encuentra detenido, `
        } else if(this.velocity === this.maxSpeed){
            status += `Actualmente va corriendo a velocidad maxima, `
        } else{
            status += `Actualmente va corriendo a ${this.velocity} Km/h, `
        }
        status += `después de su ultimo giro que fue a la  ${this.direction}. `

        return(status)
    }
}

let mondeo = new Car("Ford", "Mondeo", 2000, 150)
let lamborghini = new Car("lamborghini", "Gallardo", 2010, 350)


mondeo.accelerate(180)
mondeo.brake(10)
mondeo.turn("derecha")
console.log(mondeo.status())

lamborghini.accelerate(295)
lamborghini.brake(50)
lamborghini.turn("derecha")
lamborghini.turn("izquierda")
console.log(lamborghini.status())
