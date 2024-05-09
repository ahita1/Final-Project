import { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const [type, setType] = useState('password');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-blue-400"> {/* Changed background color */}
            <div className="bg-white p-12 rounded-md shadow-lg"> {/* Changed background color */}
                <h3 className="text-2xl font-bold text-center text-green-600 mb-4">Login</h3>
                <form>
                    <div className="mb-6">
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <span className="fa fa-user mr-2 text-green-600"></span>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={togglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-green-600">Forgot password?</a>
                        <Button variant="contained" color="primary" size="large">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
