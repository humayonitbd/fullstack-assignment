import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";

const HelpPage = () => {
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const url = searchText
          ? `http://localhost:5000/api/v1/cards?searchTerm=${searchText}`
          : "http://localhost:5000/api/v1/cards";
        const response = await fetch(url);
        const data = await response.json();
        setCards(data?.data || []);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [searchText]);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchText = form.search.value;
    setSearchText(searchText);
    form.reset();
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }
  return (
    <div>
      <div className="bg-[#DADBF0] h-80 flex justify-center items-center  ">
        <div className="text-center">
          <h2 className="md:text-6xl sm:text-3xl text-2xl font-semibold text-slate-900 mb-5">
            How can we help?
          </h2>
          <div>
            <form onClick={searchHandler}>
              <input
                type="text"
                name="search"
                className="py-3 px-2 text-lg border border-slate-900 rounded w-[250px] sm:w-[400px] md:w-[600px] "
                placeholder="Search here..."
              />
              <FaArrowRight
                type="submit"
                className="inline -ml-9 text-xl cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      {/* api get section  */}
      <div className="bg-white py-20  lg:w-9/12 mx-auto">
        {cards.length === 0 ? (
          <>
            <div className="text-center">
              <h2 className="font-semibold text-3xl">Sorry! Not Available!!</h2>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-5 md:gap-14">
              {cards?.slice(-6)?.map((card) => (
                <Card card={card} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HelpPage;
