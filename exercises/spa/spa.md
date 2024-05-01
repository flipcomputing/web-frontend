- In `frontend-dashboard/src/App.js`, add:

```
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
```

- In the same file, update your App component.

```
function App()  {
      return <div className="container">
          <BrowserRouter>           
            <Routes>
            <Route path="/" element={<Stores />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
          </BrowserRouter>
          </div>
  }
```

- Add a Stores component. Only include the components that you have implemented.

```
  function Stores() {
    return <div>
                <Header />
                <SummaryData />
                <Transactions />
                <Customers />
                <Products />
                <Footer />
    </div>
  }
```

- Update the Header component to use routes for navigation:

```
function Header() {
    return (
      <header className="section-01">
        <div className="logo">
          Sequel-<span>Mart 2</span>
</div>
<nav className="navbar">
<ul>
<li className="navbar-item selected">
<Link to="/">Stores</Link>
</li>
<li className="navbar-item">Products</li>
<li className="navbar-item">
<Link to="/offer">Offers</Link>
</li>
<li className="navbar-item">
</li>
</ul>
</nav>
</header>
);
}
```

- Add an Offers component (you'll add the functionality in the next step)

```
function Offers() {
    return <div>
        <Header />
        <span>Offers</span>
        <Footer />
    </div>
}
```

- Test the website and make sure you can navigate between routes. 
