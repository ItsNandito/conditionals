//Overtime Rate 1.5
function payrate(){
    let hours = document.getElementById("hours").value;
    let payRate = 15.00 ;
    

    if (hours <= 40){
        document.getElementById("output1").innerHTML = "No overtime detected";
        document.getElementById("output2").innerHTML = "Pay Rate: $15";
        document.getElementById("output3").innerHTML = 'Gross pay is: $' + (hours * payRate);

    } else {

        if (hours > 40){
            let overtimeHours = hours - 40;
            let overtimePay = (1.5 * 15) * overtimeHours;
            let normalPay = 40 * payRate;

            document.getElementById("output1").innerHTML = "Overtime detected (Increased rate applied)";
            document.getElementById("output2").innerHTML = "Pay Rate: $15";
            document.getElementById("output3").innerHTML = 'Gross pay is: $' + (normalPay + overtimePay);
        }
    }
}


