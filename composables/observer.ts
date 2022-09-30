// import type { Ref } from 'vue'

// export const useLocale = () => useState<string>('locale', () => useDefaultLocale().value)

// export const useDefaultLocale = (fallback = 'en-US') => {
//   const locale = ref(fallback)
//   if (process.client) {
//     const observer = new IntersectionObserver(([entry]) => {
//       // If the element to watch is intersecting within the threshold
//       if (entry && entry.isIntersecting) {
//         // Run the callback
//         callback(entry.target);
  
//         // If the callback should only run once, unobserve the element
//         if (once) {
//           observer.unobserve(entry.target);
//         }
//       }
  
//       // If the element is not intersecting, run the (optional) unintersecting callback
//       else {
//         outCallback(entry.target);
//       }
//     }, options);
  
//     // Observe the element
//     observer.observe(elementToWatch);
  
//     // Returns the observer so it can be further used in the component
//     return observer;
//   }
//   return locale
// }
