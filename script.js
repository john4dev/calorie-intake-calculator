function calculateBMR(gender, weightKg, heightCm, ageYears) {
  // Mifflin–St Jeor Equation
  // Male:    10*kg + 6.25*cm - 5*years + 5
  // Female:  10*kg + 6.25*cm - 5*years - 161
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return gender === 'male' ? base + 5 : base - 161;
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

  // Quick validation: age, weight, height must be truthy and valid numbers
  if (!age || !weight || !height || Number.isNaN(activity)) {
    alert('Please enter valid age, weight, height, and select an activity level.');
    return;
  }

  const bmr = calculateBMR(gender, weight, height, age);
  const calories = Math.round(bmr * activity);

  const resultBox = document.getElementById('result');
  document.getElementById('caloriesOut').textContent = `${calories} kcal/day`;
  document.getElementById('bmrOut').textContent = `BMR: ${Math.round(bmr)} kcal/day`;
  document.getElementById('activityOut').textContent = `Activity: ×${activity}`;
  resultBox.hidden = false;
}

document.getElementById('calculate').addEventListener('click', onCalculateClick);
