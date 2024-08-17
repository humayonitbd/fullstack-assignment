import { TCard } from "../../Types/card.type";
import {NavLink} from "react-router-dom";

const Card = ({card}:{card:TCard}) => {
    return (
      <NavLink to={`/cards/${card?._id}`}>
        <div className="bg-[#F4F6F8] rounded py-4">
          <div>
            <h4 className="text-lg font-bold px-4">{card?.title}</h4>
            <hr className="border-t-2 text-slate-300 py-1" />
            <p className="px-4">{card?.description.slice(0, 150)}...</p>
          </div>
        </div>
      </NavLink>
    );
};

export default Card;