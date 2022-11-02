<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">

    </header>

    <main class="p-3 prometheus">
      <p class="lead">The entire world is on the edge of a great change. We're here to tell the story. More details,
        coming soon. Until then, come and join us.</p>
      <p class="lead">
        <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Join us</a>
      </p>
    </main>

    <footer class="mt-auto text-white-50">
      <p><i>Prepare for unforeseen consequences.</i></p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'd-flex h-100 text-center text-bg-dark'
  }
})
</script>

<style lang="scss">
body {
  background-image: url("https://prometheus-data-1.s3.eu-central-1.amazonaws.com/cover.jpg");
  background-size: cover;
}

.prometheus {
  background-color: rgba(0, 0, 0, .75);
  border: 1px solid rgba(0, 0, 0, .75);
  border-radius: 20px;
}
</style>