document.getElementById('carPlanningForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const modelName = document.getElementById('modelName').value;
    const prd = document.getElementById('prd').value;
    const specs = document.getElementById('specs').value;
    
    console.log(`Model Name: ${modelName}, PRD: ${prd}, Specs: ${specs}`);
    alert('New vehicle plan submitted successfully. Check the console for details.');
    
    // Here, you might want to send the data to a server for processing
});
