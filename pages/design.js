document.getElementById('carDesignForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const engineType = document.getElementById('engine').value;
    const bodyStyle = document.getElementById('body').value;
    const operatingSystem = document.getElementById('os').value;
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked'))
                          .map(feature => feature.value);
    
    // Example of doing something with the form data:
    // Here, we log the collected data to the console.
    console.log(`Engine Type: ${engineType}`);
    console.log(`Body Style: ${bodyStyle}`);
    console.log(`Operating System: ${operatingSystem}`);
    console.log(`Selected Features: ${features.join(', ')}`);

    // Displaying a message to the user
    alert('Your car design has been submitted successfully. Check the console for the submitted details.');

    // Optionally, you can also send this data to a server using fetch or another method.
    // Example of a fetch call (uncomment and modify URL to use):
    /*
    fetch('YOUR_ENDPOINT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            engineType,
            bodyStyle,
            operatingSystem,
            features,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
});
