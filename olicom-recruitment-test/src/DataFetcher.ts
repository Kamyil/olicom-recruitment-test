export class DataFetcher {
  public static fetch<ExpectedDataModel>(
    url: string
  ): Promise<ExpectedDataModel> {
    return fetch(url)
      .then((response) => response.json())
      .then((parsedResponse) => parsedResponse);
  }
}
