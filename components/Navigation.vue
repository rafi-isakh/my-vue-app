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
            <div v-if="!isLoggedIn" class="ml-4 flex items-center md:ml-6">
              <nuxt-link to="login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2
                rounded-md text-sm font-medium"  @click.native="toggleActiveClass('')">Login</nuxt-link>
              <nuxt-link to="register" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2
                rounded-md text-sm font-medium" @click.native="toggleActiveClass('')">Signup</nuxt-link>
            </div>
            <div v-else class="ml-3 relative">
              <div @click="isOpen = !isOpen">
                <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="@/assets/images/avatar.jpg" alt="">
                </button>
              </div>
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</a>
              </div>
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
      about: false,
      isLoggedIn: false,
      isOpen: false,
      cookies: this.$cookies,
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
  },
  created: function() {
    let session = this.cookies.get('access_token');
    this.isLoggedIn = session !== undefined && session.length > 0
    console.log('isLoggedIn: ' +this.isLoggedIn)
    console.log('isLoggedIn: ' +session.length)
  }
}
</script>
