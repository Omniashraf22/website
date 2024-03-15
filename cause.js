let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let pages = document.querySelectorAll('.page')
    document.querySelector('.islider').appendChild(pages[0])
})

prev.addEventListener('click', function(){
    let pages = document.querySelectorAll('.page')
    document.querySelector('.islider').prepend(pages[pages.length - 1]) 
})