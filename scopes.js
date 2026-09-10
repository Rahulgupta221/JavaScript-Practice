

if(true){
let a = 10
const b = 20
var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scopes in js===>

function one(){
    const user = "Rahul"

    function Two(){
        const website = "Youtube"
        console.log(user);
        
    }
    Two()
}
// one()


if(true){
    const username = "rahul"
    if(username === "rahul"){
        const web =  "youtube"
        // console.log(username  +  web);
        
    }
}
console.log(add(5))
function add(num){
    return num + 1

}

console.log(Two(5))

const Two = function(num){
    return num + 1
}
