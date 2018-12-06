<template>
    <Card title="修改密码" icon="layui-icon-fonts-code">
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">旧密码：</label>
                            <div class="layui-input-block">
                                <input type="password" v-model="password.oldPassword" name="oldPassword" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">新密码：</label>
                            <div class="layui-input-block">
                                <input type="password" v-model="password.newPassword" name="newPassword" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="ayui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">重复新密码：</label>
                            <div class="layui-input-block">
                                <input type="password" v-model="password.repeat" name="repeat" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" @click="updatePassword()">立即提交</button>
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
                password: {
                    oldPassword: '',
                    newPassword: '',
                    repeat: ''
                }
            };
        },
        methods: {
            updatePassword() {
                if (this.password.newPassword !== this.password.repeat) {
                    this.$layer.msg('两次输入密码不相同！');
                } else {
                    User.updatePassword(this, this.password).then(res => {
                        if (res.success) {
                            this.$layer.msg('更新成功');
                            this.$router.push('/');
                        }
                    });
                }
            }
        }
    };
</script>
