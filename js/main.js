let activeFilters = []
let activeFavos = []

const updateCardsView = () => {
    let allCards = document.getElementsByClassName('kaart')

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.add('verborgen');
    }

    if (activeFilters.length == 0) {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.remove('verborgen');
        }
    } else {

        for (let i = 0; i < allCards.length; i++) {
            FavorietKnopId = allCards[i].getElementsByTagName('button')[0].id

            if (activeFilters.includes(allCards[i].dataset.foodType)) {
                if (activeFilters.includes('favorieten')) {
                    if (activeFavos.includes(FavorietKnopId)) {
                        allCards[i].classList.remove('verborgen')
                    }
                } else {
                    allCards[i].classList.remove('verborgen')
                }
            } 
        }
    }

}

const main = () => {
    filterButtons = document.getElementsByClassName('filterButton')
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].onclick = checkFilterChange
    }

    FavorietKnops = document.getElementsByClassName('FavorietKnop')
    for (let i = 0; i < FavorietKnops.length; i++) {
        FavorietKnops[i].onclick = onFavoChange   
    }
}

const checkFilterChange = (event) => {
    let clickedFilterButton = event.target
    let clickedFilter = clickedFilterButton.id

    if(activeFilters.includes(clickedFilter)) {
        activeFilters.splice(activeFilters.indexOf(clickedFilter), 1)
        clickedFilterButton.classList.remove('activeFilter')
    } else {
        activeFilters.push(clickedFilter)
        clickedFilterButton.classList.add('activeFilter')
    }
    updateCardsView()
}

const onFavoChange = (event) => {
    let favobutton = event.target
    favobutton.classList.toggle('activeFavoButton')

    FavorietActief = '❤️'
    FavorietInactief = '🤍'

    if (favobutton.innerHTML === FavorietInactief) {

        favobutton.innerHTML = FavorietActief
    } else {
        favobutton.innerHTML = FavorietInactief
    } 

    if(activeFavos.includes(favobutton.id)) {
        activeFavos.splice(activeFavos.indexOf(favobutton.id), 1)
    } else {
        activeFavos.push(favobutton.id)
    }
    updateCardsView()

}

window.onload = main