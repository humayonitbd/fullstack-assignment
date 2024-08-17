import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CardService } from "./card.service";


const createCard = catchAsync(async (req, res) => {
  const result = await CardService.createCardServic(req.body);

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found!",
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Card is Added successfully!!",
    data: result,
  });
});

const getAllCards = catchAsync(async (req, res) => {
  const result = await CardService.getAllCardService(
    req.query
  );

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found!",
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Card are retrieved successfully!",
    meta: result.meta,
    data: result.result,
  });
});
const getSingleCards = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CardService.getSingleCardService(id);

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found!",
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Single Card are  successfully!",
    data: result,
  });
});


export const CardController = {
  createCard,
  getAllCards,
  getSingleCards,
};
