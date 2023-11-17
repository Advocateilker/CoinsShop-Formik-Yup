import { useEffect, useState } from "react";
import HomeView from "../views/HomeView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const HomeController = () => {
  const [queryParams, setParams] = useSearchParams();
  const [coins, setCoins] = useState([]);

  const page = +queryParams.get("page");

  const params = {
    limit: 15,
    offset: (page - 1) * 15,
  };

  useEffect(() => {
    axios
      .get("/assets", { params })

      .then((res) => setCoins([...coins, ...res.data.data]))
      .catch((err) => console.log(err));
  }, [queryParams]);
  return (
    <div>
      <HomeView coins={coins} />
    </div>
  );
};

export default HomeController;
