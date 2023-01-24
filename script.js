// 5
let  personArray = ['alex', 'vano', 'givi', 'noka', 'khatia'];

let addArray = [...personArray];

//თავში  დამატება
addArray.unshift('giorgi');
console.log(addArray);

//ბოლოში დამატება
addArray.push('tamaza');
console.log(addArray);

//ბოლოში წაშლა
personArray.pop();
console.log(personArray);

//თავში წაშლა
personArray.shift();
console.log(personArray);

//1

for (let i = 0; i < 100; i++) {
    console.log(i);
    
}

//2
let i = 0;
while (i < 50) {
    console.log(i);
    i++
}