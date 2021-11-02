var Questions = ['1 + 4 = ?', '2 + 7 = ?', '6 + 45 = ?', '18 + 45 = ?']
var count = 0 

function myFunction(){
    var person = prompt("Please enter your Name", "Varad Kulkarni")
    if (person != null && person != " "){
        document.getElementById("demo").innerHTML = "Hello " + person + "! We will start the quiz as soon as you hit start"
        document.getElementById("star").style.display = "block"
    }
}

function afunc(){
    document.getElementById("ques").innerHTML = Questions[0]
    count = 0
    document.getElementById("demo").innerHTML = " "
    document.getElementById("skr").innerHTML = " "
    document.getElementById("hela").style.display = "none"
}

function bfunc(i){
    var c = i+1
    document.getElementById("ques").innerHTML = Questions[c]
    ans()
}

function Next(){
    document.getElementById("result").innerHTML = " "
    var i = 0
    var c = Questions.length

    for(i; i<c; i++){
        if(document.getElementById("ques").innerHTML === Questions[i])
        {
            bfunc(i)
            break;
        }
    }
}

function score(){
    document.getElementById("skr").innerHTML = "Your score is : " + count + " out of 4"
}

function ans(){
    if(document.getElementById("ques").innerHTML === "1 + 4 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            setTimeout(Next,1000)
        }

        var opt2 = document.createElement("button")
        opt2.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is correct"
            count++
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            setTimeout(Next,1000)
        }

        var opt3 = document.createElement("button")
        opt3.innerHTML = "8"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            setTimeout(Next,1000)
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML = "7"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
            setTimeout(Next,1000)
        }
    }

    else if(document.getElementById("ques").innerHTML === "2 + 7 = ?"){
            var opt1 = document.createElement("button")
            opt1.innerHTML = "6"
            document.body.appendChild(opt1)
            opt1.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt2 = document.createElement("button")
            opt2.innerHTML = "5"
            document.body.appendChild(opt2)
            opt2.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                count++
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt3 = document.createElement("button")
            opt3.innerHTML = "9"
            document.body.appendChild(opt3)
            opt3.onclick = function opta(){
                document.getElementById("result").style.color = "green"
                document.getElementById("result").innerHTML = "Your answer is correct"
                count++
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt4 = document.createElement("button")
            opt4.innerHTML = "10"
            document.body.appendChild(opt4)
            opt4.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }
        }

    else if(document.getElementById("ques").innerHTML === "6 + 45 = ?"){
            var opt1 = document.createElement("button")
            opt1.innerHTML = "51"
            document.body.appendChild(opt1)
            opt1.onclick = function opta(){
                document.getElementById("result").style.color = "green"
                document.getElementById("result").innerHTML = "Your answer is correct"
                count++
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt2 = document.createElement("button")
            opt2.innerHTML = "41"
            document.body.appendChild(opt2)
            opt2.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                count++
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt3 = document.createElement("button")
            opt3.innerHTML = "56"
            document.body.appendChild(opt3)
            opt3.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt4 = document.createElement("button")
            opt4.innerHTML = "71"
            document.body.appendChild(opt4)
            opt4.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }
        }

    else if(document.getElementById("ques").innerHTML === "18 + 45 = ?"){
            var opt1 = document.createElement("button")
            opt1.innerHTML = "65"
            document.body.appendChild(opt1)
            opt1.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt2 = document.createElement("button")
            opt2.innerHTML = "53"
            document.body.appendChild(opt2)
            opt2.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                count++
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt3 = document.createElement("button")
            opt3.innerHTML = "82"
            document.body.appendChild(opt3)
            opt3.onclick = function opta(){
                document.getElementById("result").style.color = "red"
                document.getElementById("result").innerHTML = "Your answer is wrong"
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }

            var opt4 = document.createElement("button")
            opt4.innerHTML = "63"
            document.body.appendChild(opt4)
            opt4.onclick = function opta(){
                document.getElementById("result").style.color = "green"
                document.getElementById("result").innerHTML = "Your answer is correct"
                count++
                opt1.style.display = "none"
                opt2.style.display = "none"
                opt3.style.display = "none"
                opt4.style.display = "none"
                setTimeout(Next,1000)
            }
        }
        else{
            document.getElementById("ques").style.color = "cyan"
            document.getElementById("ques").innerHTML="Quiz ends here !";
            score()
        }    
    }
