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
                    res.data.list.forEach(item => {
                    });
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
    }
};
