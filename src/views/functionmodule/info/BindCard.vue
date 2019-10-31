<template>
  <div class="bind-card">
    <Header goback="true" msg="绑定银行卡" serve="true" />
    <div class="be-careful">请使用本人银行卡号以便享受本平台的优惠活动</div>
    <ul>
      <li>
        <span>提款银行</span>
        <div class="choice">
          <van-field v-model="bank_name" placeholder="请选择提款银行" />
        </div>
        <van-icon name="arrow-down" size="20px" class="fr" @click="isShowList" />
      </li>
      <li>
        <span>账户姓名</span>
        <div class="choice">
          <van-field v-model="name" placeholder="请输入本人真实姓名绑定后无法修改" />
        </div>
      </li>
      <li>
        <span>银行账号</span>
        <div class="choice">
          <van-field v-model="bank_num" placeholder="请输入银行卡账号" />
        </div>
      </li>
      <li>
        <span>开户省市</span>
        <div class="choice">
          <van-field v-model="open_bank_one" placeholder="请选择（省、直辖市）" @click="isShow" />
        </div>
        <van-icon name="arrow-down" size="20px" class="fr" />
      </li>
      <li>
        <span>开户网点</span>
        <div class="choice">
          <van-field v-model="open_bank_two" placeholder="请输入开户网点" />
        </div>
      </li>
    </ul>
    <button class="bind-btn">绑定</button>
    <van-area
      :area-list="areaList"
      :columns-placeholder="['请选择', '请选择', '请选择']"
      title="标题"
      v-if="show"
      @cancel="isShow"
      @confirm="onAddrConfirm"
    />
    <van-action-sheet v-model="showlist" :actions="banklist" @select="onSelect" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import areaList from "../../../api/area";
import list from "../../../api/banklist";
export default {
  name: "BindCard",
  components: {
    Header
  },
  data() {
    return {
      bank_name: "",
      name: "",
      bank_num: "",
      open_bank_one: "",
      open_bank_two: "",
      show: false,
      showlist: false,
      banklist: [{ name: "选项" }, { name: "选项" }, { name: "选项" }]
    };
  },
  mounted() {
    this.areaList = areaList;
    this.banklist = list;
  },
  methods: {
    ...mapActions(["runName"]),
    isShow() {
      this.show = !this.show;
    },
    isShowList() {
      this.showlist = !this.showlist;
    },
    onAddrConfirm(e) {
      // 点击确认，获取所选的省市区数据
      // 确定选择,返回的必定是三元素数组
      console.log("this.onAddrConfirm=>e", e);
      this.province = e[0].name;
      this.city = e[1].name;
      this.district = e[2].name;
      this.open_bank_one = e[0].name + e[1].name + e[2].name;
      this.show = false;
    },
    onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.showlist = false;
      this.bank_name = item.name;
    }
  }
};
</script>
<style lang="less">
.bind-card {
  .be-careful {
    width: 100%;
    height: 0.68rem;
    background: rgba(245, 245, 245, 1);
    padding: 0.17rem 0.28rem;
    align-items: center;
  }
  ul {
    li {
      background: rgba(255, 255, 255, 1);
      height: 0.88rem;
      align-items: center;
      display: flex;
      padding: 0 0.3rem;
      border-bottom: 2px solid rgba(245, 245, 245, 1);
      span {
        font-size: 0.3rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .choice {
        width: 75%;
        .van-cell {
          padding: 0 0.4rem;
        }
      }
    }
  }
  .bind-btn {
    margin-top: 0.8rem;
    width: 5.8rem;
    height: 0.88rem;
    background: @primary;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>