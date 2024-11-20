const song = "Fight the Youth";
const score = 9;
const highestScore = 10; //variable embeded
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
const b=`i want to sing a song for ${score}`;
console.log(b)
console.log(output)

const h="student" //length property
console.log(h.length);
if(h.includes("dent")){
    console.log("true");
}
else{
    console.log("false");
}
console.log(song.indexOf("Youth"));
console.log(output.slice(4,10));
console.log(b.toUpperCase());
console.log(output.toLowerCase())
console.log(song.replace('the','with'))

// array concept
const a = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(a.length); //length method
console.log(a[0])
a[2]="system"
console.log(a)
const random = ["tree", 795, [0, 1, 2]]; //random method
random[2][2]
console.log(random)
console.log(a.indexOf("system")) //indexof
console.log(a.push("donut"))//push
console.log(a)
console.log(a.unshift("data"))//unshift
console.log(a)
console.log(a.pop())//pop
console.log(a)

const d= ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(d.shift())
console.log(d)
console.log(d.splice(2,2))
console.log(d)

const g="systamatic procedure which i have tobuild the data"
const h1=g.split(",");
console.log(h1);
s=g.length;
console.log(s)
f=g[0];
console.log(f) // the first item in the array
j=g[g.length - 1];
console.log(j)

//tostring method
const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str);

const str1 = "apple,banana,cherry";//split method
const arr1 = str.split(",");
console.log(arr1); 

const arr2 = [1, 2, 3, 4];//join method
const str2 = arr.join(" - ");
console.log(str2);  
