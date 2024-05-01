- Update `frontend-dashboard/src/App.js`

```jsx
import React from 'react';

function App()  {
      return <div className="container">
             <Header />
             </div>
}
  
function Header() {
    return (
      <header className="section-01">
        <div className="logo">
          Sequel-<span>Mart 2</span>
        </div>
        <nav className="navbar">
        <ul>
          <li className="navbar-item selected">
            <a href="index.html">Stores</a>
          </li>
          <li className="navbar-item">Products</li>
          <li className="navbar-item"><a href="offers.html">Offers</a></li>
          <li className="navbar-item">
            <a href="submit-order.html">Place Order</a>
          </li>
        </ul>
      </nav>
      </header>
);
}

export default App;

- Reload `localhost:3000`

The images and css file are missing.

- Copy the `img` folder and `styles.css` from `frontend/src` to `frontend-dashboard/src``

```

- Update `index.js` to use `./styles.css`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- Reload `localhost:3000
