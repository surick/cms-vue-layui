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
    updateProduct(vm, id, obj) {
        return ajax(vm, {
            method: 'POST',
            url: '/cms/products/updateProducts',
            data: {
                id: id,
                name: obj.name,
                cnName: obj.cnName,
                content: obj.content,
                cnContent: obj.cnContent
            }
        });
    },
    deleteProduct(vm, id) {
        return ajax(vm, {
            method: 'DELETE',
            url: '/cms/products/removeProducts/' + id
        });
    }
};
