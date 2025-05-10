function nadi(pname) {
    // console.log("hello nadi " + pname);
}


nadi("naz");


const add = function addTwoNumbers(num1, num2){
    return num1 + num2;
}


// console.log(addTwoNumbers(10,20));


function loginUser(username){
    if (!username){
        console.log("please enter username");
        return;
    }

    return `${username} just logged in`

}


// console.log(loginUser("nadira"));




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2, 3, 4,6));


const user = {
    username: "nadi",
    prices: 199
}


function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`)
}


handleObject(user);

const arr = [1,1,2,2]

function handlearray(anyarray){
    console.log(`${anyarray.push(3)} is a fully intelligent`)
}

