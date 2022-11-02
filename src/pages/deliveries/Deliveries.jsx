import React from "react";
import AddDelivery from "./AddDelivery";
import DeliveriesTable from "./DeliveriesTable";

const Deliveries = () => {
  return (
    <div id="manage_deliveries_section" className="manage_deliveries_section main_section">
      <h4 className="text-center my-3">مدیریت نحوه ارسال</h4>
        <DeliveriesTable/>
    </div>
  );
};

export default Deliveries;
