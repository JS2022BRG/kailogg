import "./Kailogg.css";
import React, { useState } from "react";

const initialValues = {
  nummer: "",
  dato: "",
  imonr: "",
  navn: "",
  produkt: "",
  slangenr: "",
  kundetype: "",
  smo: "",
  miloff: "",
  div: "",
  sign: "",
};

export default function Kailogg() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // const reset = () => {
  //   setNummer("");
  //   setDato("");
  //   setImonr("");
  //   setNavn("");
  //   setProdukt("");
  //   setSlangenr("");
  //   setKundetype("");
  //   setSmo("");
  //   setMiloff("");
  //   setDiv("");
  //   setSign("");
  // };

  return (
    <form>
      <input
        value={values.nummer}
        onChange={handleChange}
        name="nummer"
        label="Nummer"
      />

      <input
        value={values.imonr}
        onChange={handleChange}
        name="imonr"
        label="IMO NR"
      />
      <input
        value={values.navn}
        onChange={handleChange}
        name="navn"
        label="Båtnavn"
      />
      <input
        value={values.produkt}
        onChange={handleChange}
        name="produkt"
        label="Produkt"
      />
      <input
        value={values.slangenr}
        onChange={handleChange}
        name="slangenr"
        label="Slange nummer"
      />
      <input
        value={values.kundetype}
        onChange={handleChange}
        name="kundetype"
        label="Kundetype"
      />
      <input
        value={values.smo}
        onChange={handleChange}
        name="smo"
        label="Smørolje"
      />
      <input
        value={values.miloff}
        onChange={handleChange}
        name="miloff"
        label="Militær/offshore"
      />
      <input
        value={values.div}
        onChange={handleChange}
        name="div"
        label="Diverse"
      />
      <input
        value={values.sign}
        onChange={handleChange}
        name="sign"
        label="Signatur"
      />
      <input
        type="date"
        value={dato}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
