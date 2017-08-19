<template>
  <p-layout>
    <div class="plugins-tips">
      Element UI自带上传组件。 访问地址：
      <a href="http://element.eleme.io/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
    </div>
    
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="eleImgUrl" :src="eleImgUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <div class="plugins-tips">
      Vue-Core-Image-Upload：一款轻量级的vue上传插件，支持裁剪。 访问地址：
      <a href="https://github.com/Vanthink-UED/vue-core-image-upload" target="_blank">Vue-Core-Image-Upload</a>
    </div>

    <!-- http://vanthink-ued.github.io/vue-core-image-upload/index.html#/cn/home -->
    <div class="upload-test">
      <div class="test-view">
          <img src="../images/6.jpg" class="upload-img" v-show="!coreImgUrl">
          <img :src="coreImgUrl" class="upload-img" v-show="coreImgUrl">
          <div class="center">
              <vue-core-image-upload
                class="upload-btn"
                text="测试上传"
                :crop="false"
                @imageuploaded="imageuploaded"
                @errorhandle="handleError"
                inputAccept="image/*"
                url="http://101.198.151.190/api/upload.php" >
              </vue-core-image-upload>
          </div>
      </div>
    </div>

     <!-- 带有file名称,动态的上传地址 -->
     <!-- <vue-core-image-upload
      class="upload-block"
      text=""
      :crop="false"
      @imageuploaded="imageuploaded"
      inputAccept="image/*"
      :url="url"
      inputOfFile="headImg">
    </vue-core-image-upload>  -->

  </p-layout>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload';
export default {
  data: function () {
    return {
      eleImgUrl: '',
      coreImgUrl: ''
      // url:this.baseUrl + '/updateHeadImg',
      // auth:{token:'abc123'}
    }
  },
  components: {
    VueCoreImageUpload
  },
  methods: {
    // ele
    handleAvatarSuccess(res, file) {
      console.log(file)
      this.eleImgUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      let flag = true;
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isJPG && !isPNG) {
        this.$message.error('上传图片只能是 JPG或者PNG 格式!');
        flag = false;
      }
      if (!isLt10M) {
        this.$message.error('图片大小不能超过 10MB!');
        flag = false;
      }
      return flag;
    },

    // vue-core-image-upload
    imageuploaded(res) {
      console.log(res)
      if (res.errcode == 0) {
        this.coreImgUrl = res.data.src;
      }
    },
    handleError() {
      this.$notify.error({
        title: '上传失败',
        message: '图片上传接口上传失败!'
      });
    }
  }
}
</script>

<style lang="less">
  // ele
.avatar-uploader {
  width: 800px;
  text-align: center;
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
}

// vue-core-image-upload
.upload-test {
  width: 800px;
  .test-view {
    margin: auto;
    text-align: center;
    .upload-img {
      height: 200px;
      width: 200px;
    }

    .upload-btn {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: none;
      border-radius: 4px;
      background: #2ecc71;
      margin: 20px auto;
      color: #fff;
    }
  }
}

</style>
