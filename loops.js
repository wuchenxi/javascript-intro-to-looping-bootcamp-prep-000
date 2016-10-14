function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function forLoop(array){
  var r=[...array]
  for (var i = 0; i < 25; i++)
    r=[...r,i==1?`I am 1 strange loop.`:`I am ${i} strange loops.`]
  return r
}

function whileLoop(n){
  while(n>0){
  console.log(n--)
} return('done')
}

function doWhileLoop(array){
  var r=array
  do{
    r=r.slice(0,r.length-1)
  }while(r.length>0 && maybeTrue()==true)
  return r
}
