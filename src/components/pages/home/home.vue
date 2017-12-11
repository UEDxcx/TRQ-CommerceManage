<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        <router-link to="/home/companyList"><span class="layout-text">Option 1</span></router-link>
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        <router-link to="/home/moneyList"><span class="layout-text">Option 2</span></router-link>
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        <router-link to="/home/invite"><span class="layout-text">Option 3</span></router-link>
                    </MenuItem>
                </Menu>
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                  <div>商会后台管理系统</div>
                  <div class="user-info">
                    <span class="el-dropdown-link">{{name}}</span>
                    <span @click="handleCommand" class="login-out">退出</span>
                  </div>        
                </div>
                <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>



<script>
export default {
  data(){
    return {
        spanLeft: 3,
        spanRight: 21,
        name: ''
    }
  },
  computed: {
    created() {
          let username = localStorage.getItem('ms_username');
          this.name = username;
          console.log(username)
          return username ? username : this.name;
      }
  },
  methods: {
    handleCommand() {
          // if (command == 'loginout') {
              localStorage.removeItem('ms_username')
              this.$router.push('/');
          // }
      },
    // toggleClick () {
    //     if (this.spanLeft === 5) {
    //         this.spanLeft = 2;
    //         this.spanRight = 22;
    //     } else {
    //         this.spanLeft = 5;
    //         this.spanRight = 19;
    //     }
    // }
  },
    computed: {
        // iconSize () {
        //     return this.spanLeft === 5 ? 14 : 24;
        // }
    },
}
</script>


<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-menu-left{
    background: #464c5b;
    height: 100%;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
a{
    color: #9ea7b4
}
/* .layout-hide-text .layout-text{
    display: none;
}
.ivu-col{
    transition: width .2s ease-in-out;
} */

</style>

