import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // let navigate = useNavigate();

  const fakeData = async (email, password) => {
    try {
      setLoading(true);
      let resData = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email: email, password: password }
      );
      if (resData?.status === 201) {
        setLoading(false);
        navigate("/Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateform = async (e) => {
    e.preventDefault();

    // let errorMessage = "";

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }
    // setError(errorMessage);

    if (password.length <= 4) {
      setError("Password must be at least 3 characters");
      return;
    }

    // if (!errorMessage) {
    //   alert("Form submitted successfully!"); // Replace with actual submission logic
    // }

    // Password validation

    // If everything is valid
    // setError(""); // Clear errors
    // alert("Form submitted successfully!");
    // Replace with actual submission logic
    fakeData(email, password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e1e8ea",
      }}
    >
      <Card style={{ padding: "25px" }}>
        <form onSubmit={validateform}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <label style={{ fontWeight: "bold", fontSize: "24px" }}>
              Email:
            </label>

            <TextField
              size="small"
              label="Email"
              variant="outlined"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value)
                validateform(e)

              }}
            />

            <br />
            <label style={{ fontWeight: "bold", fontSize: "24px" }}>
              Password:
            </label>
            <TextField
              size="small"
              label="Password"
              variant="outlined"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value)
                validateform(e)
              }}
            />

            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button
              type="submit"
              variant="contained"
              onClick={(e) => validateform(e)}
            >
              {!loading ? "Login" : "loading"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
