document.getElementById('orderForm').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const size = document.getElementById('tshirtSize').value;  
    const quantity = document.getElementById('quantity').value;  
    const color = document.getElementById('color').value;  

    const orderSummary = `  
        <h3>Order Summary</h3>  
        <p><strong>Name:</strong> ${name}</p>  
        <p><strong>Email:</strong> ${email}</p>  
        <p><strong>Size:</strong> ${size}</p>  
        <p><strong>Quantity:</strong> ${quantity}</p>  
        <p><strong>Color:</strong> ${color}</p>  
        <p>Thank you for ordering from ThreadCraft!</p>  
    `;  

    document.getElementById('orderSummary').innerHTML = orderSummary;  
    document.getElementById('orderSummary').style.display = 'block';  
});