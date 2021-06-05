import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import HightlightCart from "./HighlightCart";

const Highlight = ({ report }) => {
  const data = report[report.length - 1];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data !== undefined ? data.Confirmed : 0,
      type: "confirmed",
    },
    {
      title: "Số ca khỏi bệnh",
      count: data !== undefined ? data.Recovered : 0,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      count: data !== undefined ? data.Deaths : 0,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map(item => (
        <HightlightCart
          title={item.title}
          count={item.count}
          type={item.type}
          key={item.type}
        />
      ))}
    </Grid>
  );
};

export default React.memo(Highlight);
