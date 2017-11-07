import * as request from 'request';
import * as filter from './filter';

export class DownloadListOfFiles {
  public static DownloadListOfFiles = (
    token: string,
    filterToUse: filter.Filter,
    rootUrl: string
  ): Promise<string[]> => {
    return new Promise((res, rej) => {
      if (token.length < 10) {
        rej('Not token has been provided');
      }

      const options = {
        method: 'POST',
        url: rootUrl + '/api/DownloadListOfFiles',
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
