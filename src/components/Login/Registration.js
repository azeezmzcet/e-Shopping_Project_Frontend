
import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Typography, Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { register } from "../../features/slices/authSlice";
import { useNavigate } from "react-router-dom"; 

const Registration = () => {
  const initialState = {
    name: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    
    dispatch(register(values));
    

    navigate("/");
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Name" size="lg" type="text" name="name" value={values.name} onChange={handleChange} />
          <Input label="Password" size="lg" type="password" name="password" value={values.password} onChange={handleChange} />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleSubmit}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Registration;
