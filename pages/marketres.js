document.getElementById('marketResearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // B2C Online Engagement Preferences
    const onlinePlatforms = Array.from(document.getElementById('online-platforms').selectedOptions)
                                  .map(option => option.value);
    
    // Interview Preferences
    const interviewPreference = document.getElementById('interview-preference').value;
    
    // Public Data Consent
    const publicDataConsent = document.querySelector('input[name="public-data"]:checked') ? 
                              document.querySelector('input[name="public-data"]:checked').value : 'No response';
    
    // Health Considerations
    const healthFeatures = Array.from(document.getElementById('health-features').selectedOptions)
                                .map(option => option.value);
    
    // Log or process the data
    console.log({
        onlinePlatforms,
        interviewPreference,
        publicDataConsent,
        healthFeatures
    });
    
    alert('Thank you for your submission. Check the console for the submitted data.');
    
    // Here, you could also send the data to a server using fetch or another AJAX method.
});
