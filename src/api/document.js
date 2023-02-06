import { api } from '@/api/index';

export const getDocument = slug =>
    api
        .get(`/menu-item/${slug}`, {
            params: {
                include: 'document',
            },
        })
        .then(data => data.document);
