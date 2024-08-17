
const Navbar = () => {
    return (
      <div className="bg-slate-900 py-5 px-20 rounded">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-slate-200 text-lg">
              <span className="font-bold">Abstract</span> | Help Center
            </h4>
          </div>
          <div>
            <button className=" text-lg outline py-2 px-4 rounded text-slate-200">
              Submit a request
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;