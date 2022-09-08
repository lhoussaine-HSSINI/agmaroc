<template>
  <div class="container">
    <div class="row">
      <div class="col-3 d-flex justify-content-between">
        <img class="rounded-circle shadow-1-strong"
             src="~@/assets/images/aboutimg.jpg" alt="avatar" width="80"
             height="80" />
        <p> <strong>Maniruzzaman Akash</strong></p>
      </div>
      <div class="col-9">

        <div class="clearfix"></div>
        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>
          <FAIFatma   :icon="['fas' ,'fa-reply']" class="icon alt" /></p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: `comment`
}
</script>

<style scoped>

</style>