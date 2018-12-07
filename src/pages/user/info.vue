<template>
    <Card title="个人中心" icon="layui-icon-fonts-code">
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">用户名：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="info[0].name" name="name" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">手机号：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="info[0].mobilePhone" name="mobilePhone" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">邮箱：</label>
                            <div class="layui-input-block">
                                <input type="email" v-model="info[0].email" name="email" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">性别：</label>
                            <div class="layui-input-block">
                                <input type="text" v-model="info[0].sex === 1 ? '男' : '女'" name="sex" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" @click="updateInfo()">更改</button>
                            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                        </div>
                    </div>
    </Card>
</template>
<script>
    import User from '@/http/user.js';
    export default {
        data: function () {
            return {
                info: [
                    {
                        name: '',
                        mobilePhone: '',
                        email: '',
                        sex: ''
                    }
                ]
            };
        },
        mounted() {
            this.$nextTick(() => {
                User.getUserByName(this, localStorage.name).then(res => {
                    if (res.success) {
                        this.info = res.data;
                    }
                });
            });
        },
        methods: {
            updateInfo() {
                User.updateUser(this, this.info).then(res => {
                    if (res.success) {
                        this.$layer.msg('更新成功');
                        this.$router.push('/info');
                    }
                });
            }
        }
    };
</script>
