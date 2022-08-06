<template>
  <div class="imgcard_right">
    <div class="mycard">
      <div class="cardleft">
        <img
          style="
            width: 100%;
            height: 100%;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
          "
          :src="article.articlecover"
          alt="loading ! ! !"
        />
      </div>
      <div class="cardright">
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
            &nbsp;&nbsp;<el-icon :size="15"><Coordinate /></el-icon>&nbsp;{{
              article.articleauthor
            }}
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
    </div>
  </div>
</template>
<script>
export default {
  name: "imgcard_right",
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
.imgcard_right {
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
  box-shadow: rgb(138, 138, 138) 0px 0px 15px 3px;
}
.cardright {
  height: 90%;
  width: 40%;
  margin: 2% 2% 2% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.cardtitle {
  width: 97%;
  height: 35%;
  display: flex;
  margin-left: 3%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: right;
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
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: left;
}

.articleintroduction {
  font-size: 12px;
  padding: 0 3% 0 3%;
}
.cardleft {
  height: 100%;
  width: 60%;
}
</style>
