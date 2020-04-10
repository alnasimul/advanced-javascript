var sum = 0;
function add(){
   // console.log(arguments);
    var newArray = [...arguments];
    console.log(newArray)
    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i];
         sum = sum + element;
        
    }

    return sum;
}

let result = add(2, 5, 7, 8, 10);

console.log(result);        