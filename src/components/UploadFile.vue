<script setup>

import { ref } from 'vue'

const emit = defineEmits(["uploadFile"])
const fileContents = ref('')

// https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
const handleFiles = (event) => {
  const fileList = event.target.files
  
  let reader = new FileReader();
  reader.readAsText(event.target.files[0]);
  reader.onload = () => {
    const data = reader.result
    console.log('UploadFile.vue - reader.onload has results, length is', data.length)
    fileContents.value = data
    emit("uploadFile", data);
  }
  reader.onerror = () => console.log('Error uploading file: ', reader.error)
}

</script>

<template>
  Upload File: <input ref="filesInputElement" @change="handleFiles" type="file" id="input" />
</template>

<style scoped>
</style>