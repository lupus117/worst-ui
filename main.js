function nr() {
    return Math.floor(Math.random() * 10)
}


function generateX() {

    var tmpArr = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11]

    for (let i = 0; i < 10; i++) {

        tmpnr = nr();
        if (tmpArr.includes(tmpnr))
            i--;
        else tmpArr[i] = tmpnr;
    }
    return tmpArr;
}

var cypher = generate()



function generate() {

    var tmpArr = [
        generateX(),
        generateX(),
        generateX(),
        generateX(),
        generateX(),
        generateX(),
        generateX(),
        generateX()
    ]

    //console.table(cypher)
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 10; y++) {
            document.getElementById(`${x}${y}`).textContent = tmpArr[x][y];
            //console.log(`[${x}${y}]=${cypher[x][y]}`)
        }
    }
    return tmpArr
}

document.getElementById("enterHere").onchange = function() {
    var tmpval = document.getElementById("enterHere").value.toString()
    tmpvallength = tmpval.length;
    for (var i = 0; i < 8 - tmpvallength; i++) {
        tmpval = "0" + tmpval;
    }
    document.getElementById("rangeseer").textContent = tmpval;
}

document.getElementById('submitNumber').onclick = function() {
    var num = document.getElementById('enterHere').value;
    document.getElementById('enterHere').value = "";
    document.getElementById("rangeseer").textContent = "";
    var numtostring = num.toString();
    var ntslength = numtostring.length;
    var result = ""
    for (var i = 0; i < 8 - ntslength; i++) {
        numtostring = "0" + numtostring;
    }

    for (let i = 0; i < numtostring.length && i < 8; i++) {

        result = result + cypher[i][parseInt(numtostring[i])];

    }
    document.getElementById("outputNum").textContent = result;
    cypher = generate()
}