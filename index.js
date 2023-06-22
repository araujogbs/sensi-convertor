

function converteSensi(box1, box2, value) {




    if (box1 == 1 && box2 == 2) {
        return value * 3.18
        

    } else if (box1 == 2 && box2 == 1) {
        return value / 3.18
    }
    else { }


}

function update() {
    let box1 = document.getElementById('chooseagame1').value
    let box2 = document.getElementById('chooseagame2').value
    let yourSensi = document.getElementById('yoursensi').value

    console.log(box1)
    console.log(box2)
    console.log(yourSensi)

    console.log(converteSensi(box1, box2, yourSensi))


    


    document.getElementById('convertedsensi').innerHTML = converteSensi(box1, box2, yourSensi)

}
