import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: '/api/account/page',
        method: 'get',
        params: query
    });
};
