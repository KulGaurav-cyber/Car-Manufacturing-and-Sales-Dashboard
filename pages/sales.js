document.getElementById('buildButton').addEventListener('click', function() {
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const dealership = document.getElementById('dealership').value;
    
    alert(`Building your ${model} in ${color}. Please visit our ${dealership} dealership for more details.`);
    // In a real application, you might send this data to a server instead of showing an alert.
});
