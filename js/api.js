const url = 'https://rickandmortyapi.com/api/character';


async function getData(pUrl) {

    try {
        let response = await fetch(pUrl, { method: 'GET' })
        let data = await response.json();
        console.log(data.results);
        return data;
    } catch (pErr) {
        return pErr;
    }


}

// getData(url) //esta funcion la quito pq la tengo que llamar en main.

