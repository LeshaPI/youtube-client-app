import ISerarchItem from './search-item.model';

export default interface ISearchResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: ISerarchItem[];
}
