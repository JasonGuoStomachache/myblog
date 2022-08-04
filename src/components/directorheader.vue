<template>
  <div class="meet">
    <span class="logo">Stomachache</span>
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
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown></span
        >
        <span v-else>{{ m.name }}</span>
      </div>
    </div>

    <div class="profile">
      <div class="left">
        <el-input
          v-model="input"
          v-show="showsearch"
          placeholder="要查点什么吗？"
          class="search"
          size="small"
          clearable
        />
      </div>
      <div class="right">
        <el-icon
          :size="30"
          @click="showsearch = !showsearch"
          :class="{
            isactive: 100 === currentIndex,
            notactive: 100 !== currentIndex,
          }"
          @mouseover="currentIndex = 100"
          @mouseout="currentIndex = 999"
          ><Search
        /></el-icon>

        <el-dropdown
          ><el-icon
            :size="30"
            :class="{
              isactive: 101 === currentIndex,
              notactive: 101 !== currentIndex,
            }"
            @mouseover="currentIndex = 101"
            @mouseout="currentIndex = 999"
            class="el-dropdown-link"
            ><Avatar
          /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myheader",
  data() {
    return {
      input: "",
      showsearch: false,
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
        },
        {
          name: "收集",
          iconclass: "<Management />",
          linkto: "/collection",
          isdropdown: true,
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
/* .example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
} */
.columeactive {
  /* background: linear-gradient(to bottom, #f9957e, #f3f5d0); */
  color: #f9957e;
  cursor: pointer;
}
.isactive {
  color: #f9957e;
}
.notactive {
  color: #7b7b7b;
}

.meet {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 30px #ababab;
  background-color: #ffffff;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
.logo {
  font-size: 20px;
  width: 20%;
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

.profile {
  display: flex;
  width: 20%;
  justify-content: space-between;
}
.profile .left {
  display: flex;
  width: 70%;
}
.profile .right {
  display: flex;
  margin-right: 20px;
  width: 25%;
  justify-content: space-between;
}
</style>
