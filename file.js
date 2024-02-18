const array = []

async function loopSprites(){
    for(let i = 1; i<721; i++){
        await getSprite(i)
    }
}

async function start(){
    const loop = await loopSprites()
    await console.log(array)
}



async function getSprite(id){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id)
    const pokemonData = await res.json()
    array.push(pokemonData.sprites.front_default)
}

start()