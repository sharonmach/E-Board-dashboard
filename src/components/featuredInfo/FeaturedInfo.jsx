import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Users</span>
        <div className="featuredNumberContainer">
          <span className="featuredNumber">15</span>
          {/* <span className="featuredNumberRate">
            +2 <ArrowUpward className="featuredIcon negative" />
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Future Meetings</span>
        <div className="featuredNumberContainer">
          <span className="featuredNumber">5</span>
          {/* <span className="featuredNumberRate">
            -2 <ArrowDownward className="featuredIcon negative" />
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Past Meetings</span>
        <div className="featuredNumberContainer">
          <span className="featuredNumber">25</span>
          {/* <span className="featurefeaturedNumberRatedMoneyRate">
            +2 <ArrowUpward className="featuredIcon" />
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
    </div>
  );
}
