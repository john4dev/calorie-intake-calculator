# Safety Logic Examples

This document shows how the safety checks protect users in various scenarios.

## How Safety Checks Work

### Order of Operations:
1. **Apply goal adjustment**: ±500 kcal
2. **Check BMR × 1.2**: Ensures metabolic safety
3. **Check absolute minimums**: Final fail-safe (1200 for women, 1500 for men)

---

## Example 1: Short Woman Wanting to Lose Weight

**Inputs:**
- Sex: Female
- Age: 30
- Weight: 50 kg
- Height: 150 cm
- Activity: Sedentary (1.2)
- Goal: Lose Weight

**Calculations:**
- BMR = 10(50) + 6.25(150) - 5(30) - 161 = 1,176 kcal
- Maintenance = 1,176 × 1.2 = **1,411 kcal**
- Goal adjustment: 1,411 - 500 = **911 kcal** ❌
- BMR × 1.2 check: 1,176 × 1.2 = **1,411 kcal** ✅ (raises to 1,411)
- Absolute minimum check: 1,411 ≥ 1,200 ✅ (passes)

**Final Recommendation: 1,411 kcal** (BMR × 1.2 prevented unsafe deficit)

---

## Example 2: Small Woman with Very Low BMR

**Inputs:**
- Sex: Female
- Age: 65
- Weight: 45 kg
- Height: 145 cm
- Activity: Sedentary (1.2)
- Goal: Lose Weight

**Calculations:**
- BMR = 10(45) + 6.25(145) - 5(65) - 161 = 1,031 kcal
- Maintenance = 1,031 × 1.2 = **1,237 kcal**
- Goal adjustment: 1,237 - 500 = **737 kcal** ❌
- BMR × 1.2 check: 1,031 × 1.2 = **1,237 kcal** ✅ (raises to 1,237)
- Absolute minimum check: 1,237 ≥ 1,200 ✅ (passes)

**Final Recommendation: 1,237 kcal** (BMR × 1.2 is personalized and safe)

---

## Example 3: Edge Case - Extreme Low BMR

**Inputs:**
- Sex: Female
- Age: 75
- Weight: 40 kg
- Height: 140 cm
- Activity: Sedentary (1.2)
- Goal: Lose Weight

**Calculations:**
- BMR = 10(40) + 6.25(140) - 5(75) - 161 = 889 kcal
- Maintenance = 889 × 1.2 = **1,067 kcal**
- Goal adjustment: 1,067 - 500 = **567 kcal** ❌
- BMR × 1.2 check: 889 × 1.2 = **1,067 kcal** ✅ (raises to 1,067)
- Absolute minimum check: 1,067 < 1,200 ❌ → **1,200 kcal** ✅

**Final Recommendation: 1,200 kcal** (absolute minimum caught the edge case)

---

## Example 4: Average Man Losing Weight (No Safety Override)

**Inputs:**
- Sex: Male
- Age: 30
- Weight: 75 kg
- Height: 175 cm
- Activity: Moderately Active (1.55)
- Goal: Lose Weight

**Calculations:**
- BMR = 10(75) + 6.25(175) - 5(30) + 5 = 1,698 kcal
- Maintenance = 1,698 × 1.55 = **2,632 kcal**
- Goal adjustment: 2,632 - 500 = **2,132 kcal** ✅
- BMR × 1.2 check: 1,698 × 1.2 = 2,038 kcal (2,132 ≥ 2,038) ✅
- Absolute minimum check: 2,132 ≥ 1,500 ✅

**Final Recommendation: 2,132 kcal** (safe deficit, no overrides needed)

---

## Example 5: Very Active Woman Gaining Weight

**Inputs:**
- Sex: Female
- Age: 25
- Weight: 60 kg
- Height: 165 cm
- Activity: Very Active (1.725)
- Goal: Gain Weight

**Calculations:**
- BMR = 10(60) + 6.25(165) - 5(25) - 161 = 1,376 kcal
- Maintenance = 1,376 × 1.725 = **2,374 kcal**
- Goal adjustment: 2,374 + 500 = **2,874 kcal** ✅
- BMR × 1.2 check: 1,376 × 1.2 = 1,651 kcal (2,874 ≥ 1,651) ✅
- Absolute minimum check: 2,874 ≥ 1,200 ✅

**Final Recommendation: 2,874 kcal** (healthy surplus for muscle gain)

---

## Key Takeaways

✅ **BMR × 1.2 is the primary safety floor** - personalized to each user  
✅ **Absolute minimums catch extreme edge cases** - rare but important  
✅ **Standard ±500 kcal goal adjustment** - safe for most users  
✅ **Order matters** - apply goal first, then safety checks  

This multi-layered approach ensures safe recommendations for all body types and goals.
