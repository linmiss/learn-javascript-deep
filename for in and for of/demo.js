const j = {
    obj: function() {
        console.log(1)
    },
    js: function() {
        console.log(2)
    }
}
console.log(Object.keys(j))
(function(){
    for (let func of Object.keys(j)) {
            window[func] = j[func]
        }
        Object.freeze(window[func])
})();


console.log(window.obj())