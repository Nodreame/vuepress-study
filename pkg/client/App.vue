<template>
    <div id="vueapp">
        <div v-html="msg"></div>
    </div>
</template>
<script>
    import mdContent from '../../docs/README.md'
    export default {
        data() {
            return {
                msg: mdContent
            }
        }
    }
</script>