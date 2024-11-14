
// initial user input to allow flavor entry.
let userinput = prompt("please enter the last 6 flavors you have ordered! Please separate with a comma.",
    "vanilla,vanilla,chocolate,chocolate,strawberry,coffee"
 )
// delimited string that takes user input and coverts to an array.
console.log("afterinput",userinput);
userinput = userinput.replaceAll(" ","");
console.log("afterreplace",userinput);
const stringArray = userinput.split(",");



// const createsimpleobject = (key, value) => {
        // const obj = {};
        // obj[stringArray] = value;
        // return obj;
        // };


        // *finished product*
const countobject = {};

stringArray.forEach(item => {
    console.log("key", item);
    console.log("countobject.key",countobject[item]);
    if (countobject[item]) {
        countobject[item]++;
    console.log("afterinteration",countobject)
    } else {
        countobject[item] = 1;
    console.log("keyintializer",countobject)
    }
});

// const countobject = {};
// for (let i = 0; i < stringArray.length; i++) {
//   const item = stringArray[i];
//   const number = (item);

// }

// const froyo = createsimpleobject("vanilla", 1);
//     console.log(froyo)

console.log(stringArray)
console.table(stringArray)
console.log(countobject)
// console.log(froyo)