<template>
    <Card title="添加子类别" icon="layui-icon-fonts-code">
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">子类别名称：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="child.childName" name="childName" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">中文子类别名称：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="child.cnChildName" name="cnChildName" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" @click="saveChildType()">立即提交</button>
                            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                        </div>
                    </div>
    </Card>
</template>
<script>
    import Category from '@/http/category.js';
    export default {
        data: function () {
            return {
                child: {
                    childName: '',
                    cnChildName: ''
                }
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.$layui.form.on('submit(submitTest)', (data) => {
                    this.$layer.msg(JSON.stringify(data.parentName));
                    return false;
                });
            });
        },
        methods: {
            saveParentType() {
                Category.saveParentType(this, this.child).then(res => {
                    if (res.success) {
                        this.$layer.msg('保存成功');
                        this.$router.push('/product/category/child');
                    }
                });
            }
        }
    };
</script>
