function calculateBMR(gender, weightKg, heightCm, ageYears) {
  // Mifflin–St Jeor Equation
  // Male:    10*kg + 6.25*cm - 5*years + 5
  // Female:  10*kg + 6.25*cm - 5*years - 161
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return gender === 'male' ? base + 5 : base - 161;
}

function adjustForGoal(calories, goal) {
  // Lose weight: -500 kcal/day (~0.5 kg/week)
  // Maintain weight: no change
  // Gain weight: +500 kcal/day (~0.5 kg/week)
  if (goal === 'lose') return calories - 500;
  if (goal === 'gain') return calories + 500;
  return calories;
}

function calculateMacros(totalCalories) {
  // Protein: 30% (4 kcal/g)
  // Fat: 25% (9 kcal/g)
  // Carbs: 45% (4 kcal/g)
  const proteinCal = totalCalories * 0.30;
  const fatCal = totalCalories * 0.25;
  const carbsCal = totalCalories * 0.45;

  return {
    protein: Math.round(proteinCal / 4),  // grams
    fat: Math.round(fatCal / 9),          // grams
    carbs: Math.round(carbsCal / 4)       // grams
  };
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
  const targetCalories = adjustForGoal(maintenanceCalories, goal);
  const calories = Math.round(targetCalories);
  const macros = calculateMacros(calories);

  const resultBox = document.getElementById('result');
  document.getElementById('caloriesOut').textContent = `${calories} kcal`;
  document.getElementById('proteinOut').textContent = `${macros.protein} g`;
  document.getElementById('fatOut').textContent = `${macros.fat} g`;
  document.getElementById('carbsOut').textContent = `${macros.carbs} g`;
  
  document.getElementById('bmrOut').textContent = `BMR: ${Math.round(bmr)} kcal/day`;
  document.getElementById('activityOut').textContent = `Activity: ×${activity}`;
  
  const goalLabels = { lose: 'Lose Weight (-500 kcal)', maintain: 'Maintain Weight', gain: 'Gain Weight (+500 kcal)' };
  document.getElementById('goalOut').textContent = `Goal: ${goalLabels[goal]}`;
  
  resultBox.hidden = false;
}

document.getElementById('calculate').addEventListener('click', onCalculateClick);
