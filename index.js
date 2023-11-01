"use strict";

window.onload = function () {
    let btn = document.getElementById("estTotalCostBtn");

    btn.onclick = calCarRentalCost;

    function calCarRentalCost() {
        let tollTagEl = document.getElementById("tollTag");
        let gpsEl = document.getElementById("gps");
        let roadsideEl = document.getElementById("roadside");
        let surchargeEl = document.getElementById("yes");
        let surchargeAmount = 0;
        let dailyRentalAmount = 29.99;



        if (tollTagEl.checked) {
            dailyRentalAmount += Number(tollTagEl.value) / 100;
        }

        if (gpsEl.checked) {
            dailyRentalAmount += Number(gpsEl.value) / 100;
        }

        if (roadsideEl.checked) {
            dailyRentalAmount += Number(roadsideEl.value) / 100;
        }

        if (surchargeEl.checked) {
            surchargeAmount = dailyRentalAmount * 0.3;
        }
        
        let dailyRental = document.getElementById("dailyCarRentalCost");
        dailyRental.innerHTML = (dailyRentalAmount).toFixed(2);

        let dailyCarRentalEl = document.getElementById("numberOfDays");
        let dailyCarRentalValue = Number(dailyCarRentalEl.value);

        let totalCostEl = document.getElementById("estTotalCost");
        totalCostEl.innerHTML = (dailyRentalAmount * dailyCarRentalValue + surchargeAmount).toFixed(2);


        let surchargeAmountEl = document.getElementById("surchargeCost");
        surchargeAmountEl.innerHTML = (surchargeAmount).toFixed(2);


        let options = document.getElementById("estOptionsCost");
        options.innerHTML = (dailyCarRentalValue * (dailyRentalAmount - 29.99)).toFixed(2);

    }

    calCarRentalCost();
}
