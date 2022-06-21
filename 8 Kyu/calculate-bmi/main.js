// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

const bmi = (weight, height) => {
    let BMI = (weight/(height**2));

    return BMI <= 18.5 ? 'Underweight'
         : BMI <= 25.0 ? 'Normal'
         : BMI <= 30.0 ? 'Overweight'
         : 'Obese'
}

//first tryyyyy AND attempting with the extended ternary operator

