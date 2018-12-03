import ajax from './api';
export default {
    deleteFeedback(vm, id) {
        return ajax(vm, {
            method: 'DELETE',
            url: '/cms/feedback/removeFeedBacks/' + id
        });
    }
};
