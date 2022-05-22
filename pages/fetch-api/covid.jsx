import React, { useEffect, useState } from "react";

function Covid19() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries",
      requestOptions
    );
    const data = await response.json();
    setCovidData(data);
  };

  console.log("data Covid", covidData);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>flag</th>
            <th>country</th>
            <th>cases</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((item, index) => (
            <tr>
              <td>
                <img
                  src={item.countryInfo.flag}
                  alt=""
                  className="w-20 object-contain"
                />
              </td>
              <td>{item.country}</td>
              <td>{item.cases.toLocaleString("en-US")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Covid19;
