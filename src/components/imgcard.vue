<template>
  <div class="imgcard">
    <div class="mycard">
      <div class="cardleft">
        <div class="cardtitle">
          <p class="articletitile">基于 SCSS mixin 的 flex gap polyfill</p>
          <p class="articletime">
            <el-icon :size="15"><Timer /></el-icon>&nbsp发表于：{{
              nowDate
            }}&nbsp&nbsp{{ nowTime }}&nbsp&nbsp{{ nowWeek }}
          </p>
          <p class="articleauthor">
            <el-icon :size="15"><Coordinate /></el-icon>&nbspStomachache
          </p>
        </div>
        <hr style="width: 95%" />
        <div class="cardintroduction">
          <p class="articleintroduction">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一直以来，习惯在 flex 布局中使用 gap
            这个属性设置间距，一直以来也都是在最新的 Chrome
            上调试，所以从来没有想在 flex gap
            在其他浏览器上存在兼容性问题。最近看了一下文档才反应过来，gap
            原来只是 grid 布局的属性，虽然近些年来主流浏览器都已经支持了
          </p>
        </div>
      </div>
      <div class="cardright">
        <img
          style="
            width: 100%;
            height: 100%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          "
          src="/backgroundimgs/03.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imgcard",
  mounted() {
    this.setNowTimes();
  },
  data() {
    return {
      nowWeek: "",
      nowDate: "",
      nowTime: "",
    };
  },
  methods: {
    setNowTimes() {
      //获取当前时间
      let myDate = new Date();
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.nowDate = yy + "-" + mm + "-" + dd;
      this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
  },
};
</script>
<style scoped>
.imgcard {
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
.articletitile {
  padding: 05% 2% 0;
}

.articletime {
  font-size: 12px;
  margin-bottom: 1%;
}
.articleauthor {
  font-size: 12px;
  color: #a3a3a3;
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
