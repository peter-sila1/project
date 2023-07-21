let score=prompt("enter score between 0-100")
function getGrade(score) {
    if(score>=79 && score<=100){
        alert("Grade A")
        return "Grade A"
    }
    else if (score >60 && score <= 79){
        alert("Grade B")

        return "Grade B"
    }
    else if (score >49 && score <= 59){
        alert("Grade C")

        return "Grade C"
    }
    else if (score >40 && score <= 49){
        alert("Grade D")
        return "Grade D"
    }
    else if (score>=0 && score <= 40){
        alert("Grade E")
        return "Grade E"
    }else{
        alert("Invalid Score")
        return "Invalid Score"
    }
    }
console.log(getGrade(score))