<template>
  <div class="mainHome">
    <el-row class="toolbar-container">
      <el-col :span="24">
        <div>
          <h3>Most Starred Github Reposities</h3>
        </div>
      </el-col>
    </el-row>
    <RepoComponent />
  </div>
</template>

<script>
import RepoComponent from '@/components/RepoComponent';

export default {
  name: 'MainHome',
  components: {
    RepoComponent,
  },
};
</script>

<style lang="scss" scoped>
.toolbar-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  padding-left: 20px;
  color: white;
  background: #99a9bf;
}
</style>
