import ajax from './api';
export default {
    updateProfile(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 1,
                content: obj
            }
        });
    },
    updateCnProfile(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 1,
                cnContent: obj
            }
        });
    },
    updateCulture(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 2,
                content: obj
            }
        });
    },
    updateCnCulture(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 2,
                cnContent: obj
            }
        });
    },
    updateHonors(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 3,
                content: obj
            }
        });
    },
    updateCnHonors(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 3,
                cnContent: obj
            }
        });
    },
    updateTechnology(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 4,
                content: obj
            }
        });
    },
    updateCnTechnology(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/about/updateAbout',
            data: {
                id: id,
                type: 4,
                cnContent: obj
            }
        });
    }
};
