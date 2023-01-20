import { api } from '@/api/index';

export const getEntries = () =>
    api
        .get('/entry', {
            params: {
                page: '1',
                pageSize: '20',
            },
        })
        .then(data => data);
