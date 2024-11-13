
let obj={
    name:"dev",
    age:19
}

function abc(){
    return function inner()
    {
        console.log(`name is ${this.name}`);
    }
}
const result = abc().bind(obj);
result();