var cardNumInput = document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let Cnumber = cardNumInput.value
    Cnumber = Cnumber.replace(/\s/g, "")

    if(Number(Cnumber)){
        Cnumber = Cnumber.match(/.{1,4}/g)
        Cnumber = Cnumber.join(" ")
        cardNumInput.value = Cnumber
    }
})