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
        if (this.velocity + velocity <= this.maxSpeed){
            this.velocity += velocity
        }else{
            this.velocity = this.maxSpeed
        }
        console.log(`Subiendo velocidad a ${this.velocity} km/h`)
    }

    brake(brake) {
        if (this.velocity === 0 || this.velocity <= brake) {
            this.velocity = 0
        } else {
            this.velocity -= brake
        }
        console.log(`Bajando velocidad a ${this.velocity} km/h`)
    }

    turn(direction) {
        this.direction = direction
        console.log(`Girando a la ${direction}`)
    }

    status() {
        console.log(`Este es un auto de la marca ${this.brand} modelo ${this.model} del año ${this.year} que alcanza una velocidad maxima de ${this.maxSpeed} y actualmente va corriendo a ${this.velocity} Km/h después de su ultimo giro que fue a la ${this.direction}.`)
    }
}

let mondeo = new Car("Ford", "Mondeo", 2000, 150)
let lamborghini = new Car("lamborghini", "Gallardo", 2010, 350)


mondeo.accelerate(180)
mondeo.brake(10)
mondeo.turn("derecha")
mondeo.status()

lamborghini.accelerate(295)
lamborghini.brake(50)
lamborghini.turn("derecha")
lamborghini.turn("izquierda")
lamborghini.status()
