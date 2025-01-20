//Script for admission
function html() {
    var text1;
    var person1 = prompt("Please enter your name:", "");
    if (person1 == null || person1 == ""){
         text1 = "Cancelled";
    }

    else {
        text1 = "Hello " + person1 + "<br><br>" + "Welcome to Ebube Strong Academy" + "<br>" + "Below are the requirements for HTML course:" + "<br><br>" + "1. Mobile Phone" + "<br>" + "2. Strong internet" + "<br>" + "3. Vs Code" + "<br>" + "4. Free Course"
    }

    document.getElementById("demo").innerHTML = text1;
}

function css() {
    var text2;
    var person2 = prompt("Please enter your name:", "");
    if (person2 == null || person2 == ""){
         text2 = "Cancelled";
    }

    else {
        text2 = "Hello " + person2 + "<br><br>" + "Welcome to Ebube Strong Academy" + "<br>" + "Below are the requirements for CSS course:" + "<br><br>" + "1. Laptop / Mobile Phone" + "<br>" + "2. Strong internet" + "<br>" + "3. Trebedit App or Vs Code" + "<br>" + "4. Course is N5000"
    }

    document.getElementById("demo").innerHTML = text2;
}

// Script for the sending button
function send() {
    document.getElementById("success").innerHTML = "Your registration was successful, we will review and reach out to you in 24hours."
}