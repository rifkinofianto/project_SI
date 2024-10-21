import { useState, useEffect } from "react";
import Opening from "../Components/HomeComponent/Opening";
import Services from "../Components/HomeComponent/Services";
import descriptionsData from "../json/Data.json";
import formatRupiah from "../libs/Rupiah";
import Operation from "../Components/HomeComponent/Operation";

const HomePage = () => {
  const [descriptions, setDescriptions] = useState([]);
  const [services, setServices] = useState({ title: "", items: [] });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDescriptions(descriptionsData.descriptions);
    setServices(descriptionsData.services);
  }, []);

  const toggleOpen = () => setOpen(!open);

  const renderDescription = (description) => (
    <p
      key={description.id}
      className={`md:text-lg text-md leading-relaxed text-justify ${
        description.isBold ? "font-bold" : ""
      } ${!open ? "block" : "hidden"}`}
    >
      {description.text}
    </p>
  );

  

  return (
    <>
      <Opening
        toggleOpen={toggleOpen}
        descriptions={descriptions}
        renderDescription={renderDescription}
        open={open}
      />
      <h2 className="md:text-3xl text-2xl font-bold text-center my-8">
        Layanan <span className="text-color-accent">Kami</span>
      </h2>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Services services={services.items} formatRupiah={formatRupiah}/>
      </div>
      <Operation />
    </>
  );
};

export default HomePage;
