import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`/r`, {
        headers: {
            // Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',

        }
    })

}