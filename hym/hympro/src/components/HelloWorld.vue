<template>
  <div class="hello">
    <h2>{{title}}</h2>
    <div v-for="(item,index) in messageList" :key="index">
      <div class="movedetail">
        <a :href="item.alt">
          <img :src="item.images.small" />
        </a>
        <div class="detail">
          <h3>TOP{{index+1}}  {{item.title}}</h3>
          <p>类型：{{item.genres}}</p>
          <p>时长:{{item.durations}}</p>
          <p>上映时间:{{item.pubdates}}</p>
          <p>评分:{{item.rating.average}}</p>
        </div>
      </div>
    </div>
    <button @click="queryData">获取电影详情</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      messageList: [],
      title: ""
    };
  },
  methods: {
    queryData() {
      this.$http.douban().then(res => {
        if (res.status == 200) {
          this.messageList = res.data.subjects;
          this.title = res.data.title;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello .movedetail {
  display: flex;
  margin-bottom: 10px;
}

.hello .movedetail .movetype {
  display: flex;
}
.hello .movedetail img {
  width: 150px;
  height: 200px;
}
.hello .movedetail .detail {
  text-align: left;
  align-items: center;
  margin-left: 20px;
  /* color: rgba(245,134,89,1);  */
  background: linear-gradient(to right, green, blue);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
