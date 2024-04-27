const promise = new Promise( (res, rej) => {
    
    document.querySelector('.resolveBtn').addEventListener('click',()=>{
        res('resolved')

    })
    document.querySelector('.rejectBtn').addEventListener('click',()=>{
        rej('rejected')
    })
})

promise.then((p)=>{
    console.log(p)
}).catch((error)=>{
    console.log(error)
})

// const resolePromise = () =>{
//     console.log(this)
//     this.res()
//     console.log(this)
// }

// const rejectPromise = () =>{
//     console.log(this)
//     this.rej()
//     console.log(this)
// }


