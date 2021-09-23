const MarketTradeContainerStyle = {
  width: "100vw",
  height: "600px",
  display: "flex",
  flexDirection: "column",
};
const InsideContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "60px auto",
  maxWidth: "fit-content",
  alignItems: "center",
};

/*
const openChart = (e) =>{
    let symbol = "COINBASE:"+e.target.innerHTML+"USD"
}*/

const MarketTrade = () => {
  const CoinList = [
    {
      Symbol: "BTC",
      LastPrice: "50000",
      DayChange: "2.5%",
    },
    {
      Symbol: "ETH",
      LastPrice: "3100",
      DayChange: "0.5%",
    },
    {
      Symbol: "LTC",
      LastPrice: "195",
      DayChange: "10.5%",
    },
  ];
  const CoinRow = [];
  CoinRow.push(
    <div style={{ display: "flex", flexDirection: "row" }} key={"columnName"}>
      <h3>Name</h3>
      <h3 style={{ width: "100px", marginLeft: "250px", textAlign: "center" }}>
        LastPrice
      </h3>
      <h3 style={{ width: "100px", marginLeft: "250px", textAlign: "center" }}>
        DayChange
      </h3>
    </div>
  );
  CoinList.map((coin) => {
    CoinRow.push(
      <div style={{ display: "flex", flexDirection: "row" }} key={coin.Symbol}>
        <h3>{coin.Symbol}</h3>
        <h3
          style={{ width: "100px", marginLeft: "250px", textAlign: "center" }}
        >
          {coin.LastPrice}
        </h3>
        <h3
          style={{ width: "100px", marginLeft: "250px", textAlign: "center" }}
        >
          {coin.DayChange}
        </h3>
      </div>
    );
    return 1;
  });

  return (
    <div style={MarketTradeContainerStyle}>
      <div id="marketTradeTable" style={InsideContainerStyle}>
        <h1 style={{ marginLeft: "-580px" }}>Market Trade</h1>
        {CoinRow}
        <br />
        <h3 style={{ margin: "0 auto" }}>view more {">"}</h3>
      </div>
    </div>
  );
};

export default MarketTrade;
