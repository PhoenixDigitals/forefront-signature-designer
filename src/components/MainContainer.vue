<template>
  <div class="content">
    
    <div class="row title">
      <h1>Forefront signature designer</h1>
    </div>     

    <div class="row">
      <div class="col-6">
        <InputForm />
      </div>

      <div class="col-6">
        <ResultForm />
      </div>
    </div>    
  </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import ResultForm from "./ResultForm.vue";

export default {
  name: "MainContainer",
  components: {
    InputForm,
    ResultForm
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  margin-left: 10px;
}

.content {
  max-width: 1270px;
  margin-left: auto;
  margin-right: auto;
}
</style>
