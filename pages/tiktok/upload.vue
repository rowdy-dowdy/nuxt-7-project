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
      formData.append("file", file);
      // formData.append('')
      const {data} = await useFetch('/api/tiktok/videos/add', {
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

  // event drop and drag of upload
  const events = ['dragenter', 'dragleave', 'dragover', 'drop']
  const eventDragAndDrop = (e: Event) => {
    e.preventDefault()
  }

  // value form
  var caption = ref('')
  var caption_html = ref<HTMLElement>(null)
  const inputCaption = (e: KeyboardEvent | null, data = undefined) => {
    if (!caption_html.value) return

    if (data) {
      if (caption.value.length >= 150) return

      caption_html.value.innerText = caption.value = caption.value + data
      // caption_html.value.focus()
      let range = document.createRange()
      let sel = window.getSelection()

      let last_child = caption_html.value.lastChild

      range.setStart(last_child, last_child.textContent.length)
      range.collapse(true)
      
      sel.removeAllRanges()
      sel.addRange(range)
      return
    }
    else {
      const isValidShiftEnter = (e.shiftKey && e.keyCode == 13 ) || e.keyCode == 13;

      if (isValidShiftEnter) {
        e.preventDefault()
        return
      }

      caption.value = (e.target as HTMLElement).innerText.replace(/\n/g, '')

      // Ctrl + v
      const isValidShortcut = (e.ctrlKey && e.keyCode != 86 );
      /* Backspace - Delete - Arrow Keys - Ctrl - Shift */
      const isValidKeyCode = [8, 16, 17, 37, 38, 39, 40, 46].includes(e.keyCode);

      // if (isValidShortcut) { 
      //   caption.value = ''
      // }


      console.log(isValidShiftEnter)

      if ( !isValidKeyCode && !isValidShortcut ) {
        if (caption.value.length == 150) {
          e.preventDefault();
          return
        }
        else if (caption.value.length > 150) {
          caption_html.value.innerText = caption.value = caption_html.value.innerText
          // caption_html.value.focus()
          let range = document.createRange()
          let sel = window.getSelection()

          let last_child = caption_html.value.lastChild

          range.setStart(last_child, last_child.textContent.length)
          range.collapse(true)
          
          sel.removeAllRanges()
          sel.addRange(range)

          e.preventDefault();
          return
        }
      }

    }
    // caption.value = (e.target as HTMLElement).innerText.replace(/\n/g, '')
    if (/^.$/u.test(e.key) && caption.value.length >= 150) {
      if (!(e.ctrlKey && e.key == 'a'))
        e.preventDefault()
    }
    console.log(e, caption.value, /^.$/u.test(e.key))
  }

  const focusInputCaption = () => {
    caption_html.value.focus()
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
        <!-- <button @click.prevent="createUser">click</button> -->
        <h4 class="text-2xl font-semibold">Upload video</h4>
        <p class="mt-4 text-gray-500">Post a video to your account</p>

        <div class="mt-16 flex space-x-6">
          <div 
            class="flex-none border-2 border-dashed border-gray-300 hover:border-rose-500 hover:bg-gray-100 px-10 py-16 cursor-pointer rounded-lg text-center"
            :class="{'!border-rose-500 !bg-gray-100': entering}"
            @drop.prevent="handleDrop"
            @dragenter="entering = true"
            @dragleave="entering = false"
            >
            <input 
              ref="file_upload" 
              @input="handleDrop"
              type="file" name="file_upload" id="file_upload" accept="video/*" class="sr-only">
            <div class="pointer-events-none">
              <span class="icon w-12 h-12 text-gray-500 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z"></path></svg>
              </span>
              <p class="mt-2 text-lg font-medium">Select video to upload</p>
              <p class="mt-2 text-sm">Or drag and drop a file</p>
              <p class="mt-8 text-sm text-gray-500">MP4 or WebM</p>
              <p class="mt-2 text-sm text-gray-500">720x1280 resolution or higher</p>
              <p class="mt-2 text-sm text-gray-500">Up to 10 minutes</p>
              <p class="mt-2 text-sm text-gray-500">Less than 2GB</p>
            </div>

            <button 
              :class="{'pointer-events-none': entering}"
              class="mt-8 w-full px-4 py-2 rounded font-semibold text-white bg-rose-500 hover:bg-rose-400"
              @click.prevent="file_upload.click()"
              >Select file</button>
          </div>

          <!-- right -->
          <div class="flex-grow min-w-0 -mt-7">
            <div class="flex justify-between">
              <h5 class="font-medium">Caption</h5>
              <span class="text-gray-500 text-sm">{{caption.length}} / 150</span>
            </div>
            <div class="mt-1.5 flex items-stretch space-x-3 border rounded focus-within:border-rose-500 px-4 py-2">
              <div class="flex-grow min-w-0 inline-flex cursor-text break-all" @click.prevent="focusInputCaption">
                <span ref="caption_html" @keydown="inputCaption" contenteditable></span>
              </div>
              <span class="flex-none font-bold cursor-pointer font-sans text-lg select-none" @mousedown.prevent="inputCaption(null, '@')">@</span>
              <span class="flex-none font-bold cursor-pointer font-sans text-lg select-none" @mousedown.prevent="inputCaption(null, '#')">#</span>
            </div>
          </div>
        </div>
      </div>
    </TiktokLayoutContainer>
  </div>
</template>