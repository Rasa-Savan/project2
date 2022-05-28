import React from "react";
import ButtonAppBar from "./appbar";
import BarChart from "./chart/bar-chart";
import Donough from "./chart/donough";
import BasicTable from "./table/basic-table";
import DataGridDemo from "./table/grid-table";

function Indexpage() {
  return (
    <div>
      <ButtonAppBar />
      <DataGridDemo />
      <BasicTable />
      <div className="flex w-full border">
        <Donough />
        <BarChart />
      </div>
    </div>
  );
}

export default Indexpage;
