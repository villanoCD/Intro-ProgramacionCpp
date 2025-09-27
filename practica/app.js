// 1. clase: "Vehículo"para todos los vehículos
class Vehiculo {
    // contructor : se ejecuta al crear una instancia de la clase
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidadActual = 0;
    }

    acelerar(incremento) {
        this.velocidadActual += incremento;
    }

    frenar(decremento) {
        this.velocidadActual -= decremento;
    }

    mostrarEstado() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Velocidad Actual: ${this.velocidadActual}`);
    }
}

// 2. clases derivadas: "Coche", "Moto", "Camión"
const miCoche = new Vehiculo("Toyota", "Corolla", 2020);
miCoche.acelerar(50);
miCoche.mostrarEstado();
miCoche.frenar(20);
miCoche.mostrarEstado();
// 3. atributos: marca, modelo, año, velocidad actual
// 4. métodos: acelerar(), frenar(), mostrarEstado()