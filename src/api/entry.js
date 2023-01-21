import { api } from '@/api/index';

export const getEntries = (rubric, { page, pageSize = 10 }) =>
    api
        .get(`/rubric/${rubric}/entries`, {
            params: {
                page,
                pageSize,
            },
        })
        .then(data => data);
