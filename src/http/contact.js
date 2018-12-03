import ajax from './api';
export default {
    updateContact(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/contact/updateContact',
            data: {
                id: id,
                content: obj
            }
        });
    },
    updateCnContact(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/contact/updateContact',
            data: {
                id: id,
                cnContent: obj
            }
        });
    }
};
