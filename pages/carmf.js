document.getElementById('manufacturingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const material = document.getElementById('material').value;
    const productionLine = document.getElementById('production-line').value;
    const quantity = document.getElementById('quantity').value;
    
    console.log(`Material: ${material}, Production Line: ${productionLine}, Quantity: ${quantity}`);
    alert('Manufacturing details submitted successfully. Check the console for details.');
    
    // Here you might send the data to a server for further processing.
});
