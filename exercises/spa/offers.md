- In `frontend-dashboard/src/App.js` add a new `OffersForm` component

```jsx
function OffersForm() {
  const [products, setProducts] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [formData, setFormData] = useState({
    offerName: '',
    productID: '', 
    discountPercentage: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    fetch(`${backend}/products_id`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Finding the selected product_id based on product_item
    const selectedProduct = products.find(product => product.product_item === formData.productID);
    if (!selectedProduct) {
      console.error('Selected product not found');
      return;
    }
  
    const requestBody = {
      offer_name: formData.offerName,
      product_id: selectedProduct.product_id,
      offer_discount_percentage: parseFloat(formData.discountPercentage), // Parse as float
      offer_start_date: formData.startDate,
      offer_end_date: formData.endDate
    };
  
    fetch(`${backend}/offers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add offer.');
      }
      return response.json();
    })
    .then(data => {
      setResponseMessage('Offer added successfully!');
      console.log(data);
    })
    .catch(error => {
      setResponseMessage('Failed to add offer.');
      console.error('Error:', error);
    });
  };  

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Offer Name:
          <input
            type="text"
            value={formData.offerName}
            onChange={e => setFormData({ ...formData, offerName: e.target.value })}
          />
        </label>
        <label>
          Product Item:
          <select
            value={formData.productID} // Changed to store product_item
            onChange={e => setFormData({ ...formData, productID: e.target.value })}
          >
            {products.map(product => (
              <option key={product.product_id} value={product.product_item}>
                {product.product_item}
              </option>
            ))}
          </select>
        </label><br/>
        <label>
          Discount Percentage:
          <input
            type="number"
            value={formData.discountPercentage}
            onChange={e => setFormData({ ...formData, discountPercentage: e.target.value })}
          />
        </label><br/>
        <label>
          Start Date:
          <input
            type="date"
            value={formData.startDate}
            onChange={e => setFormData({ ...formData, startDate: e.target.value })}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={formData.endDate}
            onChange={e => setFormData({ ...formData, endDate: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
}
```

- Update the `Offers` component to use it:

```jsx
  function Offers() {
    return <div>
        <Header />
        <OffersForm />
        <Footer />
    </div>
  }
```
