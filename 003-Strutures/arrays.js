var arrFruits = ["Apple", "Pineapple", "Guava", "Strawberry"]
console.log(arrFruits[3])

var moreFruitsA = arrFruits.push("Grapes")
console.log(arrFruits[4])//Grapes

var moreFruitsB = arrFruits.pop()//Deletes Grapes

var moreFruitsC = arrFruits.unshift("Grapes")
console.log(arrFruits[0])//Grapes

var moreFruitsD = arrFruits.shift()
console.log(arrFruits[0])//Deletes Grapes

var position = arrFruits.indexOf("Guava")
console.log(position)

function solution(estudiantes, deathCount, nuevo) {
  while (deathCount > 0) {
    estudiantes.pop()
    deathCount--
  }
  estudiantes.push(nuevo)
  return estudiantes
}
