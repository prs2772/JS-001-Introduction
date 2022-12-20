var output = "" // Store text previous to print it in console
//Original array
var articles = [
  {
    name: "Bycicle",
    cost: 3000
  },
  {
    name: "TV",
    cost: 9000
  },
  {
    name: "Book",
    cost: 220
  },
  {
    name: "Mobile phone",
    cost: 8000
  },
  {
    name: "Laptop",
    cost: 12000
  },
  {
    name: "Keyboard",
    cost: 150
  },
  {
    name: "Memory stick",
    cost: 300
  },
  {
    name: "Earphones",
    cost: 1200
  }
]

//Filter function
var artFilter = articles.filter(function (article){
  return article.cost <= 500
})

//Other way to write it
var artFilterV2 = articles.filter((article) => {
  return article.cost <= 500
})

console.log("Filter function\n")
console.log(artFilter)
console.log("Filter function V2\n")
console.log(artFilterV2)

//Function map
var artMap = articles.map(function (article){
  return article.name
})

console.log("Function map\n")
console.log(artMap)

//Function find
var artFind = articles.find((article) => {
  return article.name === "TV"
})

console.log("Function find\n")
console.log(artFind)

//Function forEach
output = ""
articles.forEach((article) => {
  output += `->Article: ${article.name}. Price: $${(Math.round(article.cost * 100) / 100).toFixed(2)}\n`
})

console.log("Function forEach\n" )
console.log(output)

//Function some
var artSome = articles.some((article) => {
  return article.cost > 500
})

console.log("Function some\n")
console.log(artSome)

//Adding more elements
console.log("Until now, the array contains:\n")
console.log(articles.map(function (article){
  return article.name
}))
articles.push(
  {
    name: "Boat",
    cost: 23000
  },//First element to push 
  {
    name: "Yatch",
    cost: 9000000
  }//Second
  //... Here could be more
)
console.log("After adding with push 2 new elements:\n")
console.log(articles.map(function (article){
  return article.name
}))

//Deleting elements with splice (postion, number_of_elements)
articles.splice(2,3)

console.log("After deleting 3 elements starting at position 2:\n")
console.log(articles.map(function (article){
  return article.name
}))

//Shift deletes the first element, pop the last

articles.shift()

console.log("Deleting first element with shift:\n")
console.log(articles.map(function (article){
  return article.name
}))

articles.pop()

console.log("Using pop to delete the last one:\n")
console.log(articles.map(function (article){
  return article.name
}))
