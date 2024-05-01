- In `frontend-dashboard/src/App.js`, update line 1 which imports the react library

  ```
import React, { useState, useEffect } from 'react';
  ```

- Add a new component in the same file

```
function SummaryData() {
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    // Simulated data for testing purposes
    const testData = {
      total_transactions: 1000,
      total_products_sold: 500,
      avg_feedback: 4.5,
      revenue: 15000,
      cost_of_sales: 10000,
      gross_profit: 5000
    };

    // Set the test data after a short delay to simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      setSummaryData(testData);
    }, 1000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // The empty array makes sure the effect runs only once after the initial rendering

  return (
    <div className="cards">
      {summaryData ? (
        <>
          <div className="card">
            <div className="card__title">Total Transactions</div>
            <div className="card__value summary">{summaryData.total_transactions}</div>
          </div>
          <div className="card">
            <div className="card__title">Total Products Sold</div>
            <div className="card__value summary">{summaryData.total_products_sold}</div>
          </div>
          <div className="card">
            <div className="card__title">Avg. Feedback</div>
            <div className="card__value summary">{summaryData.avg_feedback}</div>
          </div>
          <div className="card">
            <div className="card__title">Total Revenue</div>
            <div className="card__value summary">£{parseFloat(summaryData.revenue).toFixed(2)}</div>
          </div>
          <div className="card">
            <div className="card__title">Total Product Cost</div>
            <div className="card__value summary">£{parseFloat(summaryData.cost_of_sales).toFixed(2)}</div>
          </div>
          <div className="card">
            <div className="card__title">Gross Profit</div>
            <div className="card__value summary">£{parseFloat(summaryData.gross_profit).toFixed(2)}</div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
```
- Include the component in your App

```
function App()  {
      return <div className="container">
             <Header />
             <Store name="Northern Store" />
             <SummaryData />
             <Footer />
             </div>
}
```
