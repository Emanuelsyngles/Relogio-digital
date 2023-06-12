let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

let relogio = setInterval(function time(){
    let dateToday = new Date()
    let h = dateToday.getHours()
    let m = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if(h < 10) h = '0' + h

    if(m < 10) m = '0' + m

    if(s < 10) s = '0' + s

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
})