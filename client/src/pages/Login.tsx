import React from 'react';
import Logo from '../components/Logo';
import { useNavigate } from "react-router-dom";

function Login() {

  let navigate = useNavigate();

  return (
    <div className="bg-ec-green h-screen">
      <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-2">
          <div className="flex-col-span-1">
            <Logo />
          </div>
          <div className="">
            <button onClick={() => navigate('/casino')} type="button" className="text-xs md:text-lg p-4 text-white bg-ec-light-green w-100 rounded-lg focus:ring hover:bg-ec-yellow focus:ring-ec-light-green">Sign in with Google</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
