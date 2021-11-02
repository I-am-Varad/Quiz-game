function func(){
    var x = document.getElementById("name").value
    document.getElementById("para").innerHTML =  x + " Noobda"
    document.getElementById("para").style.color = "red"
    document.getElementById("para").style.fontSize = "90px"
    document.getElementById("num").value=""
    alert("OK daba re noobde")
}

function table(){
    var n = document.getElementById("num").value
    var arr = []
    for (var i=1; i<=10; i++)
    {
        arr.push(n + " X " + i + " = " + n*i + "  ")
    }
    document.getElementById("para").innerHTML = arr;
}

function oddeve(){
    var o = document.getElementById("odd").value
    if (o%2==0){
        document.getElementById("para").style.color="green"
        document.getElementById("para").innerHTML = "number is even"
    }
    else{
        document.getElementById("para").innerHTML = "number is odd"
        document.getElementById("para").style.color="red"
    }

}