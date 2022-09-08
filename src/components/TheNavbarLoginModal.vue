<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Sign in
          <label for="email"
            >Email <br /><input
              name="email"
              type="email"
              v-model="email"
              required
          /></label>
          <label for="password"
            >Password <br /><input
              name="password"
              type="password"
              v-model="password"
              required
          /></label>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="Login()"
            data-bs-dismiss="modal"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>