import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const LoginForm = ({ switchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            fullWidth
            id="login-email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="login-password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          className="mb-2"
        >
          Login
        </Button>
        <Button
          variant="text"
          fullWidth
          onClick={switchToRegister}
        >
          Don't have an account? Register
        </Button>
      </form>
    </div>
  );
};

const RegisterForm = ({ switchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Register Submitted:", { email, password });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            fullWidth
            id="register-email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="register-password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="confirm-password"
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          className="mb-2"
        >
          Register
        </Button>
        <Button
          variant="text"
          fullWidth
          onClick={switchToLogin}
        >
          Already have an account? Login
        </Button>
      </form>
    </div>
  );
};

const LoginRegisterPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const switchToRegister = () => setIsRegistering(true);
  const switchToLogin = () => setIsRegistering(false);

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100">
      {isRegistering ? (
        <RegisterForm switchToLogin={switchToLogin} />
      ) : (
        <LoginForm switchToRegister={switchToRegister} />
      )}
    </div>
  );
};

export default LoginRegisterPage;
