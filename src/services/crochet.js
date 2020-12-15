const BASE_URL = 'https://crochetcorner-backend.herokuapp.com/api/crochet'

function fetchCrochetData(){
    return fetch(BASE_URL).then(res => res.json())
}

function addCrochet(crochet) {
    return fetch(BASE_URL,{
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(crochet)
    }).then(res => res.json())
}

function update(crochet, crochetid) {
    return fetch(`${BASE_URL}${crochetid}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(crochet)
    }).then(res => res.json());
}

function deleteOne(id){
    return fetch (`${BASE_URL}${id}`,{
        method: 'DELETE'
    }) .then(res => res.json())
}

function showOne(id){
    return fetch (`${BASE_URL}${id}`, { 
    }) .then(res => res.json())
}




export {
    fetchCrochetData,
    addCrochet,
    update,
    deleteOne,
    showOne
}