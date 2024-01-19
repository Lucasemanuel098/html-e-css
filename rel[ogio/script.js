const hora = document.getElementById(`hora`)
const minuto = document.getElementById(`minutos`)
const segundo = document.getElementById(`segundos`)

const relogio = setInterval(function time(){
    let dateToday = new Date();
    hr = dateToday.getHours();
    min = dateToday.getMinutes();
    seg = dateToday.getSeconds();

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;

    if(hr < 10){
        hora.textContent = `0` + hr;
    }; 
    if(min < 10){
        minuto.textContent = `0` + min;
    };
    if(seg < 10){
        segundo.textContent = `0` + seg;
    };

})