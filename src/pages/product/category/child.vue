<template>
    <Card title="子类别">
        <div class="demoTable">
            <button class="layui-btn" @click="add()">添加</button>
        </div>
        </br>
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent" @table-checkbox-event="checkboxEvent">
            <div mref="bar">
                <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
            </div>
        </Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/demo1.json',
                    cols: [[

                        {
                            field: 'id',
                            title: 'ID',
                            fixed: 'left'
                        },

                        {
                            field: 'username',
                            title: '名称',
                            edit: 'text'
                        },

                        {
                            field: 'username',
                            title: '中文名称',
                            edit: 'text'
                        },

                        {
                            field: 'sex',
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
                    this.$layer.confirm('真的删除行么', (index) => {
                        obj.del();
                        this.$layer.close(index);
                    });
                } else if (obj.event === 'edit') {
                    this.$layer.alert('编辑行：<br>' + JSON.stringify(data));
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
