let zoom = "123456789"
let g = 0
while(g<zoom.length){
     if(Number(zoom[g] % 2 == 1)){
         console.log(Number(zoom[g]))
     }
     g++
 }