import { Container, Typography } from "@material-ui/core";
import sortBy from "lodash.sortby";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./api";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import "moment/locale/vi";
import "@fontsource/roboto";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then(res => {
      const afterSort = sortBy(res.data, "Country");
      setCountries(afterSort);

      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = e => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        country => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then(res => {
        // del last item in array
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h2" component="h2">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </Container>
  );
}

export default App;
