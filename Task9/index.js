let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.pop();
console.log("pop: " +fruits);

fruits.push('Mango');
console.log("push: " +fruits);

fruits.shift();
console.log("shift: " +fruits);

fruits.unshift("Banana");
console.log("unshift: " +fruits);

console.log("length: " +fruits.length);

console.log("Index of; "+fruits.indexOf("Apple"));

console.log("Last Index of; "+fruits.lastIndexOf("Apple"));

fruits.splice(2,0,"Lemon","Kiwi");
console.log("Splice add: "+fruits);

fruits.splice(2,2);
console.log("Splice remove: "+fruits);

fruits.fill("Kiwi", 2, 4);
console.log("fill: "+fruits);

a=['A','B','C','D'];
console.log("Concat: "+fruits.concat(a));

b=a.slice(1);
console.log("slice: "+b);

console.log("Copy within: "+b.copyWithin(2,1))

ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
}

console.log(ages);
console.log("Every: "+ages.every(checkAdult));

console.log("Filter: "+ages.filter(checkAdult));

console.log("Find: "+ages.find(checkAdult));

console.log("Find Index: "+ages.findIndex(checkAdult));

c=[6,7,8,9,10]

check = (value,index) => {
    if(value>8){
        console.log(value)
    }
}

c.forEach(check);

console.log("Map; "+c.map(Math.sqrt))

 add = (total, num) => {
    return total + num;
  }

console.log(c.reduce(add));

d=c.reverse();
console.log("Reverse :" +d);

console.log("Sort: "+d.sort((a,b) => a-b));

