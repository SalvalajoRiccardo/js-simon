var poolrandom = []
var risposte = []
var giuste = []
var risultato = 0;

for (var i = 0; i < 5; i++) {
    var num = getRandom(1,99);
    if(!poolrandom.includes(num)) {
        poolrandom.push(num)
    }
    
}
console.log(poolrandom);

document.getElementById('parti').addEventListener('click',function(){
    alert ('numeri da ricordare: ' + poolrandom)
    setTimeout(fine,3000)
    
});


    
function fine () {
    for (i = 0; i < 5; i++){
        var risp = parseInt(prompt('inserisci i 5 numeri che ricordi ma 1 alla volta'))
        while (isNaN(risp) || risposte.includes(risp)){
            risp = parseInt(prompt('ATTENZIONE, inserisci i NUMERI che ricordi, 1 alla volta'))
        }  

        if (poolrandom.includes(risp)) {
            risultato += 1
            giuste.push(risp)
        }

        risposte.push(risp)
    }

    return document.getElementById('risposte').innerHTML = 'risposte date: ' + risposte,
    document.getElementById('giuste').innerHTML = 'risposte giuste: ' + giuste,
    document.getElementById('punteggio').innerHTML = 'punteggio: ' + risultato;
}




function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}