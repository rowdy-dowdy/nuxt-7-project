export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive("collapse", {
    mounted(el: HTMLInputElement | HTMLTextAreaElement, binding) {
      // el.transitionDuration = 350;
      el.style.transitionProperty = 'height'
      el.style.transitionTimingFunction = 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      el.style.transitionDuration = '.35s'
      el.style.overflow = 'hidden'

      if (!binding.value) {
        el.style.display = 'none'
      }
    },
    updated(el: HTMLInputElement | HTMLTextAreaElement, binding) {
      if (binding.oldValue != binding.value) {
        let transition = el.style.transitionDuration;
        let time = parseFloat(transition)
        if (transition.slice(-2) != 'ms') {
          time = time * 1000
        }

        let t = el
        t.style.display = 'block'
        t.style.height = 'auto'
        let height = t.getBoundingClientRect().height;

        if (binding.value) {
          el.style.height = '0';

          setTimeout(function () {
            el.style.height = height + 'px';
            setTimeout(function () {
              el.style.height = null;
            }, time)
          }, 0);
        }
        else {
          el.style.height = height + 'px';

          setTimeout(function () {
            el.style.height = '0';
            setTimeout(function () {
              el.style.display = 'none';
            }, time)
          }, 0);
        }
      }
    },
  })
});