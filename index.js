const app = "I don't do much."
var kittens= ["Milo",
"Otis",
"Garfield"
]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyremovelastkitten(){
  kittens.pop()
  return kittens
}
function destructivelyremovefirstkitten(){
  kittens.slice(1)
  return kittens
}
