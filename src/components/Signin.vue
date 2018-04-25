<template>
    <div class="form-group">
        <h3 class="">Sign In</h3>
        <div class="form-group">
            <input type="text"
                   placeholder="Email"
                   class="form-control"
                   v-model="email">
            <br>
            <input type="password"
                   placeholder="password"
                   class="form-control"
                   v-model="password">
            <br>
            <button class="btn btn-primary" @click="signIn">Sign In</button>
        </div>
        <br>
        <router-link to="/signup">Not a user yet? Sign up</router-link>
        <br>
        <p>{{error.message}}</p>
    </div>
</template>

<script>
  import {firebaseApp} from '../firebaseApp';

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error
          })
      }
    }
  }
</script>