const BASE_URL = 'http://localhost:3001/api/crochet/'

function fetchCrochetData(){
    return fetch(BASE_URL).then(res => res.json())
}

function addCrochet(crochet) {
    return fetch(BASE_URL,{
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(crochet)
    }).then(res => res.json())
}

function update(crochet) {
    return fetch(`${BASE_URL}{crochet._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(crochet)
    }).then(res => res.json());
}

function deleteOne(id){
    return fetch (`${BASE_URL}${id}`,{
        method: 'DELETE'
    }) .then(res => res.json())
}

export {
    fetchCrochetData,
    addCrochet,
    update,
    deleteOne
}