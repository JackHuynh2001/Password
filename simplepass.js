//type checkString below
var mynumber=0
function checkString(mystring){
  if(mystring.length>=8 && mymystring.legnth<=20){
    return mystring

  }

  else{
    throw new Error("Your Password is Weak AF")
  }
}

function getNumber(mystring){
  try{
    mystring=checkString(mystring);
    console.log(mystring);

}
catch(e){
  console.log(e.message)
}
}
  getNumber("1234568");




//type getString below
function getString(mystring){
  try{
    mystring=checkString(mystring);
    console.log(mystring);

}
catch(e){
  console.log(e.message)
}
}
  getNumber("1234568");
