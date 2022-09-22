export default defineNuxtPlugin(nuxtApp => {
  let timeoutids = [];
  nuxtApp.vueApp.directive("collapse", {
    mounted(el: HTMLInputElement | HTMLTextAreaElement, binding) {
      // el.transitionDuration = 350;
      el.style.transitionProperty = 'height'
      el.style.transitionTimingFunction = 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      el.style.transitionDuration = '.3s'
      el.style.overflow = 'hidden'

      if (!binding.value) {
        el.style.display = 'none'
      }

      let node_id = timeoutids.length || 0
      el.dataset.node_id = '' + node_id

      timeoutids.push({
        time_show: null,
        time_hide: null
      }) 
    },
    updated(el: HTMLInputElement | HTMLTextAreaElement, binding, vnode) {
      if (binding.oldValue != binding.value) {
        let transition = el.style.transitionDuration;
        let time = parseFloat(transition)
        if (transition.slice(-2) != 'ms') {
          time = time * 1000
        }

        el.style.display = 'block'
        let height = el.scrollHeight; // not scale
        let show = el.dataset.show || undefined
        let node_id = parseInt(el.dataset.node_id)

        // console.log(node_id,timeoutids )

        // show
        if (binding.value) {
          clearTimeout(timeoutids[node_id].time_hide)
          if (show == 'true') {
            clearTimeout(timeoutids[node_id].time_show)
            el.style.height = height + 'px';
            timeoutids[node_id].time_show = setTimeout(function () {
              el.style.height = null;
              el.dataset.show = 'true'
            }, time)
            return
          }
          el.style.height = '0';

          setTimeout(function () {
            el.style.height = height + 'px';
            timeoutids[node_id].time_show = setTimeout(function () {
              el.style.height = null;
              el.dataset.show = 'true'
            }, time)
          }, 10);
        }
        // hidden
        else {
          clearTimeout(timeoutids[node_id].time_show)
          if (show == 'false') {
            clearTimeout(timeoutids[node_id].time_hide)
            el.style.height = '0';
            timeoutids[node_id].time_hide = setTimeout(function () {
              el.style.display = 'none';
              el.dataset.show = 'false'
            }, time)

            return
          }
          el.style.height = height + 'px';

          setTimeout(function () {
            el.style.height = '0';
            timeoutids[node_id].time_hide = setTimeout(function () {
              el.style.display = 'none';
              el.dataset.show = 'false'
            }, time)
          }, 10);
        }
      }
    },
  })
});