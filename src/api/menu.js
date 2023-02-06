import { api } from '@/api/index';

export const getDocumentsMenu = () =>
    api
        .get(`/menu`, {
            params: {
                searchByField: `menuType=DOCUMENTS`,
                include: 'menuItems',
            },
        })
        .then(({ data }) => data);
