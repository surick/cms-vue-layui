import ajax from './api';
export default {
    saveParentType(vm, obj) {
        return ajax(vm, {
            method: 'POST',
            url: '/cms/productType/saveParentType',
            data: {
                parentName: obj.parentName,
                cnParentName: obj.cnParentName
            }
        });
    },
    getAllParentTypes(vm, obj) {
        return new Promise((resolve, reject) => {
            ajax(vm, {
                method: 'GET',
                url: '/cms/productType/getAllParentTypes'
            }).then(res => {
                if (res.success) {
                    resolve(res);
                }
            });
        });
    },
    updateParentType(vm, id, obj) {
        return ajax(vm, {
            method: 'PUT',
            url: '/cms/productType/updateParentType',
            data: {
                id: id,
                parentName: obj.parentName,
                cnParentName: obj.cnParentName
            }
        });
    },
    deleteParentType(vm, id) {
        return ajax(vm, {
            method: 'DELETE',
            url: '/cms/productType/removeParentType/' + id
        });
    },
    saveChildType(vm, obj) {
        return ajax(vm, {
            method: 'POST',
            url: '/cms/productType/saveChildType',
            data: {
                parentId: obj.parent,
                childName: obj.childName,
                cnChildName: obj.cnChildName
            }
        });
    },
    updateChildType(vm, id, obj) {
        return ajax(vm, {
            method: 'POST',
            url: '/cms/productType/updateChildType',
            data: {
                id: id,
                childName: obj.childName,
                cnChildName: obj.cnChildName
            }
        });
    },
    deleteChildType(vm, id) {
        return ajax(vm, {
            method: 'DELETE',
            url: '/cms/productType/removeChildType/' + id
        });
    },
    getAllChildTypes(vm, obj) {
        return new Promise((resolve, reject) => {
            ajax(vm, {
                method: 'GET',
                url: '/cms/productType/getAllChildTypes'
            }).then(res => {
                if (res.success) {
                    resolve(res);
                }
            });
        });
    }
};
