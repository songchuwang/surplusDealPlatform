<template>
  <div class="container">
    <div class="bread-nav">
      <span class="bread-nav-first">
        首页 <i class="el-icon-arrow-right"></i>
      </span>
      <span class="bread-nav-second">
        发布页
      </span>
    </div>
    <div class="content">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="商品标题" prop="header_name">
          <el-input v-model="ruleForm.header_name"></el-input>
        </el-form-item>
        <el-form-item label="描述下你的商品吧" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>

        <el-form-item>
          <div>上传商品图片 <span>多角度拍摄商品细节，全面展示商品；图片大小不能超过2M哦~</span></div>
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item prop="region">
          <div>发布地址</div>
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="想卖多少钱">
        </el-form-item>
        <el-row>
          <el-col :span="3" style="height:40px;line-height: 40px;">售卖价：</el-col>
          <el-col :span="9">
            <el-input v-model="ruleForm.header_name"></el-input>
          </el-col>
          <el-col :span="3" style="height:40px;line-height: 40px;padding-left:40px">邮费：</el-col>
          <el-col :span="9">
            <el-input v-model="ruleForm.header_name"></el-input>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px">
          <el-col :span="3" style="height:40px;line-height: 40px;">原价：</el-col>
          <el-col :span="9">
            <el-input v-model="ruleForm.header_name"></el-input>
          </el-col>
          <el-col :span="12" style="height:40px;line-height: 40px;">（选填）</el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col :span="3" style="height:40px;line-height: 40px;">商品分类</el-col>
          <el-col :span="4" style="margin-right:15px">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-form-item style="margin-top:30px;">
          <el-row>
            <el-col :span="6">
              <el-button size="medium" type="primary" @click="submitForm('ruleForm')">确认发布</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        ruleForm: {
          header_name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          header_name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    .bread-nav {
      width: 1190px;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .bread-nav-first {
        display: inline-block;
        width: 54px;
        height: 60px;
        line-height: 60px;
        font-weight: 700px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        i {
          color: #606266;
        }
      }

      .bread-nav-second {
        margin-left: 5px;
        display: inline-block;
        color: #606266;
        width: 54px;
        height: 60px;
        line-height: 60px;
      }
    }

    .content {
      width: 1190px;
      background: #fff;
      padding: 40px 290px 60px 60px;
      box-sizing: border-box;

      /deep/ .el-form {
        width: 840px;
      }
    }
  }

</style>
