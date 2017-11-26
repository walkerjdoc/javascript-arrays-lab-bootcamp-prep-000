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
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens= kittens.slice(1)
  return kittens
}
function appendKitten(name){
  kittens=[...kittens,name]
  return kittens
}
function prependKitten(name){
  kittens=[name,...kittens]
  return kittens
}
