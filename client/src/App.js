
function App() {

  const api = {

    key: "5bbb113b944f9f2520253ed1306adf99",
    base: "https://openweathermap.org/data/2.5"
  }


  return (
    <div className="App">

      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>

    </div>
  );
}

export default App;
