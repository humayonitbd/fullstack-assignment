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
  const BookingProductQuery = new QueryBuilder(Card.find(), query)
    .search(["title", "description"])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await BookingProductQuery.modelQuery;
  const meta = await BookingProductQuery.countTotal();
  return { meta, result };
};

export const CardService = {
  createCardServic,
  getAllCardService,
};
