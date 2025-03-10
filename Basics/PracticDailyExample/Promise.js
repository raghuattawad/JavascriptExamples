
const promise = new Promise((resolve ,reject) => {

    if (sucesss){
        resolve(sucesss)
    }
    else {
        reject('faliure')
    }
})
promise.then((data) =>{

console.warn("data")
})
promise.catch((error)=>{

    console.warn('catch error')
})

let promise2 = new Promise(() =>{


})

