import { useEffect, useState } from "react";

const libraries = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  cosnt[(error, setError)] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("http://localhost:4000/libraries");
        if (!res.ok) throw new Error("An error has occur...");

        const json = res.json();

        setIsLoading(false);
        setData(json);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    getData();
  }, []);

  return <div>libraries</div>;
};

export default libraries;
