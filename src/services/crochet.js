const BASE_URL = 'http://localhost:3001/api/crochet'

function fectchCrochetData(crochet){
    return fetch(BASE_URL).then(res => res.json)
}

function addCrochet(crochet) {
    return fetch(BASE_URL,{
        method: 'POST',
        headers: new Headers({'COntent-Type': 'application/json'}),
        body: JSON.stringify(crochet)
    }).then(res => res.json())
}


export {
    fectchCrochetData,
    addCrochet
}