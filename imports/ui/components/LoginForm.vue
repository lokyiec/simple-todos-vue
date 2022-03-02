<template>
  <div>
    <h1
      class="mt-2 mb-10 md:mt-20 md:mb-4 text-center text-4xl md:text-5xl md:transform md:scale-105 font-bold"
    >
      Sign In
    </h1>
    <form class="login-form" @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block mb-1" for="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          required
          v-model="username"
          class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          v-model="password"
          class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
        />
      </div>

      <div class="mt-6">
        <button
          class="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-700 border border-transparent rounded-md capitalize text-white hover:bg-gray-900 active:bg-red-700 transition"
          type="submit">
          Log In
        </button>

      </div>
    </form>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(event) {
      Meteor.loginWithPassword(this.username, this.password);
    }
  }
};
</script>