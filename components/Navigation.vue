<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <nuxt-link to="/" class="px-3 py-2 rounded-md text-sm font-medium" @click.native="toggleActiveClass('dashboard')"
                  :class="dashboard ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">Dashboard</nuxt-link>
                <nuxt-link to="#" class="px-3 py-2 rounded-md text-sm font-medium" @click.native="toggleActiveClass('faq')"
                  :class="faq ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">FAQ</nuxt-link>
                <nuxt-link :to="localePath('about')" class="px-3 py-2 rounded-md text-sm font-medium" @click.native="toggleActiveClass('about')"
                  :class="about ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'">About</nuxt-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <nuxt-link to="login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2
                rounded-md text-sm font-medium"  @click.native="toggleActiveClass('')">Login</nuxt-link>
              <nuxt-link to="register" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2
                rounded-md text-sm font-medium" @click.native="toggleActiveClass('')">Signup</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dashboard: false,
      faq: false,
      about: false
    }
  },
  methods: {
    toggleActiveClass(el) {
      this.clearAll()
      if(el === 'dashboard') {
        this.dashboard = !this.dashboard
      } else if (el === 'faq') {
        this.faq = !this.faq
      } else if (el === 'about') {
        this.about = !this.about
      }
    },
    clearAll() {
      this.dashboard = false;
      this.faq = false;
      this.about = false;
    }
  }
}
</script>
