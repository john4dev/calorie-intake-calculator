function calculateBMR(gender, weightKg, heightCm, ageYears) {
  // Mifflin–St Jeor Equation
  // Male:    10*kg + 6.25*cm - 5*years + 5
  // Female:  10*kg + 6.25*cm - 5*years - 161
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return gender === 'male' ? base + 5 : base - 161;
}

function adjustForGoal(maintenanceCalories, goal, gender, weightKg) {
  // Safety: minimum calorie safeguards
  const minCalories = gender === 'male' ? 1500 : 1200;
  
  if (goal === 'maintain') {
    return Math.max(maintenanceCalories, minCalories);
  }
  
  if (goal === 'lose') {
    // Maximum deficit: 750 kcal/day OR 1% of bodyweight/week
    // 1% bodyweight/week ≈ weightKg * 0.01 * 7700 kcal / 7 days
    const maxDeficitByWeight = (weightKg * 0.01 * 7700) / 7;
    const maxDeficit = Math.min(750, maxDeficitByWeight);
    const targetCalories = maintenanceCalories - maxDeficit;
    
    return Math.max(targetCalories, minCalories);
  }
  
  if (goal === 'gain') {
    // +500 kcal/day (~0.5 kg/week)
    return maintenanceCalories + 500;
  }
  
  return maintenanceCalories;
}

function calculateMacros(totalCalories, weightKg, activity) {
  // Protein by body weight for active people: 1.6–2.2 g/kg
  // Use higher end (2.0 g/kg) for very active/extremely active
  let proteinGramsPerKg = 1.6;
  if (activity >= 1.725) {
    proteinGramsPerKg = 2.0;
  } else if (activity >= 1.55) {
    proteinGramsPerKg = 1.8;
  }
  
  const protein = Math.round(weightKg * proteinGramsPerKg);  // grams
  const proteinCal = protein * 4;
  
  // Fat: 25% of total calories (9 kcal/g)
  const fatCal = totalCalories * 0.25;
  const fat = Math.round(fatCal / 9);  // grams
  
  // Carbs: remaining calories (4 kcal/g)
  const carbsCal = totalCalories - proteinCal - fatCal;
  const carbs = Math.round(Math.max(0, carbsCal) / 4);  // grams

  return { protein, fat, carbs };
}

function parseNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}

function onCalculateClick() {
  const gender = document.getElementById('gender').value;
  const age = parseNumber(document.getElementById('age').value);
  const weight = parseNumber(document.getElementById('weight').value);
  const height = parseNumber(document.getElementById('height').value);
  const activity = parseNumber(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  // Quick validation: age, weight, height must be truthy and valid numbers
  if (!age || !weight || !height || Number.isNaN(activity)) {
    alert('Please enter valid age, weight, height, and select an activity level.');
    return;
  }

  const bmr = calculateBMR(gender, weight, height, age);
  const maintenanceCalories = bmr * activity;
  const targetCalories = adjustForGoal(maintenanceCalories, goal, gender, weight);
  const calories = Math.round(targetCalories);
  const macros = calculateMacros(calories, weight, activity);

  const resultBox = document.getElementById('result');
  document.getElementById('caloriesOut').textContent = `${calories} kcal`;
  document.getElementById('proteinOut').textContent = `${macros.protein} g`;
  document.getElementById('fatOut').textContent = `${macros.fat} g`;
  document.getElementById('carbsOut').textContent = `${macros.carbs} g`;
  
  document.getElementById('bmrOut').textContent = `BMR: ${Math.round(bmr)} kcal/day`;
  document.getElementById('activityOut').textContent = `Activity: ×${activity}`;
  
  const goalLabels = { 
    lose: 'Lose Weight (safe deficit)', 
    maintain: 'Maintain Weight', 
    gain: 'Gain Weight (+500 kcal)' 
  };
  document.getElementById('goalOut').textContent = `Goal: ${goalLabels[goal]}`;
  
  resultBox.hidden = false;
}

document.getElementById('calculate').addEventListener('click', onCalculateClick);
