document.addEventListener('DOMContentLoaded', function () {
    const offerForm = document.getElementById('offerForm');
    const responseMessage = document.getElementById('responseMessage');
    const productSelect = document.getElementById('productSelect');
    const offerDiv = document.querySelector('.add-offer');
    const url = offerDiv.getAttribute('data-url');
  
    // Fetch product IDs
    fetch('/products_id')
      .then(response => response.json())
      .then(data => {
        productSelect.innerHTML = ''; // Clear default option
        data.forEach(product => {
          const option = document.createElement('option');
          console.log(product);
          option.value = product.product_id;
          option.textContent = `Product ${product.product_item}`;
          productSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Failed to fetch products', error);
        productSelect.innerHTML = '<option value="1">Default Product</option>'; // Revert to default if fail
      });
  
    // Handle form submission
    offerForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const offerData = {
        offer_name: offerForm.offerName.value,
        product_id: offerForm.productID.value,
        offer_discount_percentage: offerForm.discountPercentage.value,
        offer_start_date: offerForm.startDate.value,
        offer_end_date: offerForm.endDate.value
      };
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(offerData)
      })
      .then(response => response.json())
      .then(data => {
        responseMessage.textContent = 'Offer added successfully!';
        console.log(data);
      })
      .catch(error => {
        responseMessage.textContent = 'Failed to add offer.';
        console.error('Error:', error);
      });
    });
  });
  
