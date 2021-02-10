<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-form-model
      class="row"
      ref="ruleForm"
      layout="vertical"
      :label-col="labelCol"
    >
      <a-form-model-item
        class="col-md-10 fs"
        has-feedback
        prop="nama"
        label="Nama Lengkap"
      >
        <!-- <p class="mb-n2">Nama Lengkap <span> *</span></p> -->
        <a-input
          class="in"
          placeholder="Example: Edward Hoven Ramsey"
          allow-clear
        ></a-input>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { sm: { span: 3, offset: 12 } },
      // wrapperCol: { span: 14 },
    };
  },
};
</script>

<style lang="scss">
.in {
  margin-top: -20px;
}
</style>