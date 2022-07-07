// ************  Set Variable
const imgDiv = document.querySelectorAll('.container img')
const imgModal = document.querySelector('.modal img')
const modal = document.querySelector('.modal')
const fullImg = document.querySelector('.full-img')
const body = document.body

// ************  Set Event
imgDiv.forEach(function(img) {
    img.addEventListener('click' ,function() {
        modal.classList.add("open");
        fullImg.classList.add("open");
        const originee = img.getAttribute('alt')
        imgModal.setAttribute('src',`/img/${originee}.jpg`)
        
    })
});

modal.addEventListener('click' ,function() {
    
    modal.classList.remove("open");

})




// console.log(imgDiv)




































