<template>
  <div
    :class="{
      'opacity-0': !showToast,
      'opacity-100': showToast,
      'scale-0': !showToast,
      'scale-100': showToast,
    }"
    id="toast-message-cta"
    class="duration-700 ease-in-out 'w-full fixed left-4 bottom-4 p-4 max-w-xs text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
    role="alert"
  >
    <div class="flex">
      <div class="ml-3 text-sm font-normal">
        <strong class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
          >Drigo Alexander</strong
        >
        <div class="mb-2 text-sm font-normal">
          Thankyou for using this boilerplate. Give me insight on how to improve
          this boilerplate through
          <strong class="text-white"
            ><a href="mailto:drigosihombinga@gmail.com">This</a></strong
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showToast: false,
    }
  },
  created() {
    setTimeout(() => {
      this.showToast = true
    }, 1000)
    setTimeout(() => {
      this.showToast = false
    }, 8000)
  },
}
</script>

<style></style>
