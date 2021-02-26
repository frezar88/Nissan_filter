
export function CreateElementResultCarAndBtnShowMore(data, builder) {
    
    let btnMore = document.querySelector('.result-footer button')
    
    for (let i=0; i < data.length; i++) {
        
       
        let carList = new builder(data[i], ".car-list__wrapper");
    }
    
    
    let carItem = document.querySelectorAll('.car-list__item')
    if (carItem.length == 0 || carItem.length < 12) {
        btnMore.style.display = 'none'
        btnMore.classList.add('noneDisp')
    }
    else {
        btnMore.style.display = 'block'
        btnMore.classList.remove('noneDisp')
        
    }

    
}


