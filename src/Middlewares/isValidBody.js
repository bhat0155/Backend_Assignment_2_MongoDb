const { isValidObjectId } = require("mongoose");
const { BadRequestError } = require("../utils/error");

const isValidBody = (req, res, next) => {
    const body = req.body; // Access the request body
  
    // Body validation (new logic)
    const requiredFields = ['username', 'scores', 'course']; // Replace with your required fields
    const missingFields = requiredFields.filter(field => !body.hasOwnProperty(field));
  
    if (missingFields.length > 0) {
      throw new BadRequestError(`Missing required fields: ${missingFields.join(', ')}`);
    }
  
    // Additional validation for specific fields (optional)
    if (body.username && typeof body.username !== 'string') {
      throw new BadRequestError(`username must be a string`);
    }

    if (body.course && typeof body.course !== 'string') {
        throw new BadRequestError(`course must be a string`);
      }

}

module.exports =  isValidBody;
