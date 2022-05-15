import React, { useState } from "react";

function IndexPage() {
  const [dtFrom, setDtFrom] = useState({ date: "", time: "" });
  const [dtTo, setDtTo] = useState({ date: "", time: "" });

  const commitHandler = () => {
    console.log("Date from: ", dtFrom.date);
    console.log("Time from: ", dtFrom.time);
    console.log("Date to: ", dtTo.date);
    console.log("Time to: ", dtTo.time);
    console.log("");


    const d_from = new Date(dtFrom.date);
    console.log(
      "Date_from",
      d_from.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );

    console.log("Time_from: ", dtFrom.time);
    const d_to = new Date(dtTo.date);
    
    console.log(
      "Date_to",
      d_to.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    console.log("Time_to: ", dtTo.time);
  };
  return (
    <div className="border m-3 p-3">
      <div className="flex space-x-5 mb-8">
        <div>
          <label className="block font-bold" htmlFor="dateForm">
            Date from:
          </label>
          <input
            className="border p-1"
            type="date"
            name="dateFrom"
            id="dateFrom"
            onChange={(e) => setDtFrom({ ...dtFrom, date: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="dateForm">
            Time from:
          </label>
          <input
            className="border p-1"
            type="time"
            name="timeFrom"
            id="timeFrom"
            onChange={(e) => setDtFrom({ ...dtFrom, time: e.target.value })}
          />
        </div>
      </div>
      <div className="flex space-x-5 mb-8">
        <div>
          <label className="block font-bold" htmlFor="dateForm">
            Date to:
          </label>
          <input
            className="border p-1"
            type="date"
            name="dateTo"
            id="dateTo"
            onChange={(e) => setDtTo({ ...dtTo, date: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="dateForm">
            Time to:
          </label>
          <input
            className="border p-1"
            type="time"
            name="timeTo"
            id="timeTo"
            onChange={(e) => setDtTo({ ...dtTo, time: e.target.value })}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="py-2 px-4 border shadow-sm" onClick={commitHandler}>
          Commit
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
