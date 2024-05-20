const obj=[{
    key: 'sample 1',
    data: 'data1'
},
{
    key: 'sample 1',
    data: 'data1'
},
{
    key: 'sample 2',
    data: 'data2'
},
{
    key: 'sample 1',
    data: 'data1'
},
{
    key: 'sample 3',
    data: 'data1'
},
{
    key: 'sample 4',
    data: 'data1'
}
]


// foreach
// obj.forEach(element => {
//     if(output[element.key]){
//         output[element.key].push(element)
//     } else output[element.key] = [element]
// });

// reduce


const output = obj.reduce((total, element)=> {
    if(total[element.key]) total[element.key].push(element)
    else total[element.key] = [element]

    return total
},{}
)

console.log(JSON.stringify(output))