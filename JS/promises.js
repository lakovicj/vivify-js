let errorFlag = false;

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!errorFlag) {
                resolve("Success!")
            } else {
                reject("Error!");
            }
        }, 1000)
    })
}

createPromise()
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg))


const promise1 = Promise.resolve('This is promise 1');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is promise 2')
    }, 1000)
})
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
        .then(item => console.log(item))
