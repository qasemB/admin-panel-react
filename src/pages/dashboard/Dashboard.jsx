import React, { useEffect } from "react";
import { useHasPermission } from "../../hook/permissionsHook";
import Card from "./Card";
import Cards from "./Cards";
import ProductTable from "./ProductTable";
import SaleChart from "./SaleChart";

const Dashboard = () => {
  const hasCardsPermission = useHasPermission('read_order_statistics')
  const hasFewerProductsPermission = useHasPermission('read_fewer_products')
  const hasChartPermission = useHasPermission('read_orders_year')
  return (
    <div id="dashboard_section" className="dashboard_section main_section">
      {hasCardsPermission && <Cards/>}
      <div className="row">
        {hasFewerProductsPermission && <ProductTable/>}
        {hasChartPermission && <SaleChart/>}
      </div>
    </div>
  );
};

export default Dashboard;
