<template>
  <div class="content">
    
    <div class="row title">
      <div class="col-12">
        <h1>Forefront signature designer</h1>
      </div>      
    </div>     

    <div class="row">
      <div class="col-6">
        <InputForm />
      </div>

      <div class="col-6">
        <PreviewForm />
      </div>
    </div>    
  </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import PreviewForm from "./PreviewForm.vue";

export default {
  name: "MainContainer",
  components: {
    InputForm,
    PreviewForm
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  margin-left: 10px;
}

.content {
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
  .content {
    max-width: 1200px;
  }
}

@media screen and (max-device-width: 800px) {
  .content {
    max-width: 500px;
  }
}

@media screen and (min-device-width: 1600px) {
  .content {
    max-width: 1300px;
  }
}

.col-6 {
  min-width: 400px;
}
</style>
