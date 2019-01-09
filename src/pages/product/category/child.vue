<template>
    <Card title="子类别">
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
</template>

<script>
    import Category from '@/http/category.js';
    export default {
        data() {
            return {
                options: {
                    url: 'http://192.168.0.110:8989/cms/productType/getAllChildTypes?tokenAuthorization=' + localStorage.token,
                    cols: [[

                        {
                            field: 'id',
                            title: 'ID',
                            fixed: 'left'
                        },

                        {
                            field: 'childName',
                            title: '名称',
                            edit: 'text'
                        },

                        {
                            field: 'cnChildName',
                            title: '中文名称',
                            edit: 'text'
                        },

                        {
                            field: 'cnParentName',
                            title: '父类别',
                            edit: 'text',
                            sort: true
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
                        Category.deleteChildType(this, data.id).then((res) => {
                            if (res.success) {
                                obj.del();
                                this.$layer.msg('删除成功');
                                this.$layer.close(index);
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    Category.updateChildType(this, data.id, data).then(res => {
                        if (res.success) {
                            this.$layer.msg('修改成功');
                            this.$router.push('/product/category/child');
                        }
                    });
                }
            },

            checkboxEvent(obj) {
                this.$layer.msg('checkbox变化行：' + obj.data.id);
            },

            add() {
                this.$router.push('/product/category/childAdd');
            }
        }
    };
</script>
