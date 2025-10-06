const url = "https://api.thedogapi.com/v1/breeds"
const chaveApi =
"live_nPkHZKWb1welWFepXqWvmZoKi8O78uXpLY2YeM4A5qS6C5T8Q4exkzpRxDlaBZmV"

const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": chaveApi

})

const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
}

fetch(url)
.then(res => res.json())
.then(dados => console.log(dados))
.catch(erro => console.log(erro.message))

//LOCALSTORAGE

function salvarDados(chave, dados){
    localStorage.setItem(chave, dados)
}

function resgatarDados(chave) {
    return JSON.parse(localStorage.getItem(chave))
}