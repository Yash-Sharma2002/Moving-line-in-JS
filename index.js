// let arr = 
// setInterval(move, 10000)
// function move() {

let count =0
let wr = setInterval(function () {
    if (count == 53) {

        count = 53
        let cr = setInterval(function () {
            if (count == 0) {
                clearInterval(wr)
            }
            else {
                count--
                document.getElementById("head").style.marginLeft= count + "rem"
            }
        }, 100)

        // clearInterval(cr)

    } else {
        count++
        document.getElementById("head").style.marginLeft = count + "rem"
    }
}, 100)
count = 0
// }