const data = [1,2,3,[4,[5,6]],7,8];


function flattenedArray(arr,tempArray){
    console.log(typeof(arr),arr)
    for(let i=0; i<arr.length ; i++){
        console.log(typeof(arr[i]),arr[i])
        if(typeof(arr[i]) === 'number' ){
            tempArray.push(arr[i])
        }
        else {
            console.log('else')
            flattenedArray(arr[i],tempArray)
        }
    }
    return tempArray
}

console.log(JSON.stringify(flattenedArray(data,[])))