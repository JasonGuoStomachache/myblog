<template>
  <div class="imgcard_left">
    <div class="mycard">
      <div class="cardleft">
        <div class="cardtitle">
          <p class="articletitile">{{ article.articletitile }}</p>
          <p class="articletime">
            &nbsp;&nbsp;<el-icon :size="15"><Timer /></el-icon>&nbsp;发表于：{{
              article.articletime.nowDate
            }}&nbsp;&nbsp;{{ article.articletime.nowTime }}&nbsp;&nbsp;{{
              article.articletime.nowWeek
            }}
          </p>
          <p class="articleauthor">
            &nbsp;&nbsp;<el-icon :size="15"><Coordinate /></el-icon
            >&nbsp;创作者：{{ article.articleauthor }}
          </p>
        </div>
        <hr style="width: 95%" />
        <div class="cardintroduction">
          <p class="articleintroduction">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              article.articleintroduction
            }}
          </p>
        </div>
      </div>
      <div class="cardright">
        <img
          alt="loading ! ! !"
          style="
            width: 100%;
            height: 100%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          "
          :src="article.articlecover"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imgcard_left",
  data() {
    return {};
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/font.css"></style>
<style scoped>
.imgcard_left {
  display: flex;
  align-items: center;
  width: 94%;
  margin: 20px 3%;
}
.mycard {
  width: 100%;
  height: 300px;
  display: flex;
  border-radius: 15px;
  box-shadow: darkgrey 0px 0px 5px 2px;
}
.mycard:hover {
  box-shadow: rgb(138, 138, 138) 0px 0px 12px 3px;
}
.cardleft {
  height: 90%;
  width: 40%;
  margin: 2% 0 2% 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.cardtitle {
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
}
.articletitile {
  padding: 5% 2%;
}
.articletitile:hover {
  color: #f9957e;
  cursor: pointer;
}
.articletime {
  font-size: 12px;
  margin-bottom: 1%;
}
.articleauthor {
  font-size: 12px;
  color: #a3a3a3;
}
.cardintroduction {
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  text-align: left;
}
.articleintroduction {
  font-size: 12px;
  padding: 0 3% 0 3%;
}
.cardright {
  height: 100%;
  width: 60%;
}
</style>
