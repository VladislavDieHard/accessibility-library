import { api } from '@/api/index';

export const getEntries = (rubric, { page, pageSize = 10, include }) =>
    api
        .get(`/rubric/${rubric}/entries`, {
            params: {
                page,
                pageSize,
                include,
            },
        })
        .then(data => data);
