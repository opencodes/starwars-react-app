
export enum HttpMethods {
    'GET',
    'POST',
    'PUT',
    'DELETE'
  }

  export interface HttpResponse{
    success: boolean,
    message: string,
    statusCode: any,
    data: any,
  }