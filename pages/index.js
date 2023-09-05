import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const fetchData = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random/` + input
    );
    const data = await response.json();
    setData(data.message);
  };
  useEffect(() => {
    fetchData();
  }, [input]);
  return (
    <div className="card">
      <Form setNumberOfDogs={setInput} />

      <DogList dogsList={data} />
    </div>
  );
}
