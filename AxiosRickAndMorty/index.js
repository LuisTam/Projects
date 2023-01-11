axios.get('https://rickandmortyapi.com/api/character/2')
.then(response => {
    const name = response.data.name
    const species = response.data.species
    const locationUrl = response.data.location.url
    const location = response.data.location.name
    postToDom(name)
    postToDom(species)
    postToDom(location)
    return axios.get(locationUrl)
})
.then(response => {
    const residentUrl = response.data.residents[1]  
    return axios.get(residentUrl)
})
.then(response => {
    const resident = response.data.name 
    const species2 = response.data.species   
    postToDom(resident)
    postToDom(species2)
})
.catch(error => console.log(error))


function postToDom(data){
    let h1 = document.createElement('p')
    h1.textContent = data
    document.getElementById("con").appendChild(h1)
}
   
