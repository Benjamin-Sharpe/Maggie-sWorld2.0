document.addEventListener('DOMContentLoaded', () => {
    const currentWeightDropdown = document.getElementById('current-weight');
    const scheduleOutput = document.getElementById('schedule');
    const mealsOutput = document.getElementById('meals');
    const waterOutput = document.getElementById('water');
    const exerciseOutput = document.getElementById('exercise');

    // Populate weight dropdown (1 to 800 lbs)
    for (let i = 1; i <= 800; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} lbs`;
        currentWeightDropdown.appendChild(option);
    }

    // Handle form submission
    document.getElementById('calculate').addEventListener('click', () => {
        const wakeTime = document.getElementById('wake-time').value;
        const workStart = document.getElementById('work-start').value;
        const break1 = document.getElementById('break1').value;
        const lunchTime = document.getElementById('lunch-time').value;
        const break2 = document.getElementById('break2').value;
        const workEnd = document.getElementById('work-end').value;

        // Meal suggestions
        const mealOptions = `
            🍓 Breakfast: Oatmeal & berries / Greek yogurt / Scrambled eggs & avocado.
            🥗 Lunch: Grilled chicken salad / Tuna wrap / Stir-fried tofu & quinoa.
            🍲 Dinner: Baked salmon & asparagus / Lean beef stir-fry / Grilled shrimp & veggies.
        `;

        // Hydration reminders
        const waterIntake = `
            💧 Drink 2 bottles of water before lunch.
            💧 Total daily goal: 8 bottles (16 oz each).
        `;

        // Exercise plan
        const exercisePlan = `
            🏋️ 30 min post-work brisk walk or:
            🔥 Jumping jacks (3 x 1 min)
            🔥 High knees (3 x 30 sec)
        `;

        // Schedule breakdown
        const schedule = `
            🌅 Wake-Up: ${wakeTime}
            🏛️ Work Start: ${workStart}
            ☕ First Break: ${break1}
            🍽️ Lunch: ${lunchTime}
            🍵 Second Break: ${break2}
            🌙 Work End: ${workEnd}
        `;

        // Display results
        scheduleOutput.innerHTML = schedule;
        mealsOutput.innerHTML = mealOptions;
        waterOutput.innerHTML = waterIntake;
        exerciseOutput.innerHTML = exercisePlan;
    });
});
