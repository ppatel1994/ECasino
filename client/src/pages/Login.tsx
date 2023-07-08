import React from 'react';
import Logo from '../components/Logo';

function Login() {
  return (
    <div className="bg-ec-green h-screen">
      <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <div className="flex">
          <Logo />
          <button type="button" className="ml-16 text-sm md:text-lg text-white bg-ec-light-green px-4 rounded-lg focus:ring hover:bg-ec-yellow focus:ring-ec-light-green">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
