import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  formControl: {
    marin: `${theme.spacing(3)}px 0`,
  },
}));

const CountrySelector = ({ value, handleOnChange, countries }) => {
  const styles = useStyles();

  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.length > 0 ? (
          countries.map(country => {
            return (
              <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
                {country.Country}
              </option>
            );
          })
        ) : (
          <p></p>
        )}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
};

export default React.memo(CountrySelector);
