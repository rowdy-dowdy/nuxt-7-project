<script lang="ts" setup>
  const file_upload = ref<HTMLInputElement>(null)
  const entering = ref(false)

  const handleDrop = async (e: DragEvent | InputEvent) => {
    entering.value = false

    var files: FileList | null = null
    if (e.type == 'drop') {
      files = e.dataTransfer?.files
    }
    else if (e.type == 'input') {
      files = (e.target as HTMLInputElement).files
    }

    const file = files[0]

    if (file.type == 'video/mp4' || file.type == 'video/webm') {
      console.log(file)
      const formData  = new FormData();
      formData.append("filefield", file);
      const {data} = useFetch('/api/tiktok/videos/add', {
        method: 'POST',
        body: formData,
        headers: {
          // 'Content-Type': 'multipart/form-data'
        }
      })

      console.log('upload', data.value)
    }
  }

  const upload = async () => {

  }

  const events = ['dragenter', 'dragleave', 'dragover', 'drop']

  const eventDragAndDrop = (e: Event) => {
    e.preventDefault()
  }

  onMounted(() => {
    events.forEach(v => document.body.addEventListener(v, eventDragAndDrop))
  })

  onUnmounted(() => {
    events.forEach(v => document.body.removeEventListener(v, eventDragAndDrop))
  })
</script>

<template>
  <div class="w-full h-full bg-gray-100">
    <TiktokLayoutContainer class="h-full rounded-lg bg-white shadow mt-6">
      <div class="w-full h-full py-6 lg:px-8">
        <h4 class="text-2xl font-semibold">Upload video</h4>
        <p class="mt-4 text-gray-500">Post a video to your account</p>

        <div class="mt-12 flex space-x-6">
          <div 
            class="border-2 border-dashed border-gray-300 hover:border-rose-500 px-10 py-16 cursor-pointer rounded-lg text-center"
            :class="{'!border-rose-500': entering}"
            @drop.prevent="handleDrop"
            @dragenter="entering = true"
            @dragleave="entering = false"
            >
            <input 
              ref="file_upload" 
              @input="handleDrop"
              type="file" name="file_upload" id="file_upload" accept="video/*" class="sr-only">
            <div :class="{'pointer-events-none': entering}">
              <span class="icon w-12 h-12 text-gray-500 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z"></path></svg>
              </span>
              <p class="mt-2 text-lg font-medium">Select video to upload</p>
              <p class="mt-2 text-sm">Or drag and drop a file</p>
              <p class="mt-8 text-sm text-gray-500">MP4 or WebM</p>
              <p class="mt-2 text-sm text-gray-500">720x1280 resolution or higher</p>
              <p class="mt-2 text-sm text-gray-500">Up to 10 minutes</p>
              <p class="mt-2 text-sm text-gray-500">Less than 2GB</p>

              <button 
                class="mt-8 w-full px-4 py-2 rounded font-semibold text-white bg-rose-500 hover:bg-rose-400"
                @click.prevent="file_upload.click()"
                >Select file</button>
            </div>
          </div>
        </div>
      </div>
    </TiktokLayoutContainer>
  </div>
</template>