<template>
  <main>
    <ul>
      <li
        v-for="(user, index) in users"
        :key="user.id"
        @click="toggleModalView({
          index: Number(users.length - sortArray[index]),
          name: user.name,
          rating: user.rating,
          description: user.description,
          avatar: user.avatar,
          number: Number(users.length - sortArray[index] - 1)})"
        class="user-card"
      >
        <div
          class="user-item wrapper-row">
          <img
            :id="'img' + Number(users.length - sortArray[index] - 1)"
            :src="user.avatar"
            class="img"
          />
          <div
            class="user-description wrapper-column">
            <div class="text-user">Пользователь</div>
            <div class="text-user">{{ user.name }}</div>
          </div>
        </div>
        <UserCardRating
          :rating="user.rating"
        />
      </li>
    </ul>

    <transition name="fade">
      <ProfileModale
        v-if="modalShow"
        :imageSource="user.avatar"
        :index="user.index"
        :name="user.name"
        :description="user.description"
        :rating="user.rating"
        :number="user.number"
      />
    </transition>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import UserCardRating from '../components/UserCardRating'
import ProfileModale from '../components/ProfileModale'

export default Vue.extend({
  name: 'TheMain',

  components: { UserCardRating, ProfileModale },

  data () {
    return {
      user: {
        index: 0,
        name: '',
        description: '',
        rating: 0
      },
      avatarsLoaded: false,
      sortArray: [] as Array<number>
    }
  },

  computed: {
    users (): Array<any> {
      const userList = this.$store.state.users
      if (this.$store.state.mode === 'up') {
        return userList.sort(this.sortByAscending)
      } else {
        return userList.sort(this.sortByDescending)
      }
    },

    modalShow (): boolean {
      return this.$store.state.modalShow
    }
  },

  created () {
    this.getUsers()
  },

  methods: {
    getUsers (): void {
      this.$store.dispatch('SET_USERS')
    },

    sortByAscending (a: any, b: any): number {
      const users = this.$store.state.users
      let sortArray: Array<number> = []
      for (let i = 0; i < users.length; i ++) {
        sortArray.push(i)
      }
      this.sortArray = sortArray.reverse()
      if (a.rating > b.rating) {
        return -1
      }
      if (a.rating < b.rating) {
        return 1
      } else return 0
    },

    sortByDescending (a: any, b: any): number {
      const users = this.$store.state.users
      let sortArray: Array<number> = []
      for (let i = 0; i < users.length; i ++) {
        sortArray.push(i)
      }
      this.sortArray = sortArray
      if (a.rating > b.rating) {
        return 1
      }
      if (a.rating < b.rating) {
        return -1
      } else return 0
    },

    toggleModalView (userData: any): void {
      this.$store.commit('changeModalView', true)
      Object.assign(this.user, userData)
    }
  }
})
</script>

<style scoped lang="scss">

  li {
    margin-top: 36px;
    padding: 14px 14px 14px 14px;
    list-style-type: none;
  }
  ul {
    margin-left: 0;
    padding-left: 0;
  }

  .wrapper-row {
    display: flex;
    justify-content: start;
  }

  .wrapper-column {
    display: flex;
    flex-direction: column;
  }

  .user-item {
    align-items: center;
  }

  .img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .user-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background: #00000012;
      border-radius: 10px;
      cursor: pointer;
    }
    transition-duration: 0.3s;
  }

  .text-user {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
  }

  .user-description {
    margin-left: 24px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #img {
    &0 {
      border: 4px solid #FDD835;
    }
    &1 {
      border: 4px solid #90A4AE;
    }
    &2 {
      border: 4px solid #795548;
    }
  }

  .container {
    margin: auto;
    position: relative;

    width: 100%;
    max-width: 584px;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
