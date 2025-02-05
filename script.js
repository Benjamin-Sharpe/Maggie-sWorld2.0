document.addEventListener('DOMContentLoaded', () => {
    const weightDropdown = document.getElementById('current-weight');
    const goalDropdown = document.getElementById('goal-loss');
    const calorieGoalOutput = document.getElementById('calorie-goal');
    const resourcesOutput = document.getElementById('resources');

    // Ensure all elements exist before running code
    if (!weightDropdown || !goalDropdown || !calorieGoalOutput || !resourcesOutput) {
        console.error("One or more elements are missing from the HTML.");
        return;
    }

    // Populate weight dropdown (1 to 800 lbs)
    for (let i = 1; i <= 800; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} lbs`;
        weightDropdown.appendChild(option);
    }

    document.getElementById('calculate').addEventListener('click', () => {
        const currentWeight = parseInt(weightDropdown.value);
        const goalLoss = parseFloat(goalDropdown.value);

        if (!currentWeight || !goalLoss) {
            alert("Please select a weight and a goal loss.");
            return;
        }

        // Calculate daily calorie goal using Mifflin-St Jeor Equation
        const dailyCaloricIntake = Math.round(10 * currentWeight + 6.25 * (currentWeight * 2.54) - 5 * 25 - 161 - (goalLoss * 500));

        calorieGoalOutput.innerHTML = `<strong>${dailyCaloricIntake} kcal</strong> per day to meet your goal.`;

        // Science-backed resources
        const resources = [
            {
                title: "The Role of Protein in Weight Loss",
                link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4045293/",
                summary: "High-protein diets help with satiety, metabolism, and fat loss."
            },
            {
                title: "Impact of Sleep on Weight Loss",
                link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3763921/",
                summary: "Poor sleep increases cortisol and cravings, making weight loss harder."
            },
            {
                title: "Gut Health & Weight Loss",
                link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6448875/",
                summary: "A diverse gut microbiome aids metabolism and reduces bloating."
            }
        ];

        resourcesOutput.innerHTML = resources.map(res => `
            <li>
                <a href="${res.link}" target="_blank">${res.title}</a> - ${res.summary}
            </li>
        `).join('');
    });
});
