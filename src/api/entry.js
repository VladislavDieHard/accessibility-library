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

export const getEntry = (slug, { include }) =>
    api
        .get(`/entry/${slug}`, {
            params: {
                include,
            },
        })
        .then(data => data);
