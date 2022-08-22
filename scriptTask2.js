let studentMark = parseInt(prompt("Enter Your Mark:"));

if(studentMark < 25){
        console.log("Your Grade is F");
    }
    else if(studentMark >= 25 && studentMark < 45){
        console.log("Your Grade is E");
    }
    else if(studentMark >= 45 && studentMark < 50){
        console.log("Your Grade is D");
    }
    else if(studentMark >= 50 && studentMark < 60){
        console.log("Your Grade is C");
    }
    else if(studentMark >= 60 && studentMark <= 80){
        console.log("Your Grade is B");
    }
    else if(studentMark > 80 && studentMark <= 100){
        console.log("Your Grade is A");
    }
    else{
        console.log("Enter a Valid Score");
    }