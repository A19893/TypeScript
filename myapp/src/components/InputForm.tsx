import { useState } from "react";
import { TextField } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import React from "react";
import { addTodo } from "@features/todoSlice";
// import React from "react";
const InputForm = () => {
  const dispatch=useAppDispatch();
   type formValuesT = {
    [key: string]: fieldValueT;
  };

  type fieldValueT = {
    value: string;
    error: boolean;
    errorMessage: string;
  };

  const [formValues, setFormValues] = useState<formValuesT>({
    Taskname: {
      value: "Enter Your Task",
      error: false,
      errorMessage: "Enter Your Task for Today",
    },
  });

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value: value,
        error: false,
        errorMessage: "",
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const {Taskname}=formValues
   dispatch(addTodo(Taskname.value))
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{
            marginBottom: "1rem",
          }}
          id="outlined-required"
          label="Todo Input"
          name="Taskname"
          error={formValues.Taskname.error}
          value={formValues.Taskname.value}
          helperText={formValues.Taskname.error ? formValues.name.errorMessage : ""}
          margin="none"
          onChange={handelOnChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputForm;
