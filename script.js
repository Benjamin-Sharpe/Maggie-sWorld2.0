document.addEventListener('DOMContentLoaded', () => {
    const currentWeightDropdown = document.getElementById('current-weight');
    const output = document.getElementById('output');
    const scheduleOutput = document.getElementById('schedule');
    const mealsOutput = document.getElementById('meals');
    const waterOutput = document.getElementById('water');

    // Populate weight dropdown (1 to 800 lbs)
    for (let i = 1; i <= 800; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} lbs`;
        currentWeightDropdown.appendChild(option);
    }

    // Handle form submission
    document.getElementById('calculate').addEventListener('click', () => {
        const currentWeight = parseInt(document.getElementById('current-weight').value);
        const goalLoss = parseFloat(document.getElementById('goal-loss').value);
        const wakeTime = document.getElementById('wake-time').value;
        const workStart = document.getElementById('work-start').value;
        const break1 = document.getElementById('break1').value;
        const lunchTime = document.getElementById('lunch-time').value;
        const break2 = document.getElementById('break2').value;
        const workEnd = document.getElementById('work-end').value;

        // Caloric deficit calculation
        const dailyCaloricDeficit = goalLoss * 500;

        // Elegant exercise plan
        const exercisePlan = `
            🌟 Post-Work Session: A royal 30-minute indoor walk. 
            💃 Alternatives: 3 sets of high knees (30 seconds), Jumping Jacks (3 sets x 1 min).
            🧘 Elegant Wellness Tip: A short meditation before bed for stress relief.
        `;

        // Elegant meal suggestions
        const mealOptions = `
            🍓 **Breakfast:** Greek yogurt with honey & berries / Omelet with goat cheese.
            🥗 **Lunch:** Grilled chicken with avocado salad / Smoked salmon & quinoa.
            🥩 **Dinner:** Herb-crusted salmon with asparagus / Filet mignon with steamed veggies.
        `;

        // Hydration plan
        const waterIntake = `
            💎 **By Lunch:** Hopefully, you've had at least 2 bottles of water.
            💎 **Total Daily Goal:** 8 bottles of water.
        `;

        // Royal schedule breakdown
        const schedule = `
            👑 **Wake-Up Time:** ${wakeTime}.
            🏛️ **Work Start:** ${workStart}.
            ☕ **First Break:** ${break1}.
            🍽️ **Lunch:** ${lunchTime}.
            🍵 **Second Break:** ${break2}.
            🌙 **Work End:** ${workEnd}.
            💃 **Workout & Wellness Time:** 30 minutes of movement after ${workEnd}.
        `;

        // Display results
        scheduleOutput.innerHTML = schedule;
        mealsOutput.innerHTML = mealOptions;
        waterOutput.innerHTML = waterIntake;
    });
});
