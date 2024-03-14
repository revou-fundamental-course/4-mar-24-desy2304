function calculate() {
    var weight = parseFloat(document.getElementById("weight-input").value);
    var height = parseFloat(document.getElementById("height-input").value);

    var bmi = weight / ((height/100) * (height/100));

    document.getElementById("result-bmi").innerText = bmi.toFixed(2);

    var bmiCategory = getBMICategory(bmi);
    document.getElementById("bmi-category").innerText = bmiCategory;

    var resultSection = document.getElementById("result-section");
    var caseSection = document.getElementById("case-section");

    if (bmiCategory === "Overweight") {
        resultSection.style.display = "block";
        caseSection.style.display = "block";
    } else {
        resultSection.style.display = "none";
        caseSection.style.display = "none";
    }

    var resultMessage = getMessage(bmi)
    document.getElementById("result-message").innerText = resultMessage;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal (ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("reset-button").addEventListener("click", function() {
        document.getElementById("weight-input").value = "";
        document.getElementById("height-input").value = "";
        document.getElementById("result-bmi").innerText = "0";
        document.getElementById("bmi-category").innerText = "-";
        document.getElementById("weight-status").innerText = "";
    });
});

