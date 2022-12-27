let x = 8;


let funcTest = () => {
    console.log(x);
}

funcTest();
funcTest();
funcTest();

let obj = {
    key1: 2,
    key2: [1,2,3,4,5],
    key3: () => {
        console.log("hello")
        return 6
    }
}

console.log(obj.key3());