const a={
    name:'swathi',
    age:20,
    professional:'software'

}
console.log(a.age);
console.log(a["name"])

// new keyword
let b=new Object();
b.data="system"
b.data1="systematic procedure"
b.release=2022
console.log(b.data1)
console.log(b)
// new operator with constructor func
function user(a,b,c){
    this.name=a;
    this.age=b;
    this.gat=c;
}
const user1=new user("swathi",45,"hat");
console.log(user1)
console.log(user1.name)

//function

function user(a,b,c){
    var d=a+b+c;
    return d;
}
console.log(user(1,2,3))


