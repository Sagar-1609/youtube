const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler }; // this is done in promises

//we can do in another synatx

// const asyncHandler = (fn) => async (req,res,next)=>{
//  try {
//     await fn(req,res,next)
//  } catch (error) {
//     res.status(error.code || 500).Json({
//         success :false,
//         message:error.message
//     })
//  }
// }
