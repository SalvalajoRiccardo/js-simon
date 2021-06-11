var poolrandom = []
var risposte = []
var giuste = []
var risultato = 0;
// generazione numeri random
while (poolrandom.length < 5) {
    var num = getRandom(1,99);
    // bonus
    if(!poolrandom.includes(num)) {
        poolrandom.push(num)
    } 
}
console.log(poolrandom);
// funzione bottone
document.getElementById('parti').addEventListener('click',function(){
    alert ('numeri da ricordare: ' + poolrandom)
    setTimeout(fine,30000)
    
});
    
function fine () {
    for (i = 0; i < 5; i++){
        var risp = parseInt(prompt('inserisci i 5 numeri che ricordi, 1 alla volta'))
        // bonus
        while (isNaN(risp) || risposte.includes(risp)){
            risp = parseInt(prompt('ATTENZIONE, inserisci i NUMERI che ricordi, ma 1 alla volta'))
        }  

        if (poolrandom.includes(risp)) {
            risultato += 1
            giuste.push(risp)
        }

        risposte.push(risp)
    }

    document.getElementById('risposte').innerHTML = 'risposte date: ' + risposte,
    document.getElementById('giuste').innerHTML = 'risposte giuste: ' + giuste,
    document.getElementById('punteggio').innerHTML = 'punteggio: ' + risultato;
}



// Funzioni
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}