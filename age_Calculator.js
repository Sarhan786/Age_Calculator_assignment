function GetAge(){
    let D1 = parseInt(document.getElementById("Date").value);
    let M1 = parseInt(document.getElementById("Month").value);
    let Y1 = parseInt(document.getElementById("Year").value);
    let date = new Date();
    let D2 = date.getDate();
    // console.log(D2)
    let M2 = date.getMonth() + 1 ;
    // console.log(M2)
    let Y2 = date.getFullYear();
    // console.log(Y2)
    let month = [31,28,31,30,31,30,31,30,31,30,31,30]
    // console.log(month.length);
    if(D1>D2){
        D2 =D2 + month[M2-1];
        M2 = M2-1;
    }
    if(M1>M2){
        M2 = M2+12;
        Y2 = Y2-1;
    }

    let D = D2 - D1;
    let M = M2 - M1;
    let Y = Y2 - Y1;
    // console.log(D,M,Y)
    document.getElementById("age").innerHTML = `Your age is ${Y} Year ${M} Month ${D} Days`;
} 

// GetAge()