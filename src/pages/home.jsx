import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const Home = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return axios.get("https://catfact.ninja/fact").then((res) => {
        return res.data;
      });
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>
        home page with data: <p>{data?.fact}</p>
      </h1>
      <button onClick={refetch}>Refetch data</button>
    </div>
  );
};
