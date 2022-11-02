


import engData from './eng.json'


function get24Words(words) {
    const len = words.length
    const arr = []
    while (arr.length < 24) {
        const ran = Math.random() * len
        const ranInt = Math.floor(ran)
        const element = words[ranInt]
        if (!arr.includes(element)) {
            arr.push(element)
        }
    }

    return arr
}

function convertToWords(words) {
    return words.map((word, index) => {
        return {
            name: word,
            index
        }
    })

}

function combineWords(words){
    const arr = []
    for (let i = 0; i < 6; i++) {
        const list = words.slice(i*3,i*3+3)
        arr.push({
            list: list.map(wordObj => wordObj.name),
            primary: i,
            "index-selected": -1
        })
    }
    return arr
}

export function createData() {
    const words = get24Words(engData)
    const words2 = convertToWords(words)
    const words3 = combineWords(words2)
    console.log(words3)
    return words3
}