<template>
  <p-layout>
    <p>test</p>
  </p-layout>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  created() {
    console.log("---------create");
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.pure-button {
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 3px;
}

.g-core-image-corp-container .info-aside {
  height: 45px;
}

.el-upload--text {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  width: 360px;
  height: 180px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.el-upload--text .el-icon-upload {
  font-size: 67px;
  color: #97a8be;
  margin: 40px 0 16px;
  line-height: 50px;
}

.el-upload--text {
  color: #97a8be;
  font-size: 14px;
  text-align: center;
}

.el-upload--text em {
  font-style: normal;
}
</style>
