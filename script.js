function calculateBMI() {
      var weight = parseFloat(document.getElementById('weight').value);
      var height = parseFloat(document.getElementById('height').value) / 100;
      if (weight && height) {
        var bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('result').textContent = "Your BMI: " + bmi;
        let cat = '';
        if (bmi < 18.5) cat = 'Underweight';
        else if (bmi < 24.9) cat = 'Normal weight';
        else if (bmi < 29.9) cat = 'Overweight';
        else cat = 'Obese';
        document.getElementById('category').textContent = "Category: " + cat;
      } else {
        document.getElementById('result').textContent = "Please enter valid weight and height.";
        document.getElementById('category').textContent = '';
      }
    }
