const pets = require('./../data/pets.json')

const exibirPet = idDoPet => {
    for (let pet of pets) {
        if (idDoPet == pet.id) {
            console.log(`O ${pet.animal} ${pet.nome} tem a cor ${pet.cor} e seu dono se chama ${pet.nomeDoDono}`)
        }
    }
}

module.exports = exibirPet

