<template>
  <div class="fillContainer">
    
    <el-table
      v-if="tableData.length>0"
      :data="tableData"
      style="width: 90%"
      max-height="850"
      border
    >
      <el-table-column type="index" label="序号" width="70" align="center"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="250" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ new Date(scope.row.time).toLocaleString()}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="项目名称" width="300" align="center">
        <template slot-scope="scope">
          <span style="color:#00d053">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="创建者" width="200" align="center">
        <template slot-scope="scope">
          <span style="color:#f56767">{{scope.row.user}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="项目状态" width="200" align="center">
        <template slot-scope="scope">
          <span style="color:#4db3ff">{{scope.row.type}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300" fixed="right" prop="operation">
        <template slot-scope="scope">
          <el-button
            type="warning"
            icon="edit"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button>
          <el-button
            type="success"
            icon="edit"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >发布</el-button>
          <el-button
            size="small"
            type="danger"
            icon="delete"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "programlist",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getProgram();
  },
  methods: {
    getProgram() {
      // 获取表格数据
      this.$axios
        .get("/api/programs/programlist")
        .then(res => {
          console.log('tag',res.data)
          this.tableData = res.data;
        })
        .catch(err => console.log(err));
    },
    handleEdit(index, row) {
        console.log(123);
    },
    handleDelete(index, row) {
        console.log(456);
    }
  }
};
</script>

<style scoped>
.fillContainer{
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
}
</style>