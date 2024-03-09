class ApiResponse {
  constructor(
    public status: number,
    public data: object | null,
    public message: string,
    public success: boolean = true
  ) {}
}

export default ApiResponse;
