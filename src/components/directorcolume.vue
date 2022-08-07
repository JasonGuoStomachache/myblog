<template>
  <div class="directorcolume">
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
      :key="index"
    >
      <el-icon :size="20">
        <component :is="m.iconclass"></component>
      </el-icon>
      <span v-if="m.isdropdown"
        ><el-dropdown>
          <span
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
                :key="n.id"
                >{{ n.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></span
      >
      <span
        v-else
        :class="{
          columeactive: index === currentIndex,
          notactive: index != currentIndex,
        }"
        >{{ m.name }}</span
      >
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
          iconclass: "HomeFilled",
          linkto: "/home",
          isdropdown: false,
        },
        {
          name: "归档",
          iconclass: "List",
          linkto: "/catalog",
          isdropdown: true,
          childrencolume: [
            {
              name: "极客",
              linkto: "/geek",
              id: 0,
            },
            {
              name: "文摘",
              linkto: "/bookreview",
              id: 1,
            },
            {
              name: "影评",
              linkto: "/filmreview",
              id: 2,
            },
            {
              name: "随想",
              linkto: "/comprehension",
              id: 3,
            },
            {
              name: "笔记",
              linkto: "/notes",
              id: 4,
            },
          ],
        },
        {
          name: "收集",
          iconclass: "Management",
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
          iconclass: "InfoFilled",
          linkto: "/programming",
          isdropdown: false,
        },
        {
          name: "关于",
          iconclass: "Avatar",
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
<style scoped src="@/assets/css/font.css"></style>
<style scoped>
.columeactive {
  /* background: linear-gradient(to bottom, #f9957e, #f3f5d0); */
  color: #f9957e;
  cursor: pointer;
}
.notactive {
  color: #7b7b7b;
}

.directorcolume {
  display: flex;
  width: 30%;
  height: 100%;
  margin: 0 35%;
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
