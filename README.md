# Calorie Needs Calculator

A single-page app that estimates daily calorie intake and macronutrient targets based on your body stats, activity level, and weight goal. **Includes safety safeguards and evidence-based protein recommendations.**

## What it does
- **Inputs**: Sex (Male/Female), age (years), weight (kg), height (cm), activity level, and goal (lose/maintain/gain weight)
- **Calculates BMR** using Mifflin–St Jeor:
  - Male: `10*kg + 6.25*cm - 5*years + 5`
  - Female: `10*kg + 6.25*cm - 5*years - 161`
- **Adjusts for goal with safety limits**:
  - **Lose weight**: -500 kcal/day (~0.5 kg/week)
  - **Maintain weight**: No change
  - **Gain weight**: +500 kcal/day (~0.5 kg/week)
  - **Safety checks applied in this order**:
    1. Apply goal adjustment (±500 kcal)
    2. **BMR × 1.2 minimum** (ensures metabolic safety)
    3. **Absolute minimums** (industry-standard fallback):
       - Women: ≥1,200 kcal/day
       - Men: ≥1,500 kcal/day
- **Shows recommended intake**:
  - **Calories** (rounded total with safety limits applied)
  - **Protein** (body weight–based: 1.6–2.2 g/kg depending on activity)
    - Sedentary/Light: 1.6 g/kg
    - Moderate: 1.8 g/kg
    - Very/Extremely Active: 2.0 g/kg
  - **Fat** (25% of calories, 9 kcal/g)
  - **Carbs** (remaining calories, 4 kcal/g)

## Safety Features

### Safety Check Order (Industry Best Practice)
The app applies safety checks in the correct order:

1. **Apply goal adjustment**: ±500 kcal (standard and safe)
2. **Apply BMR × 1.2 minimum**: Ensures you never go below minimum energy for normal daily functioning
3. **Apply absolute minimums**: Final fail-safe for edge cases

### A. BMR × 1.2 Minimum (Metabolic Safety)
Formula: `minimumSafeCalories = BMR × 1.2`

This is the **primary safety floor**. BMR × 1.2 represents the minimum energy needed for:
- Basic metabolic functions
- Light daily activities (walking, sitting, basic tasks)
- Normal bodily functions

Usually lands above the absolute minimums but provides personalized protection based on individual BMR.

### B. Absolute Minimums (Industry-Standard Fallback)
Final fail-safe for edge cases (shorter users, low weight, very low BMR):
- **1,200 kcal/day for women**
- **1,500 kcal/day for men**

### C. Protein by Body Weight
Instead of percentage-based protein, uses evidence-based recommendations:
- **1.6 g/kg** for sedentary/lightly active
- **1.8 g/kg** for moderately active
- **2.0 g/kg** for very/extremely active

This is more accurate for gym/training apps and muscle preservation during weight loss.

### D. Disclaimer
⚠️ **This tool provides general estimates and is not medical advice. Consult a healthcare provider before starting a weight-loss or muscle-gain program.**

## Activity levels
- **Sedentary** (1.2): Little to no exercise
- **Lightly Active** (1.375): Light exercise 1–3 days/week
- **Moderately Active** (1.55): Moderate exercise 3–5 days/week
- **Very Active** (1.725): Hard exercise 6–7 days/week
- **Extremely Active** (1.9): Very hard exercise + physical job

## Run locally
Just open `index.html` in your browser. No build step required.

## Files
- `index.html` – UI markup and layout with disclaimer
- `styles.css` – Card styling, macronutrient grid, spacing, responsive design
- `script.js` – BMR calculation, safe goal adjustment, body weight–based protein, macro breakdown, click handler
