import axios from "axios";
import { useEffect } from "react";

const Temp = () => {
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://catfact.ninja/fact");
      console.log(res.data.fact);
    })();
  }, []);
  return <></>;
};

export default Temp;
