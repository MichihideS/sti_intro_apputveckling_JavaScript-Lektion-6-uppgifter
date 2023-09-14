
function helTal() {
    var heltal = prompt("Skriv in ett heltal mellan 1 - 1000")
    if (heltal > 0 && heltal < 1001) {
        alert (heltal + " är ett heltal mellan 1-1000!")
    }
    else {
        alert ("FEL, försök igen!")
    }
}

function decimals() {
    var decimal = 0.89
    alert(decimal)
}

function textMessage() {
    var text = prompt("Jag gillar äpplen, gillar du också äpplen? (Yes or No)")
    if (text == "Yes") {
        alert("NICE")
    }
    else {
        alert("NEHE, skit it då")
    }
}
function trueFalse() {
    var santfalskt = prompt ("Skriv in ett tal")
    if (santfalskt > 5) {
        alert("Är " + santfalskt + " större än 5?")
        alert ("SANT")
    }
    else {
        alert("Är " + santfalskt + " större än 5?")
        alert ("FALSKT")
    }
}

function array() {
    var number = [200, 324, 544, 800, 129, 85, 45, 80, 45, 2000, 750]
}
    
