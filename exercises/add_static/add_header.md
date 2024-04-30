- Add `frontend-dashboard/src/components.js`

```
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
```

- Update `index.js`

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
- Reload `localhost:3000`

The images and css file are missing. 

- Copy the `img` folder and `styles.css` from `frontend/src` to `frontend-dashboard/src`

- Reload `localhost:3000`
