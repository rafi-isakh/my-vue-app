<template>
  <div class="flex bg-gray-50 px-4 m-auto">
    <div class="max-w-md space-y-8 content">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" v-model="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-3" placeholder="Password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <!-- <div class="flex items-center"> -->
            <!-- <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-2 border-gray-500 rounded">
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label> -->
          <!-- </div> -->

          <div class="text-sm">
            <nuxt-link to="forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </nuxt-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
        <div>
          <p class="text-xs text-red-500">{{errorMessage}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      cookie: this.$cookies,
    }
  },
  methods: {
    async handleSubmit() {
      const credential = {
        email: this.email,
        password: this.password
      }

      let res = await this.$axios.post('/auth/login', credential).catch(err => this.printError(err))
      if (res !== undefined) {
        this.cookie.set({"name":"access_token", "value":res.data.token})
        window.location.href = '/'
      }
    },
    printError(error) {
      this.errorMessage = error.response.data.message
    }
  }
}
</script>
