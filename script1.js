function dados(){
    var txt = document.getElementById('txt')
    var img = document.getElementById('imagem')
    //Variáveis acima são do texto que é apresentado e da imagem
    var Data = new Date() 
    var mes = ("0" + (Data.getMonth() + 1)).slice(-2)
    //Essas variáveis nos dão o mês, é necessário colocar o +1 porque o get.Month dá o mês anterior
    var dia = ("0" + Data.getDate()).slice(-2)
    var diasem = Data.getDay()
    var ano = Data.getFullYear()
    //Conseguimos o ano completo, a data e o dia da semana
    switch (diasem) {
        case 0: 
            txt.innerHTML = `Hoje é Domingo, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/sunday.png'
            break
        case 1:
            txt.innerHTML = `Hoje é Segunda-feira, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/monday.png'
            break
        case 2:
            txt.innerHTML = `Hoje é Terça-feira, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/tuesday.png'
            break
        case 3:
            txt.innerHTML = `Hoje é Quarta-feira, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/wednesday.png'
            break
        case 4:
            txt.innerHTML = `Hoje é Quinta-feira, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/thursday.png'
            break
        case 5:
            txt.innerHTML = `Hoje é Sexta-feira, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/friday.png'
            break
        case 6:
            txt.innerHTML = `Hoje é Sábado, dia ${dia}/${mes}/${ano}`
            img.src = 'imgs/saturday.png'
    }
}
