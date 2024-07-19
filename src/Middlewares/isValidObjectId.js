const { isValidObjectId } = require("mongoose");
const { BadRequestError } = require("../utils/error");

const  isValid = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new BadRequestError(`Malformed object id ${id} `);
  }
  next();
};



    
module.exports =  isValid
