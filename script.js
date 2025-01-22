// job-search.js - Frontend-only Job Search Tool

// Elements
const searchButton = document.getElementById('search-jobs-btn');
const jobResults = document.getElementById('job-results');

// Mock Job Listings
const mockJobs = [
    { title: 'Software Developer', company: 'TechCorp', location: 'Remote', url: 'https://example.com/job1' },
    { title: 'Web Designer', company: 'CreativeWorks', location: 'Remote', url: 'https://example.com/job2' },
    { title: 'Data Analyst', company: 'Global Analytics', location: 'Remote', url: 'https://example.com/job3' },
];

// Function to Display Mock Jobs
function displayMockJobs() {
    jobResults.innerHTML = mockJobs
        .map(job => `
            <div class="job-result">
                <h3>${job.title}</h3>
                <p>${job.company} - ${job.location}</p>
                <a href="${job.url}" target="_blank">Apply Here</a>
            </div>
        `)
        .join('');
}

// Event Listener for Search Button
searchButton.addEventListener('click', () => {
    displayMockJobs();
});
