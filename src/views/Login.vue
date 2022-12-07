<template>
  <div class="h-screen bg-color background absolute">
    <form @submit.prevent="login">
      <div class="">
        <img
          src="../assets/Pearrun-logo.png"
          class="object-contain h-60 w-full my-14"
          alt=""
        />
      </div>
      <div class="flex flex-row flex-wrap">
        <input
          class="
            bg-gray-200
            placeholder-gray-600
            w-9/12
            p-2
            px-4
            mb-2
            mt-8
            mx-auto
            rounded-xl
            filter
            drop-shadow-lg
          "
          type="email"
          placeholder="Email address"
          v-model="email"
        />
        <input
          class="
            bg-gray-200
            placeholder-gray-600
            w-9/12
            p-2
            px-4
            my-4
            mx-auto
            rounded-xl
            filter
            drop-shadow-lg
          "
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="flex">
        <span class="mx-auto">
          {{ message }}
        </span>
      </div>
      <div class="flex my-14">
        <button
          class="
            mx-auto
            bg-gradient
            text-white
            px-20
            py-3
            rounded-3xl
            filter
            drop-shadow-lg
            text-2xl
            font-run
          "
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
        })
        .then(() => {
          this.$router.push("/Dashboard");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.message = errorMessage;
          console.log(errorCode + errorMessage);
        });
    },
  },
};
</script>

<style scoped>
.bg-gradient {
  background: rgb(83, 234, 224);
  background: linear-gradient(
    113deg,
    rgba(83, 234, 224, 1) 0%,
    rgba(204, 230, 0, 1) 100%
  );
}

.background {
  z-index: -1;
}

.bg-color{
  background-color: #F9F8F9;
}

</style>
