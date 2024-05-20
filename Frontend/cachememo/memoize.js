const map = new Map()

function memoizeOne(fn){

    function temp(...args){
        const key = [...args].join('_');
        console.log(key)

        console.log(map)
        if(map[key]){
            console.log('cached')
            //return from cache
            return map[key]
        }else{
            
            const result = fn(...args);
            map[key] = result;
            return result;
        }
    }

    return temp;
}

const add = (a,b) => a+b;
const addMemo = memoizeOne(add);

console.log(addMemo(1,2))
console.log(addMemo(11,22))
console.log(addMemo(1,2))
