<template>
  <div class="repo-div">
    <el-row v-for="repo in repoList" :key="repo.id" class="repo-row">
      <el-col>
        <el-row class="mb-3">
          <el-col :span="12"><b>Name:</b> {{ repo.name }} </el-col>
          <el-col :span="6">
            <i class="el-icon-star-off"></i>
            <span title="Total number of stars">
              {{ repo.stargazers_count }}
            </span>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-guide"></i>
            <span title="Total number of forks">{{ repo.forks }}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>Description: {{ repo.description }}</el-col>
          <el-col>Programming language: {{ repo.language }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--this component is used for handle infinite scrolling by call handleFetchRepoList-->
    <infinite-loading @infinite="handleFetchRepoList"></infinite-loading>
  </div>
</template>

<script>
import axios from 'axios'; //import axios for fetch data
import moment from 'moment'; //for interact with date
import InfiniteLoading from 'vue-infinite-loading'; //import infinite scroll plugin for Vue.js,

export default {
  name: 'RepoComponent',
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      repoList: [],
      pageNum: 1,
    };
  },
  methods: {
    //Get GitAPI with infinite scrolling handler
    async handleFetchRepoList($state) {
      const today = moment().format('YYYY-MM-DD');
      const startDate = moment()
        .subtract(30, 'days')
        .format('YYYY-MM-DD');
      const url = `https://api.github.com/search/repositories?q=created:${startDate}..${today}&sort=stars&order=desc&page=${this.pageNum}&per_page=10`; //github url that query by created lasted 30days sorted by starred
      const response = await axios.get(url);

      this.repoList = [...this.repoList, ...(response.data.items || [])]; //add new fetch data to repoList

      if (response.data.items === undefined) {
        //can't fetch any new data, stop fetch data
        $state.complete();
      } else {
        //keep fetch new data on scrolling
        this.pageNum = this.pageNum + 1;
        $state.loaded();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.repo-div {
  width: 60%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.25);
}

.repo-row {
  display: flex;
  position: relative;
  flex-direction: row;
  text-align: left;
  min-height: 100px;
  padding: 24px 40px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-bottom: 0;
}

.mb-3 {
  margin-bottom: 16px;
}
</style>
