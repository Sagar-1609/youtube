class ApiError extends Error {
  constructor(
    statuscode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    // this.success = false;
    (this.message = message), (this.errors = errors);
  }
}
export { ApiError };
