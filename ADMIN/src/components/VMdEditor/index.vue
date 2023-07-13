<template>
    <section style="width: 100%;height: 100%">
        <v-md-editor
                v-model="content"
                :height="height + 'px'"
                :mode="mode"
                :placeholder="placeholder"
                :left-toolbar=toolbar.leftToolbar
                :right-toolbar="toolbar.rightToolbar"
                :disabled-menus="toolbar.disabledMenus"
                @change="handleChange"
                @image-click="handleClickImage"
                @upload-image="handleUploadImage"
                @copy-code-success="handleCopyCodeSuccess"
        ></v-md-editor>
    </section>
</template>

<script setup>
    import {watchEffect, ref} from "vue";
    import toolbar from './toolbar'

    const props = defineProps(
        {
            height: {
                type: Number,
                default() {
                    return 400
                }
            },
            placeholder: {
                type: String,
                default() {
                    return '请输入内容'
                }
            },
            mode: {
                type: String,
                default() {
                    //可选值：edit(纯编辑模式) editable(编辑与预览模式) preview(纯预览模式)。
                    return 'editable'
                }
            },
            mdContent: {
                type: String,
                default() {
                    return ''
                }
            }
        }
    )
    const emit = defineEmits(["update:value"])

    const content = ref('')

    watchEffect(() => {
        content.value = props.mdContent
    })

    const handleCopyCodeSuccess = (code) => {
        let oInput = document.createElement('input')
        oInput.value = code
        document.body.appendChild(oInput)
        oInput.select()
        document.execCommand("Copy");
        oInput.remove()
    }

    const handleUploadImage = (event, insertImage, files) => {
        // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
        var self = this
        let file = files[0]
        let param = new FormData() // 创建form对象
        param.append('file', file, file.name) // 通过append向form对象添加数据
        // let config = {
        //   headers: {'Content-Type': 'multipart/form-data','authorization':util.cookies.get('token')}
        // }
        // 添加请求头
        // axios.post( `${process.env.VUE_APP_API}/api/private/upload`, param, config)
        //   .then(response => {
        //     if (response.data.meta.status === 200) {
        //       insertImage({
        //         url:response.data.data.url,
        //         desc: file.name,
        //         // width: 'auto',
        //         // height: 'auto',
        //       });
        //     }
        //   })
    }

    const handleClickImage = (images, currentIndex) => {
        window.open(images[currentIndex])
    }

    const handleChange = (val) => {
        // 父组件使用 v-model:value  或者 @update:value
        emit('update:value', val)
    }

</script>

<style scoped>

</style>
