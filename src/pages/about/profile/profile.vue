<template>
    <Card title="公司资料">
        <div class="layui-btn-container">
            <button class="layui-btn" @click="updateProfile">保存英文</button>
            <button class="layui-btn" @click="updateCnProfile">保存中文</button>
        </div>

        <Editor ref="editor" @ready="ueditorReady"></Editor>
    </Card>
</template>

<script>
    import About from '@/http/about.js';
    export default {
        data() {
            return {
                instance: null,
                isZH: true
            };
        },
        methods: {
            ueditorReady(instance) {
                this.instance = instance;
            },

            switchLang() {
                this.isZH = !this.isZH;
                this.$refs.editor.switchLang(this.isZH ? 'zh-cn' : 'en');
            },

            getAllHtml() {
                let html = this.instance.getAllHtml();
                alert(html);
            },

            getContent() {
                let content = this.instance.getContent();
                alert(content);
            },

            updateProfile() {
                About.updateProfile(this, 1, this.instance.getContent()).then(res => {
                    if (res.success) {
                        this.$layer.msg('修改成功');
                        this.$router.push('/about/profile');
                    }
                });
            },

            updateCnProfile() {
                About.updateCnProfile(this, 1, this.instance.getContent()).then(res => {
                    if (res.success) {
                        this.$layer.msg('修改成功');
                        this.$router.push('/about/profile');
                    }
                });
            },

            setContent() {
                this.instance.setContent('欢迎使用layui和ueditor');
            },

            addContent() {
                this.instance.setContent('欢迎使用layui和ueditor', true);
            },

            setDisabled() {
                this.instance.setDisabled('fullscreen');
            },

            setEnabled() {
                this.instance.setEnabled();
            },

            getText() {
                // 当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
                let range = this.instance.selection.getRange();
                range.select();
                let txt = this.instance.selection.getText();
                this.$layer.alert(txt);
            },

            getContentTxt() {
                this.$layer.alert(this.instance.getContentTxt());
            },

            hasContent() {
                this.$layer.msg(this.instance.hasContents());
            },

            setFocus() {
                this.instance.focus();
            },

            isFocus() {
                this.$layer.msg(String(this.instance.isFocus()));
                window.UE.dom.domUtils.preventDefault(event);
            },

            setBlur() {
                this.instance.blur();
                window.UE.dom.domUtils.preventDefault(event);
            },

            setHide() {
                this.instance.setHide();
            },

            setShow() {
                this.instance.setShow();
            },

            setHeight() {
                this.instance.setHeight(500);
            },

            getLocalData() {
                alert(this.instance.execCommand('getlocaldata'));
            },

            clearLocalData() {
                this.instance.execCommand('clearlocaldata');
            },

            getPlainTxt() {
                alert(this.instance.getPlainTxt());
            },

            insertHtml() {
                this.instance.execCommand('insertHtml', '<p>插入指定html内容</p>');
            },

            showDoc(name, target) {
                this.$layer.open({
                    title: name,
                    type: 2,
                    area: ['100%', '100%'],
                    content: `/static/doc/editor/${target}.html`
                });
            }
        }
    };
</script>
