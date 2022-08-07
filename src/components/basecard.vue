<template>
  <div class="basecard">
    <div class="mycard">
      <div class="cardleft">
        <img
          class="basecardimg"
          alt="loading ! ! !"
          :src="article.articlecover"
        />
      </div>
      <div class="cardright">
        <div class="cardtitle">
          <p class="articletitile">{{ article.articletitile }}</p>
          <p class="articletime">
            &nbsp;&nbsp;<el-icon :size="12"><Timer /></el-icon>&nbsp;{{
              article.articletime.nowDate
            }}&nbsp;&nbsp;{{ article.articletime.nowWeek }}
          </p>
        </div>
        <hr class="horizonerow" style="width: 100%" />
        <div class="cardintroduction">
          <p class="articleintroduction">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              article.articleintroduction
            }}
          </p>
        </div>
      </div>
    </div>
    <hr class="horizonerow" style="width: 30%" />
  </div>
</template>
<script>
export default {
  name: "basecard",
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
<style scoped>
.basecard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  margin: 20px 3%;
}
.mycard {
  width: 95%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
}
.horizonecolume {
  width: 1px;
  border: none;
  background-color: rgb(226, 226, 226);
}
.horizonerow {
  height: 1px;
  border: none;
  background-color: rgb(228, 227, 227);
}
.cardleft {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.basecardimg {
  width: 100%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
}
.cardright {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.cardtitle {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.articletitile {
  font-size: 25px;
  width: 75%;
  padding: 0 2%;
}
.articletitile:hover {
  color: #f9957e;
  cursor: pointer;
}
.articletime {
  text-align: right;
  font-size: 12px;
  font-weight: 100;
  color: #bebebe;
  margin-top: 1%;
}
.cardintroduction {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.articleintroduction {
  font-size: 12px;
  padding: 0 3% 0 3%;
}
</style>
