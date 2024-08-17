import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import { AppError } from "../../error/AppError";
import mongoose from "mongoose";
import { TCard } from "./card.interface";
import { Card } from "./card.model";


const createCardServic = async (payload: TCard) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const isExists = await Card.findOne({title:payload.title}).session(
      session
    );
    if (isExists) {
      throw new AppError(404, "Card is Already Exist!!");
    }

    

    const result = await Card.create([payload], { session });
    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, error.message);
  }
};

const getAllCardService = async (query: Record<string, unknown>) => {
  const CardsQuery = new QueryBuilder(Card.find(), query)
    .search(["title", "description"])
    .filter()
    .sort()
    .fields();

  const result = await CardsQuery.modelQuery;
  const meta = await CardsQuery.countTotal();
  return { meta, result };
};

const getSingleCardService = async(payload:string)=>{
    const isExists = await Card.findById(payload);
    if(!isExists){
        throw new AppError(400, "Card is not found!!")
    }

    const result = await Card.findOne({_id:payload});
    return result;

}

export const CardService = {
  createCardServic,
  getAllCardService,
  getSingleCardService,
};
