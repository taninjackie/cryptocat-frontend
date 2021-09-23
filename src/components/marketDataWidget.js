import { MarketData } from "react-ts-tradingview-widgets";

const MarketDataWidget = () => {
  return (
    <div>
      <MarketData colorTheme="dark" width="100%" height={400}></MarketData>
    </div>
  );
};

export default MarketDataWidget;
