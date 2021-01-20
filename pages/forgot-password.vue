<template>
  <div class="flex bg-gray-50 px-4 m-auto">
    <div class="max-w-md space-y-8 content">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
      </div>
      <form class="mt-8 space-y-4" action="#" method="POST" @submit.prevent="handleSubmit">
        <div class="text-sm">
          <p>Enter your registered email address</p>
        </div>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" v-model="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
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
            Reset password
          </button>
        </div>
        <div v-if="error">
          <p class="text-xs text-red-500">{{errorMessage}}</p>
        </div>
        <div v-else>
          <p class="text-xs text-blue-500">{{successMessage}}</p>
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
      errorMessage: "",
      successMessage: "",
      error: false,
    }
  },
  methods: {
    async handleSubmit() {
      const registeredEmail = {
        email: this.email
      }
      let res = await this.$axios.post('/auth/password', registeredEmail).catch(err => this.printError(err))
      console.log("Result " + res)
      if (res !== undefined) {
        this.error = false
        this.successMessage = "Reset link has been sent. Please check your email"
      }
    },
    printError(error) {
      this.error = true
      this.errorMessage = error.response.data.message
    }
  }
}
</script>
