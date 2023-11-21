import { useEffect, useState } from "react";
//https://api.coinpaprika.com/v1/tickers

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  function onChange(event) {
    setMyMoney(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={myMoney}
        type="number"
        placeholder="Input your USD"
      />
      <h3>USD = </h3>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {myMoney / coin.quotes.USD.price}
              {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
