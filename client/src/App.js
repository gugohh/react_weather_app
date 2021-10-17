
function App() {

  const api = {

    key: "5bbb113b944f9f2520253ed1306adf99",
    base: "https://openweathermap.org/data/2.5"
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className="App">

      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>

      <div className="location_box">
        <div className="location">Madrid , Spain</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>

    </div>
  );
}

export default App;
