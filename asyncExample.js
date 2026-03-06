function getNumbers(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const numbers = [1,2,3,4,5]
            resolve(numbers);
        },1000)
        
    })
}

// const numbersPromise = getNumbers().then(numbers => {
//     console.log('Numbers received:', numbers);
// });
// console.log('Fetching numbers...');
// console.log(numbersPromise);

async function fetchNumbers(){
    console.log('Fetching numbers...');
    const numbers = await getNumbers();
    console.log('Numbers received:', numbers);
}

fetchNumbers();