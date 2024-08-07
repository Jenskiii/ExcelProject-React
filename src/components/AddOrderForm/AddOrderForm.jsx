import { useState } from "react";
import useOrderData from "../../hooks/useOrderData";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import styles from "./AddOrderForm.module.css";

const AddOrderForm = () => {
  const { sheetData, addSheetData } = useOrderData();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // gets id of last child, then adds +1
    ID: Number(sheetData[sheetData.length - 1].ID) + 1,
    YEAR: "",
    Order_no: "",
    Shipyard: "",
    Country_1: "",
    NB_number: "",
    IMO_number: "",
    Vessel_name: "",
    Owner: "",
    Country_2: "",
    Type_of_vessel: "",
    Classification: "",
    Drawing1: "",
    Drawing2: "",
    Drawing3: "",
    Drawing4: "",
    Drawing5: "",
    Drawing6: "",
    Drawing7: "",
    Drawing8: "",
    Drawing9: "",
    Drawing10: "",
  });

  // form handeling
  function handleSubmit() {
    addSheetData(formData);
    navigate("./home");
  }

  //filter selected indexes for .map
  const indexes = [0, 8, 9];
  return (
    <form className={styles.form} onSubmit={() => handleSubmit()}>
      <div className={styles["form-grid"]}>
        {sheetData.length > 0 &&
          // make an input for each element
          Object.keys(sheetData[0])
            .filter((value, index) => !indexes.includes(index))
            .map((data, index) => {
              return (
                <FormGroup
                  key={index}
                  data={data}
                  formData={formData}
                  setFormData={setFormData}
                />
              );
            })}
      </div>

      {/* submit form */}
      <Button theme="submit" className={styles.button} type="submit">
        Add Order
      </Button>
    </form>
  );
};

const FormGroup = ({ data, formData, setFormData }) => {
  // remove white spaces from data
  let header = data.split("_").join(" ");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: /^\d+$/.test(value) ? Number(value) : value.toUpperCase(),
    }));
  };

  return (
    <div className={styles["form-group"]}>
      {data === "ID" ? (
        <p>{formData.ID}</p>
      ) : (
        <input
          type="text"
          id={data}
          name={data}
          onChange={(e) => handleInputChange(e)}
          value={formData.data}
        />
      )}
      <label htmlFor={data}>{header}</label>
    </div>
  );
};

export default AddOrderForm;
