<template>
  <div class="chatroom">
    <Header goback="true" msg="房间列表" serve="true" />
    <div class="room-type">
      <div class="type">
        <div class="list">
          <div class="item active">
            <div class="name">
              热门
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              军事
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              视频
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              军事
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              视频
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              军事
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              视频
              <i></i>
            </div>
          </div>
          <div class="item">
            <div class="name">
              视频
              <i></i>
            </div>
          </div>
        </div>
        <div class="icon-change">
          <i></i>
        </div>
      </div>
    </div>
    <ul class="room-list">
      <li @click="goNext('/chat')">
        <div class="room-name">
          <div class="type">私密房间</div>
          <div class="hot-number">
            <i class="hot"></i>
            <span>19.5万</span>
          </div>
        </div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
               <div class="room-name">
          <div class="type">公共房间</div>
          <div class="hot-number">
            <i class="hot"></i>
            <span>19.5万</span>
          </div>
        </div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name">
          <div class="type">私密房间</div>
        </div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name">
          <div class="type">私密房间</div>
        </div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name"></div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name">
          <div class="type">私密房间</div>
        </div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name"></div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name">
          <div class="type">私密房间</div>
        </div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
      <li @click="goNext('/chat')">
        <div class="room-name"></div>
        <div class="hot-say text-over">胡歌来了直播间</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "ChatRoom",
  components: {
    Header
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    goNext(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="less">
.chatroom {
  .room-type {
    height: 0.9rem;
    .type {
      position: fixed;
      width: 100%;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 2;
      .list {
        width: 6.5rem;
        height: 0.9rem;
        display: flex;
        overflow-x: scroll;
        .item {
          display: inline-block;
          width: 1.5rem;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.28rem;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          .name {
            position: relative;
            width: 1.5rem;
            height: 0.9rem;
          }
          &.active {
            i {
              position: absolute;
              bottom: 0.25rem;
              left: 0;
              display: inline-block;
              width: 100%;
              height: 0.04rem;
              background: @primary;
              border-radius: 0.02rem;
            }
          }
        }
      }
      .icon-change {
        height: 0.9rem;
        width: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        i {
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          background: url("../assets/imgs/chat/other.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .room-list {
    text-align: left;
    overflow: scroll;
    li {
      display: inline-block;
      width: 3.7rem;
      margin-bottom: 0.3rem;
      .room-name {
        width: 3.7rem;
        height: 3rem;
        background: url("../assets/imgs/chat/room.png") no-repeat;
        background-size: 100%;
        position: relative;
        .type {
          width: 3.7rem;
          height: 0.4rem;
          background: url("../assets/imgs/chat/tittle.png") no-repeat;
          background-size: 100%;
          font-size: 0.2rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          display: flex;
          align-items: center;
          padding: 0 0.2rem;
        }
        .hot-number {
          position: absolute;
          left: 0.2rem;
          bottom: 0.1rem;
        }
      }
      .hot-say {
        display: flex;
        width: 3.7rem;
        align-items: center;
        justify-content: center;
        font-size: 0.24rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        padding: 0.1rem;
      }
      &:nth-child(even) {
        margin-left: 0.1rem;
      }
    }
  }
}
</style>