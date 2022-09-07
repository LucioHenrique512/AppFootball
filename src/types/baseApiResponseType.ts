export interface BaseApiResponse<GenericResponseType> {
  get: string;
  parameters: any;
  errors: Array<any> | any;
  results: number;
  paging: Paging;
  response: GenericResponseType[];
}

interface Paging {
  current: number;
  total: number;
}
