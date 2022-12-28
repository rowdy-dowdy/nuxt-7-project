<script setup lang="ts">

</script>

<template>
  <div class="flex h-full w-full items-stretch text-gray-600">
      <div class="flex w-5/12 items-center justify-center bg-gray-50 px-8 py-8">
        <img src="~/assets/images/bg-auth.png" alt="Image auth" class="w-full" />
      </div>

      <div class="w-7/12 px-20 py-8">
        <div class="flex h-full w-full flex-col justify-between space-y-8">
          <div class="flex items-center justify-end space-x-4">
            <p>Already have an account?</p>
            <a href="#" class="block rounded border px-4 py-2 font-semibold hover:bg-gray-100">Sign Up</a>
          </div>

          <div>
            <h3 class="text-2xl uppercase">LOGIN</h3>
            <h5 class="mt-4 text-4xl font-semibold text-gray-800">Welcome Back</h5>
            <p class="mt-4">Please enter your account details</p>

            <AuthFormLogin />

            <p class="!mt-12 text-gray-500">This site is protected by reCaptcha v3 and the Google</p>
            <p class="!mt-2 text-gray-500">
              <a href="#" class="underline">Privacy Policy</a>
              <span> and </span>
              <a href="#" class="underline">Teams of Use</a>
            </p>
          </div>

          <div class="flex items-center space-x-8">
            <a href="#" class="hover:underline">Teams Of Use</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Cookie Policy</a>
            <a href="#" class="hover:underline">Status Page</a>
            <a href="#" class="hover:underline">Contact us</a>
          </div>
        </div>
      </div>
    </div>
</template>