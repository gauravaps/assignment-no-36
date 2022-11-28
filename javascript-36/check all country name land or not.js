//print country name with ending name is land chech if condition.
//let country=[ "scotland","neatherland","england","newzeland","land"]
//let arr=[]
//for( let i=0;i<country.length;i++){
  //  if(country[i].includes('land'))
    //arr.push(country[i])
//}
//console.log(arr)

let country=[ "scotland","neatherland","england","newzeland","land"]
let arr=[]
for( let i=0;i<country.length;i++){
    if(country[i].includes("india"))
    arr.push(country[i])
}
if(arr.length>0)
console.log(arr)
else
console.log("all there are countries without land")