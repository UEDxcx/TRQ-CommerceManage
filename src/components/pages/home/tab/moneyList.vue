<template>
  <div class="content">
    <div class="top">
      <div>企业列表（共196家）</div>
      <div>
        <Input v-model="value" placeholder="请输入关键字搜索" style="width: 300px;margin-right: 5px"></Input>
        <Button type="primary">搜索</Button>
      </div>
    </div>
    <div class="table">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      arr: [

      ],
      columns1: [
        {
          title: '序号',
          key: 'idx'
        },
        {
          title: '成立时间',
          key: 'time'
        },
        {
          title: '企业名称',
          key: 'name'
        },
        {
          title: '收益类型',
          key: 'SYtype'
        },
        {
          title: '消费金额',
          key: 'buy'
        },
        {
          title: '收益金额',
          key: 'sell'
        },
      ],
      data1: [
        {
          idx: '1',
          name: '中科视拓科技有限公司',
          time: '2016',
          SYtype: '约茶费',
          buy: '200',
          sell: '30'
        },
        {
          idx: '2',
          logo: '',
          name: '中科视拓科技有限公司',
          time: '2016',
          moneyStage: 'B轮',
          VIP: '否',
          num: '6',
          money: '5000'
        },
        {
          idx: '3',
          logo: '',
          name: '中科视拓科技有限公司',
          time: '2016',
          moneyStage: 'A轮',
          VIP: '是',
          num: '6',
          money: '1999'
        },
        {
          idx: '4',
          logo: '',
          name: 'DCG',
          time: '2016',
          moneyStage: 'B轮',
          VIP: '否',
          num: '6',
          money: '2000'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content{
  padding: 15px 10px;
  box-sizing: border-box
} 
.top{
  display: flex;
  justify-content: space-between;
  align-items: center
}
.table{
  margin-top: 10px 
}
</style>
 