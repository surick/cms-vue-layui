<template>
<div>
    <Card title="产品列表" >
        <div class="demoTable">
            <button class="layui-btn" @click="add()">添加</button>
        </div>
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent" @table-checkbox-event="checkboxEvent">
            <div mref="bar">
                <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
            </div>
        </Table>
    </Card>
</div>
</template>

<script>
    import Product from '@/http/product.js';
    export default {
        data() {
            return {
                options: {
                    url: 'http://127.0.0.1:8989/cms/products/getAllProducts?tokenAuthorization=' + localStorage.token,
                    cols: [[

                        {
                            field: 'id',
                            title: 'ID',
                            fixed: 'left'
                        },

                        {
                            field: 'name',
                            title: '产品名',
                            edit: 'text'
                        },

                        {
                            field: 'cnName',
                            title: '中文产品名',
                            edit: 'text'
                        },

                        {
                            field: 'content',
                            title: '介绍',
                            edit: 'text'
                        },

                        {
                            field: 'cnContent',
                            title: '中文介绍',
                            edit: 'text'
                        },

                        {
                            field: 'childTypeId',
                            title: '类别',
                            sort: true
                        },

                        {
                            field: 'imgUrl',
                            title: '产品图',
                            templet: (res) => {
                                return `<img src="http://127.0.0.1/${res.imgUrl}" />`;
                            }
                        },

                        {
                            fixed: 'right',
                            title: '操作',
                            toolbarDom: 'bar'
                        }
                    ]],
                    page: true
                }
            };
        },

        methods: {
            toolbarEvent(obj) {
                let checkStatus = this.$layui.table.checkStatus(obj.config.id);
                switch (obj.event) {
                case 'getCheckData':
                    this.$layer.alert(JSON.stringify(checkStatus.data));
                    break;
                case 'getCheckLength':
                    this.$layer.msg('选中了：' + checkStatus.data.length + ' 个');
                    break;
                case 'isAll':
                    this.$layer.msg(checkStatus.isAll ? '全选' : '未全选');
                    break;
                };
            },

            barEvent(obj) {
                let data = obj.data;
                if (obj.event === 'detail') {
                    this.$layer.msg('ID：' + data.id + ' 的查看操作');
                } else if (obj.event === 'del') {
                    this.$layer.confirm('真的删除么', (index) => {
                        Product.deleteProduct(this, data.id).then((res) => {
                            if (res.success) {
                                obj.del();
                                this.$layer.msg('删除成功');
                                this.$layer.close(index);
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    Product.updateProduct(this, data.id, data).then(res => {
                        if (res.success) {
                            this.$layer.msg('修改成功');
                            this.$router.push('/product/list');
                        }
                    });
                }
            },

            checkboxEvent(obj) {
                this.$layer.msg('checkbox变化行：' + obj.data.id);
            },

            add() {
                this.$router.push('/product/list/productAdd');
                // this.$layer.open({ title: '添加父类别', type: 2, content: '/login', area: ['80%', '50%'] });
            }
        }
    };
</script>

