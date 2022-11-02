import _ from "lodash"

export function cleanupName(name){
    const words = name.split(" ")
    const capitalizeWords = words.map(word => _.capitalize(word))
    return capitalizeWords.join(" ")
}


function changeName(person){
    person.name = "jack"
    return person
}

const john=  {name:"john", age:20}

changeName(john)


var arr = [1, 10, 19, 11, 13, 16, 19]
// sort desc
arr.sort((left, right)=>{
    if(left > right) return -1
    if(left < right) return 1
    return 0
})


