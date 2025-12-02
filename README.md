# Calorie Needs Calculator

A single-page app that computes daily calorie needs from the Mifflin–St Jeor BMR and an activity multiplier.

## What it does
- Inputs: gender (male/female), age (years), weight (kg), height (cm), activity (1.2–1.9)
- Calculates BMR using Mifflin–St Jeor:
  - Male: `10*kg + 6.25*cm - 5*years + 5`
  - Female: `10*kg + 6.25*cm - 5*years - 161`
- Daily calories = `round(BMR * activity)`
- Shows the result with BMR and the multiplier used.

## Run locally
Just open `index.html` in your browser. No build step required.

## Files
- `index.html` – UI markup and layout
- `styles.css` – Card styling, spacing, green button, responsive widths
- `script.js` – Core logic and click handler
