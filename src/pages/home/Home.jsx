// import React from "react";
import "./home.css";

// export default function Home() {
//   return <div className="home">Home</div>;
// }

import { userData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
}
