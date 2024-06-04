import { api } from '@/api/index';

export const getEntries = (rubric, { page, pageSize = 10, include, orderBy }) =>
    api
        .get(`/entry/`, {
            params: {
              rubric: rubric,
                page,
                pageSize,
                include,
                orderBy,
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
