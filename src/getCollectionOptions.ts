import * as request from 'request';
import * as filter from './filter';

export class GetCollectionOptions {
  public static GetCollectionOptions = (
    token: string,
    filterToUse: filter.Filter,
    rootUrl: string
  ): Promise<filter.Filter> => {
    return new Promise((res, rej) => {
      if (token.length < 10) {
        rej('Not token has been provided');
      }

      const options = {
        method: 'POST',
        url: rootUrl + '/api/GetCollectionOptions',
        headers: {
          'content-type': 'application/json',
          ssoid: token,
        },
        body: filterToUse,
        json: true,
      };

      request(options, (error, response, body) => {
        if (error) {
          rej(error);
        }
        res(body);
      });
    });
  };
}
