<script setup>
// https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
const handleFiles = (event) => {
  console.log('handleFiles event:', event)
  const fileList = event.target.files
  console.log('handleFiles fileList:', fileList)
}

</script>

<template>
  Upload Files: <input ref="filesInputElement" @change="handleFiles" type="file" id="input" multiple />
</template>

<style scoped>
</style>