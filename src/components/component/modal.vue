<template>
  <div class="modal">
    <div>{{listOn.time}}</div>
    <div>{{listOn.fenlei}}</div>
    <div>{{listOn.jiankuang}}</div>
    <div>{{listOn.leixing}}</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      listOn: {
        time: '2017-05-10',
        fenlei: '移动互联网',
        jiankuang: '融资需求',
        leixing: '股权'
      }
    };
  },
  methods: {

  },
  filters: {},
  created() {

  }
};
</script>


<style scoped>
.modal{
  position: absolute;
  width: 440px;
  height: 500px;
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -250px;
  background-color: #ccc;
  z-index: 2;
}

</style>
