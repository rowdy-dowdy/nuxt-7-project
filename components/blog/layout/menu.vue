<script lang="ts" setup>
  import { useModelStore } from "~/stores/model";

  const modelStore = useModelStore()

  let show = ref(false)
</script>

<template>
  <ul class="menu text-sm">
    <BlogLayoutMenuItem to="/blog">
      Home
      <template v-slot:dropdown>
        <BlogLayoutMenuItem>Magazine</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Personal</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Classic</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Minimal</BlogLayoutMenuItem>
      </template>
    </BlogLayoutMenuItem>
    <BlogLayoutMenuItem>Lifestyle</BlogLayoutMenuItem>
    <BlogLayoutMenuItem>Culture</BlogLayoutMenuItem>
    <BlogLayoutMenuItem>
      Feature
      <template v-slot:dropdown>
        <BlogLayoutMenuItem>
          Post Layouts
          <template v-slot:dropdown>
            <BlogLayoutMenuItem>Magazine
              
            </BlogLayoutMenuItem>
            <BlogLayoutMenuItem>Personal</BlogLayoutMenuItem>
            <BlogLayoutMenuItem>Classic</BlogLayoutMenuItem>
            <BlogLayoutMenuItem>Minimal</BlogLayoutMenuItem>
          </template>
        </BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Post Formats</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Archive</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Author Page</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>Paginated Post</BlogLayoutMenuItem>
        <BlogLayoutMenuItem>404 Page</BlogLayoutMenuItem>
      </template>
    </BlogLayoutMenuItem>
    <BlogLayoutMenuItem>Contact</BlogLayoutMenuItem>
  </ul>
</template>

<style scoped>
  /* menu */
  .menu > :deep(.item) {
    @apply border-b;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right bottom, #c2c2c2, #fff);
  }
  
  .menu :deep(.item .link) {
    @apply relative flex items-center py-3;
  }
  .menu :deep(.item .link:hover) {
    color: var(--color-2);
  }

  .menu :deep(.item .menu-arrow) {
    @apply absolute right-0 p-1 border text-rose-500 rounded transition-all duration-300 cursor-pointer;
  }

  /* active item */
  .menu :deep(.item .link.active) {
    color: var(--color-2);
  }
  .menu :deep(.item .link.active .menu-arrow) {
    @apply rotate-180;
  }

  /* dropdown-menu */
  .menu :deep(.dropdown-menu) {
    color: var(--color-1);
    @apply px-4;
  }
  .menu :deep(.dropdown-menu::after) {
    content: '';
    @apply block h-2;
  }

  .menu :deep(.dropdown-menu .item .link) {
    @apply py-2;
  }

  .menu :deep(.dropdown-menu .item .menu-arrow) {
    @apply static p-0 ml-1 border-0;
  }

  /* dropdown in dropdown */
  .menu :deep(.dropdown-menu .dropdown-menu::after),
  .menu :deep(.dropdown-menu .dropdown-menu::before) {
    content: '';
    @apply block h-1;
  }
</style>