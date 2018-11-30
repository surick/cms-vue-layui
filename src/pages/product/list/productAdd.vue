<template>
    <Card title="添加产品" icon="layui-icon-fonts-code">
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">子类别：</label>
                            <div class="layui-input-block">
                                 <Select :source="list" v-model="product.type" name="type" @select-change="selectChange"></Select>
                            </div>
                        </div>
                    </div>
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">产品名称：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="product.name" name="name" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">产品中文名称：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="product.cnName" name="cnName" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">产品图片：</label>
                            <div class="layui-input-block">
                                <input ref="img" type="file" v-on:change="upload" name="img" id="img" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">介绍：</label>
                            <div class="layui-input-block">
                                <textarea name="content" v-model="product.content" placeholder="" class="layui-textarea"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">中文介绍：</label>
                            <div class="layui-input-block">
                                <textarea name="cnContent" v-model="product.cnContent" placeholder="" class="layui-textarea"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" @click="saveProduct()">立即提交</button>
                            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                        </div>
                    </div>
    </Card>
</template>
<script>
    import Category from '@/http/category.js';
    import Product from '@/http/product.js';
    export default {
        data: function () {
            return {
                product: {
                    name: '',
                    cnName: '',
                    type: '',
                    content: '',
                    cnContent: '',
                    url: ''
                },
                list: [
                    {
                        name: '',
                        value: ''
                    }
                ]
            };
        },
        mounted() {
            this.$nextTick(() => {
                Category.getAllChildTypes(this, this.list).then(res => {
                    if (res.success) {
                        this.list = res.data;
                    }
                });
            });
        },
        methods: {
            saveProduct() {
                Product.saveProduct(this, this.product).then(res => {
                    if (res.success) {
                        this.$layer.msg('保存成功');
                        this.$router.push('/product/list');
                    }
                });
            },
            selectChange(val) {
                this.product.type = val.value;
            },
            upload: function(e) {
                e.preventDefault();
                var files = this.$refs.img.files;
                var data = new FormData();
                // for single file
                data.append('img', files[0]);
                // Or for multiple files you can also do
                //  _.each(files, function(v, k){
                //    data.append('avatars['+k+']', v);
                // });

                Product.upload(this, data).then(res => {
                    if (res.success) {
                        this.product.url = res.data;
                        console.log('sss' + res.data);
                    } else {
                        this.$layer.msg('上传图片失败');
                    }
                });
            }
        }
    };
</script>
