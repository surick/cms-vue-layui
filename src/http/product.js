import ajax from './api';
export default {
    saveProduct(vm, obj) {
        return ajax(vm, {
            method: 'POST',
            url: '/cms/products/saveProducts',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            data: {
                childTypeId: obj.type,
                name: obj.name,
                cnName: obj.cnName,
                content: obj.content,
                cnContent: obj.cnContent,
                imgUrl: obj.url
            }
        });
    },
    upload(vm, obj) {
        return ajax(vm, {
            method: 'POST',
            url: '/cms/products/imgUpload',
            data: obj
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
