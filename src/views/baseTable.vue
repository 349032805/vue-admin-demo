<template>
  <p-layout>
    <div class="table"> 
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            <el-select v-model="select_cate" placeholder="筛选专辑" class="handle-select mr10">
                <el-option key="1" label="七里香" value="七里香"></el-option>
                <el-option key="2" label="十一月的肖邦" value="十一月的肖邦"></el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="发行日期" sortable align="center"></el-table-column>
            <el-table-column prop="name" label="歌名" header-align="center"></el-table-column>
            <el-table-column prop="belong" label="所属专辑" header-align="center"></el-table-column>
            <el-table-column prop="singer" label="star" header-align="center"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="80">
            </el-pagination>
        </div>
    </div>
  </p-layout>
</template>

<script>
  import songs from '../../static/songs';
  export default {
    data() {
        return {
            tableData: songs.songArr,
            cur_page: 1,
            multipleSelection: [],
            select_cate: '',
            select_word: '',
            del_list: [],
            is_search: false
        }
    },
    created(){
    },
    computed: {
    },
    methods: {
      handleCurrentChange(val){
          this.cur_page = val;
          this.getData();
      },
      search(){
          this.is_search = true;
      },
      filterTag(value, row) {
          return row.tag === value;
      },
      handleEdit(index, row) {
          this.$message('编辑第'+(index+1)+'行');
      },
      handleDelete(index, row) {
          this.$message.error('删除第'+(index+1)+'行');
      },
      delAll(){
          const self = this,
              length = self.multipleSelection.length;
          let str = '';
          self.del_list = self.del_list.concat(self.multipleSelection);
          for (let i = 0; i < length; i++) {
              str += self.multipleSelection[i].name + ' ';
          }
          self.$message.error('删除了'+str);
          self.multipleSelection = [];
      },
      handleSelectionChange(val) {
          this.multipleSelection = val;
      }
    }
  }
</script>

<style lang="less">
.handle-box{
  margin-bottom: 20px;
  .handle-select{
    width: 140px;
  }
  .handle-input{
    width: 300px;
    display: inline-block;
  }
}

</style>