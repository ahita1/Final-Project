import  { useState } from 'react';

const Login = () => {
    const [type, setType] = useState('password');
    const [eyeIcon, setEyeIcon] = useState('fa-eye');

    const hideShowPassword = () => {
        setType(type === 'password' ? 'text' : 'password');
        setEyeIcon(eyeIcon === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-green-100">
            <div className="bg-gray-100 p-8 rounded-md shadow-lg">
                <h3 className="text-2xl font-bold text-center text-green-600 mb-4">Login</h3>
                <form>
                    <div className="mb-4">
                        <div className="flex items-center border-b border-green-600 py-2">
                            <span className="fa fa-user mr-2 text-green-600"></span>
                            <input type="text" placeholder="Username" className="w-full focus:outline-none text-green-600" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center border-b border-green-600 py-2">
                            <span className="fa fa-lock mr-2 text-green-600"></span>
                            <input type={type} placeholder="Password" className="w-full focus:outline-none text-green-600" />
                            <span onClick={hideShowPassword} className={`fa ${eyeIcon} cursor-pointer text-green-600`}></span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-green-600">Forgot password?</a>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Sign in</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
