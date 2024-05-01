
- In `frontend-dashboard/src/App.js`, add a `backend` variable using the port you are using.

```
const backend = "http://localhost:5001";
```

- In the same file, replace the `useEffect` code in your `SummaryData` component to `fetch` the data.

```
 useEffect(() => {
    fetch(`${backend}/summary`)
      .then(response => response.json()) // parse the JSON response
      .then(data => setSummaryData(data[0])) // using the function provided by useState
      .catch(error => console.error('Error fetching summary data:', error));
  }, []); // The empty array makes sure the effect runs only once after the initial rendering
```

- Reload the Northern Store website to see the live data instead of test data. 
