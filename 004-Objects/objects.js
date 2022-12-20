var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  myFunction: function(){
    console.log(`My object: Año: ${this.anio}, Modelo: ${this.modelo}, Marca: ${this.marca}`)
  }
};

function auto(marca, modelo, anio){
  this.marca = marca
  this.modelo = modelo
  this.anio = anio
}

var autoNuevo = new auto('Tesla', 'Model 1', 2019)

autoNuevo
