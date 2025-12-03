# Calorie Needs Calculator

A single-page app that estimates daily calorie intake and macronutrient targets based on your body stats, activity level, and weight goal.

## What it does
- **Inputs**: Sex (M/F), age (years), weight (kg), height (cm), activity level, and goal (lose/maintain/gain weight)
- **Calculates BMR** using Mifflin–St Jeor:
  - Male: `10*kg + 6.25*cm - 5*years + 5`
  - Female: `10*kg + 6.25*cm - 5*years - 161`
- **Adjusts for goal**:
  - Lose weight: -500 kcal/day (~0.5 kg/week)
  - Maintain weight: no change
  - Gain weight: +500 kcal/day (~0.5 kg/week)
- **Shows recommended intake**:
  - **Calories** (rounded total)
  - **Protein** (30% of calories, 4 kcal/g)
  - **Fat** (25% of calories, 9 kcal/g)
  - **Carbs** (45% of calories, 4 kcal/g)

## Activity levels
- **Sedentary** (1.2): Little to no exercise
- **Lightly Active** (1.375): Light exercise 1–3 days/week
- **Moderately Active** (1.55): Moderate exercise 3–5 days/week
- **Very Active** (1.725): Hard exercise 6–7 days/week
- **Extremely Active** (1.9): Very hard exercise 

## Run locally
Just open `index.html` in your browser. No build step required.

## Files
- `index.html` – UI markup and layout
- `styles.css` – Card styling, macronutrient grid, spacing, responsive design
- `script.js` – BMR calculation, goal adjustment, macro breakdown, click handler
