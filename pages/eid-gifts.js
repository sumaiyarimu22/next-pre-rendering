import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("SOmthing went wrong");
  return res.json();
};

const EidGifts = () => {
  const { data, error, isValidating } = useSWR(
    "http://localhost:4000/Eid-gifts",
    fetcher
  );

  const isLoading = !data && !error && isValidating;

  if (isLoading) return <h2>Gift astese...</h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <div>
      <h2>Eid Mubarak</h2>
      <p>You have recived your gift</p>
      {data.map((gift) => (
        <div key={gift.id}>
          <h2>{gift.title}</h2>
          <p>{gift.price}</p>
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
};

export default EidGifts;
