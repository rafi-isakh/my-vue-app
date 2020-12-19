<template>
  <div class="w-full bg-blue-900">
    <div class="flex justify-center text-center text-white">
        <!-- CONTACTS COLUMN -->
      <div class="w-full md:w-1/3 p-3">
        <nuxt-link to="#" class="border-r pr-1">English</nuxt-link>
        <nuxt-link to="#" class="border-r pr-1">Spanish</nuxt-link>
        <nuxt-link to="#">French</nuxt-link>
        <div class="my-6 text-l font-semibold">&copy; Copyright {{currentYear}}, Example Corporation</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    currentYear: function() {
      let d = new Date()
      return d.getFullYear()
    }
  }
}
</script>
