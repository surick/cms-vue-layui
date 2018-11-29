<template>
    <Card title="添加父类别" icon="layui-icon-fonts-code">
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">类别名称：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="parent.parentName" name="parentName" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">中文类别名称：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="parent.cnParentName" name="cnParentName" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" @click="saveParentType">立即提交</button>
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
                parent: {
                    parentName: '',
                    cnParentName: ''
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
                Category.saveParentType(this, this.parent).then(res => {
                    if (res.success) {
                        this.$layer.msg('保存成功');
                        this.$router.push('/product/category/parent');
                    }
                });
            }
        }
    };
</script>
