import { FaArrowRight } from "react-icons/fa6";

const HelpPage = () => {
  const searchHandler = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchText = form.search.value;
    console.log("searchText", searchText);
    form.reset();
  };
  return (
    <div>
      <div className="bg-[#DADBF0] h-80 flex justify-center items-center  ">
        <div className="text-center">
          <h2 className="text-6xl font-semibold text-slate-900 mb-5">
            How can we help?
          </h2>
          <div>
            <form onClick={searchHandler}>
              <input
                type="text"
                name="search"
                className="py-3 px-2 text-lg border border-slate-900 rounded w-[600px] "
                placeholder="Search here..."
              />
              <FaArrowRight type="submit" className="inline -ml-9 text-xl cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
      {/* api get section  */}
    </div>
  );
};

export default HelpPage;
