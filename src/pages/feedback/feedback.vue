<template>
    <Card title="反馈中心">
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent" @table-checkbox-event="checkboxEvent">
            <div mref="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
                    <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
                </div>
            </div>

            <div mref="bar">
                <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
            </div>
        </Table>
    </Card>
</template>

<script>
    import FeedBack from '@/http/feedback.js';
    export default {
        data() {
            return {
                options: {
                    url: 'http://127.0.0.1:8989/cms/feedback/getAllFeedBacks?tokenAuthorization=' + localStorage.token,
                    cols: [[

                        {
                            field: 'id',
                            title: 'ID',
                            fixed: 'left'
                        },

                        {
                            field: 'title',
                            title: '标题'
                        },

                        {
                            field: 'contact',
                            title: '联系方式'
                        },

                        {
                            field: 'companyName',
                            title: '公司名'
                        },

                        {
                            field: 'content',
                            title: '内容'
                        },

                        {
                            field: 'area',
                            title: '地区'
                        },

                        {
                            field: 'address',
                            title: '地址'
                        },

                        {
                            fixed: 'right',
                            title: '操作',
                            toolbarDom: 'bar',
                            width: 200
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
                        FeedBack.deleteFeedback(this, data.id).then((res) => {
                            if (res.success) {
                                obj.del();
                                this.$layer.msg('删除成功');
                                this.$layer.close(index);
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    this.$layer.alert('编辑行：<br>' + JSON.stringify(data));
                }
            },

            checkboxEvent(obj) {
                this.$layer.msg('checkbox变化行：' + obj.data.id);
            }
        }
    };
</script>
