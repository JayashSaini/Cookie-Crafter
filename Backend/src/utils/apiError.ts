class ApiError extends Error {
  constructor(
    public statusCode: number,
    public error: any,
    public success: boolean = false,
    message: string = ""
  ) {
    super(message);
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  get stack(): string | undefined {
    return super.stack;
  }
}

export default ApiError;
