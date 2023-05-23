const characterSection = document.querySelector('#characterView');

const valoresUrl = window.location.search;
const urlParams = new URLSearchParams(valoresUrl);
let id = urlParams.get('id');
if (!id) {
    window.location.href = 'index.html'; // esto me redirige a la pagina principal en caso de que no encuentrre id.
}

const urlCharacter = url + '/' + id; //query param
//Con este id tenemos que crear una url  para hacer una peticion a la api, que cumple lo siguiente:

async function getCharacter(pUrl) {
    //consultar a la API.
    try {
        let data = await getData(pUrl); //Como getData es una promesa, hay que esperarla (await) y la funcion que la rodea tiene que ser async.
        printCharacter(data, characterSection)
    } catch (pErr) {
        console.log(pErr);
    }
}

{/* Copio aquí la estructura HTML para poderla tener de referencia al crearla:

<h3 class="card-title">Nombre del personaje</h3>
<hr>
<div class="row">
    <figure class="col">
        <img src="" alt="">
    </figure>
    <ul class="col">
        <li>Estado: <span class="alive">Vivo</span></li>
        <li>Genero: </li>
        <li>Especie: </li>
        <li>Origen: </li>
        <li>Localozación: </li>
        <li>URL: </li>
    </ul>
</div> */}

function printCharacter(pCharacter, pDom) {
    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = pCharacter.name;
    const hr = document.createElement('hr');
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `<figure class="col">
                        <img src="${pCharacter.image}" alt="">
                    </figure>
                    <ul class="col">
                        <li>Estado: <span class="${pCharacter.status.toLowerCase()}">${pCharacter.status}</span></li>
                        <li>Genero: ${pCharacter.gender}</li>
                        <li>Especie: ${pCharacter.species}</li>
                        <li>Origen: ${pCharacter.origin.name}</li>
                        <li>Localización: ${pCharacter.location.name}</li>
                        <li>URL: <a href="${pCharacter.url}">Enlace a la API</a></li>
                    </ul>`

    pDom.append(h3, hr, div)
}

getCharacter(urlCharacter);

