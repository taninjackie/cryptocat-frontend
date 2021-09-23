import TradingViewWidget, { Themes } from "react-tradingview-widget";

const TradingViewStyle = {
  width: "100vw",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  paddingTop: "100px",
};

const TradingView = () => {
  return (
    <div style={TradingViewStyle}>
      <TradingViewWidget
        width={1300}
        theme={Themes.DARK}
        symbol="BINANCE:BTCUSD"
      />
    </div>
  );
};

export default TradingView;
