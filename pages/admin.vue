<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品管理" name="first">
        <div class="title">
          <div class="container_table">
            <el-table :data="this.goods.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%"
              :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="gname" label="商品名" sortable width="180">
              </el-table-column>
              <el-table-column prop="user_publisher" label="发布人" width="180">
              </el-table-column>
              <el-table-column prop="type[0].label" sortable label="类型">
              </el-table-column>
              <el-table-column prop="sale_price" sortable label="售价">
              </el-table-column>
              <el-table-column prop="address" label="发货地址">
              </el-table-column>
              <el-table-column prop="desc" sortable label="描述">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="danger" @click='removeGoods(scope.row)'>删除商品</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination class="fy" layout="prev, pager, next" @current-change="current_change" :total="total"
              background>
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="用户管理" name="second">配置管理</el-tab-pane> -->
      <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    data() {
      return {
        activeName: 'first',
        goods:[],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        total: 1000, //默认数据总数
        pagesize: 9, //每页的数据条数
        currentPage: 1, //默认开始页面
        istag: true,
        input: "",
        input21: '',
        value5: [],
      };
    },
    methods: {
      removeGoods(item) {
        this.$axios.post('/goods/removeGoods', {_id:item._id}).then(res=>{
          if(res.status == 200){
            this.$message.success("删除成功")
            setTimeout(()=>{
              window.location.reload()
            },1000)
          }
        })
        
      },
      getAllGoods() {
        this.$axios.post('/goods/getGoods').then(res=>{
          console.log(res.data);
          this.goods = res.data.data;
          
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 0) {
          return 'th';
        }
        return '';
      },
      switchChange() {
        this.istag = !this.istag;

      },
      created: function () {
        this.total = this.tableData.length;
        
      },
      current_change: function (currentPage) {
        this.currentPage = currentPage;
      }

    },
    created () {
      this.getAllGoods();
    }
  }

</script>

<style lang="scss" scoped>

</style>
