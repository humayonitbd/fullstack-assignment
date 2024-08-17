import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TCard } from "../../Types/card.type";

const CardDetails = () => {
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState<TCard | null>(null);

  useEffect(() => {
    fetch(`https://backend-phi-mauve-24.vercel.app/api/v1/cards/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleCard(data?.data));
  }, []);

  if (!singleCard) {
    return <p>Loading...</p>;
  }
  return (
    <div className="py-16 bg-[#F4F6F8]">
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3"> {singleCard?.title}</h3>
        <p>{singleCard.description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
