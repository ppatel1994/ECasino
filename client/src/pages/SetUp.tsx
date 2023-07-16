import React, {useState} from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import HeaderBtns from '../components/HeaderBtns';
import DrawForm from '../components/DrawForm';
import RouletteForm from '../components/RouletteForm';

function SetUp() {
  const [form, setForm] = useState(0);
  return (
    <div className="bg-ec-green h-screen w-full">
      <Header />
      <Banner />
      <Footer />
      <HeaderBtns form={form} setForm={setForm} />
      {form === 0 && <DrawForm />}
      {form === 1 && <RouletteForm />}
    </div>
  );
}

export default SetUp;
