import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Highmaps from "../Charts/Highmaps";
import LineChart from "../Charts/LineChart";

const Summary = ({ report, selectedCountryId }) => {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
    if (selectedCountryId) {
      import(
        `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
      ).then(res => {
        console.log("🚀 ~ file: index.js ~ line 13 ~ useEffect ~ res", res);

        setMapData(res);
      });
    }
  }, [selectedCountryId]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Highmaps mapData={mapData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(Summary);
