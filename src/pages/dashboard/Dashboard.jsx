import React, { useEffect } from "react";
import Card from "./Card";
import ProductTable from "./ProductTable";
import SaleChart from "./SaleChart";

const Dashboard = () => {
  return (
    <div id="dashboard_section" className="dashboard_section main_section">
      <div className="row">
        <Card
          currentValue={7}
          title={"سبد خرید امروز"}
          desc={"سبد های خرید مانده امروز"}
          icon={"fas fa-shopping-basket"}
          lastWeekValue={13}
          lastMonthValue={18}
        />

        <Card
          currentValue={5}
          title={"سفارشات مانده امروز"}
          desc={" سفارشات معلق و فاقد پرداختی"}
          icon={"fas fa-dolly"}
          lastWeekValue={9}
          lastMonthValue={16}
        />

        <Card
          currentValue={54}
          title={"سفارشات امروز"}
          desc={"سفارشات کامل و دارای پرداختی"}
          icon={"fas fa-luggage-cart"}
          lastWeekValue={263}
          lastMonthValue={1038}
        />

        <Card
          currentValue={"1,500,000"}
          title={"درآمد امروز"}
          desc={"جمع مبالغ پرداختی (تومان)"}
          icon={"fas fa-money-check-alt"}
          lastWeekValue={"6,380,000"}
          lastMonthValue={"24,380,000"}
        />
      </div>

      <div className="row">
          <ProductTable />
          <SaleChart/>
      </div>
    </div>
  );
};

export default Dashboard;
