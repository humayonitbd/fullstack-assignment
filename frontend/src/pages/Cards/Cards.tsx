import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
const Cards = () => {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://backend-phi-mauve-24.vercel.app/api/v1/cards"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllCards(data?.data || []);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }
  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <div className="bg-white py-20  lg:w-9/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-5 md:gap-14">
          {allCards?.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
