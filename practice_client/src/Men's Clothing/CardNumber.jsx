import { ArrowDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function MensCard() {
  const img1 =
    "https://www.combonation.in/storage/5869/63981b089f0b1_Baby-Care.png";
  const [data, setdata] = useState([]);
  async function CardApi() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );
      setdata(response.data);
    } catch (e) {
      console.log(e, "error, data not responded");
    }
  }
  useEffect(() => {
    CardApi();
  }, []);

  return (
    <div className="flex max-w-[100%] flex-wrap gap-[16px]  justify-center items-center ">
      {data.map((e, i) => {
        return (
          <div key={i}>
            <Card data={e} />
          </div>
        );
      })}
    </div>
  );
}
export default MensCard;
