<template>

  <div >
    <v-app-bar
      absolute
      color="#fcb69f"
      class="mb-14 pb-14"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <h1 class="pl-9">
       welcome to login page
      </h1>
      <v-spacer></v-spacer>
    </v-app-bar>

  <div class="mt-16 pt-14">
<v-card
    class="mx-auto"
    height="300"
    width="256"
  >
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
                items: [
          { title: 'Login', icon: 'mdi-login' },
          { title: 'User', icon: 'mdi-account' },
          { title: 'Admin', icon: 'mdi-account-lock' },
        ],
      }
    },
  }
</script>