function reSum(sub, sub_, total, chck, grade, gpa) {
    var num1 = parseInt(sub.value);
    var num2 = parseInt(sub_.value);
    var sum = num1 + num2;
    total.value = sum;
    if (sum >= 35) {
        chck.value = "PASS";
    }
    else {
        chck.value = "FAIL";
    }

    sumInternal();
    sumExternal();
    avg_gpa();
    if (sum >= 90 && sum <= 100) {
        grade.value = "O";
        gpa.value = "10";
    }
    else if (sum >= 80 && sum < 90) {
        grade.value = "A+";
        gpa.value = "9";
    }
    else if (sum >= 70 && sum < 80) {
        grade.value = "A";
        gpa.value = "8";
    }
    else if (sum >= 60 && sum < 70) {
        grade.value = "B+";
        gpa.value = "7";
    }
    else if (sum >= 50 && sum < 60) {
        grade.value = "B";
        gpa.value = "6";
    }
    else if (sum >= 40 && sum < 50) {
        grade.value = "C";
        gpa.value = "5";
    }
    else {
        grade.value = "F";
        gpa.value = "0";
    }
}

function sumInternal() {
    var internal = "sub";
    var sub1Tot = 0;
    for (let i = 1; i < 9; i++) {
        var tmpVal = document.getElementById(internal + i);
        if (tmpVal && tmpVal.value) {
            sub1Tot = sub1Tot + parseInt(tmpVal.value);
        }
    }
    if (sub1Tot > 0) {
        document.getElementById("internal").value = sub1Tot;
    }
}
function sumExternal() {
    var external = "sub_";
    var sub2Tot = 0;
    for (let i = 1; i < 9; i++) {
        var tempvalue = document.getElementById(external + i);
        if (tempvalue && tempvalue.value) {
            sub2Tot = sub2Tot + parseInt(tempvalue.value);
        }
    }
    if (sub2Tot > 0) {
        document.getElementById("external").value = sub2Tot;
    }
}
function avg_gpa() {
    var points = "gpa";
    var total_gpa = 0.0;
    for (let i = 1; i < 9; i++) {
        var temp = document.getElementById(points + i);
        if (temp && temp.value) {
            total_gpa = total_gpa + parseInt(temp.value);
        }
    }
    var avg_points = parseInt(total_gpa) / 8;
    if (avg_points > 0) {
        document.getElementById("gpa").value = avg_points;
    }
}

Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key))
}

function saveMarks() {
    //create empty dictionary
    var dict = {};

    var studentOneDetails = {};

    //internal marks
    var internalMarksList = [];
    var internal = "sub";
    for (let i = 1; i < 9; i++) {
        var tmpVal = document.getElementById(internal + i);
        if (tmpVal && tmpVal.value) {
            var securedMarks = parseInt(tmpVal.value);
            internalMarksList.push(securedMarks);
            //internalMar
        }
        else
        {
            internalMarksList.push("");
        }
    }
    // totalInternalMarks
    var totalInternalMarks = document.getElementById("internal").value;
    internalMarksList.push(totalInternalMarks);
    
    studentOneDetails["internalMarks"] = internalMarksList;

    
    //Adding Key-Value Pairs in Dictionary
    dict["2003A51007"] = studentOneDetails;

    //External Marks
    var externalMarksList = [];
    var external = "sub_";
    for (let i = 1; i < 9; i++) {
        var tmpVal = document.getElementById(external + i);
        if (tmpVal && tmpVal.value) {
            var securedMarks = parseInt(tmpVal.value);
            externalMarksList.push(securedMarks);
            //externalMar
        }
        else
        {
            externalMarksList.push("");
        }
    }
    var totalexternalMarks = document.getElementById("external").value;
    externalMarksList.push(totalexternalMarks);

    studentOneDetails["externalMarks"] = externalMarksList;
    //Total Marks
    var totalMarksList = [];
    for (i = 1; i < 9; i++) {
        var tmpValue = document.getElementById("total" + i);
        if (tmpValue && tmpValue.value) {
            var securedMarks = parseInt(tmpValue.value);
            externalMarksList.push(securedMarks);
            //externalMar
        }
        else
        {
            externalMarksList.push("");
        }
    }

    //Adding Key-Value Pairs in Dictionary
    dict["2003A51007"] = studentOneDetails;

    localStorage.setObj("studentMarks", dict);

}

function loadStudentMarks()
{
    var studentMarksDict = localStorage.getObj("studentMarks");
    var studentOneDetails = studentMarksDict["2003A51007"];
    var internalMarksList = studentOneDetails["internalMarks"];

    var internal = "sub";
    let i = 1;
    for ( i = 1; i < 9; i++) {
        var tmpVal = document.getElementById(internal + i);
        if (tmpVal ) {
            var securedMarks = parseInt(internalMarksList[i-1]);
            tmpVal.value = securedMarks;            
        }        
    }
    var tmpVal = document.getElementById("internal");
    tmpVal.value= parseInt(internalMarksList[i-1]);

    var externalMarksList = studentOneDetails["externalMarks"];

    var external = "sub_";
    for (i = 1; i < 9; i++) {
        var tmpVal_ = document.getElementById(external + i);
        if (tmpVal_ ) {
            var securedMarks = parseInt(externalMarksList[i-1]);
            tmpVal_.value = securedMarks;            
        }        
    }
    var tmpVal_ = document.getElementById("external");
    tmpVal_.value = parseInt(externalMarksList[i-1]);

    var totalMarksList = studentOneDetails["totalMarks"];
    //totalmarks of internal and external
    i=1;
    for (i = 1; i < 9; i++) {
        var tmpvalue = document.getElementById("total" + i);
        if (tmpvalue ) {
            var securedMarks = parseInt(totalMarksList[i-1]);
            tmpvalue.value = securedMarks;            
        }        
    }
}
function logout()
            {
                window.location.href = "login.html";
            }