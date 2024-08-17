
import CardModal from "../../../components/ui/CardModal";
import {NavLink} from "react-router-dom"
const Navbar = () => {
    const openModal =()=>{
      const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
    return (
      <div className="bg-slate-900 py-5 px-5 sm:px-20 rounded">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-slate-200 text-lg">
              <NavLink to="/">
                {" "}
                <span className="font-bold">Abstract</span> | Help Center
              </NavLink>
            </h4>
          </div>
          <div className="text-slate-200 flex justify-center items-center gap-5">
            <NavLink to="/">
              <p>Help Center</p>
            </NavLink>
            <NavLink to="/cards">
              <p>Cards</p>
            </NavLink>
          </div>
          <div>
            <button
              onClick={openModal}
              className=" text-base hover:bg-slate-200 hover:text-slate-900 hover:border-2 sm:text-lg bg-slate-900 border-2 py-1 sm:py-2 px-2 sm:px-4  rounded text-slate-200"
            >
              Add Card
            </button>
          </div>
        </div>
        <CardModal />
      </div>
    );
};

export default Navbar;