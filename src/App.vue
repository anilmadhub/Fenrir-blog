<template>
  <div id="app">
    <div class="container-fluid">
      <div class="columns hero is-fullheight">
        <div class="column is-one-quarter has-background-grey-light hero is-fullheight">
          <aside class="menu">
            <img src="@/assets/logo.png" alt="Fenrir: Free, open source vue and firebase blog platform" width="50" height="28"> Fenrir
            <ul class="menu-list">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>

          </aside>
        </div>
        <div class="column"><router-view /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
