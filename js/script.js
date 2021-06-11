var poolrandom = []

for (var i = 0; i < 5; i++) {
    var num = getRandom(1,99);
    poolrandom.push(num)
}
console.log(poolrandom);

document.getElementById('parti').addEventListener('click',function(){
    alert ('numeri da ricordare: ' + poolrandom)
});




function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}