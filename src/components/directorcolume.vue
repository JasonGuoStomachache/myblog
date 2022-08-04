<template>
  <div class="director">
    <div
      class="colume"
      v-for="(m, index) in directorinfo"
      :class="{
        columeactive: index === currentIndex,
        notactive: index != currentIndex,
      }"
      @mouseover="columemouseover(index)"
      @mouseout="columemouseout"
      @click="redirect(m.linkto)"
    >
      <span v-if="m.isdropdown"
        ><el-dropdown>
          <span
            style="font-weight: 600; font-size: 18px"
            :class="{
              columeactive: index === currentIndex,
              notactive: index != currentIndex,
            }"
          >
            {{ m.name }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="n in m.childrencolume"
                @click="redirect(n.linkto)"
                >{{ n.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></span
      >
      <span v-else>{{ m.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "directorcolume",
  data() {
    return {
      currentIndex: 999,
      directorinfo: [
        {
          name: "主页",
          iconclass: "<HomeFilled />",
          linkto: "/home",
          isdropdown: false,
        },
        {
          name: "归档",
          iconclass: "<List />",
          linkto: "/catalog",
          isdropdown: true,
          childrencolume: [
            {
              name: "极客",
              linkto: "/geek",
            },
            {
              name: "文摘",
              linkto: "/bookreview",
            },
            {
              name: "影评",
              linkto: "/filmreview",
            },
            {
              name: "随想",
              linkto: "/comprehension",
            },
            {
              name: "笔记",
              linkto: "/notes",
            },
          ],
        },
        {
          name: "收集",
          iconclass: "<Management />",
          linkto: "/collection",
          isdropdown: true,
          childrencolume: [
            {
              name: "极客",
              linkto: "/geek",
            },
            {
              name: "文摘",
              linkto: "/bookreview",
            },
            {
              name: "影评",
              linkto: "/filmreview",
            },
            {
              name: "随想",
              linkto: "/comprehension",
            },
            {
              name: "笔记",
              linkto: "/notes",
            },
          ],
        },
        {
          name: "开发手册",
          iconclass: "<InfoFilled />",
          linkto: "/programming",
          isdropdown: false,
        },
        {
          name: "关于我",
          iconclass: "<Avatar />",
          linkto: "/about",
          isdropdown: false,
        },
      ],
    };
  },
  methods: {
    redirect(to) {
      this.$router.push(to);
    },
    columemouseover(index) {
      this.currentIndex = index;
    },
    columemouseout() {
      this.currentIndex = 999;
    },
  },
};
</script>
<style scoped>
.columeactive {
  /* background: linear-gradient(to bottom, #f9957e, #f3f5d0); */
  color: #f9957e;
  cursor: pointer;
}
.notactive {
  color: #7b7b7b;
}

.director {
  font-weight: 600;
  font-size: 18px;
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-between;
}
.colume {
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
