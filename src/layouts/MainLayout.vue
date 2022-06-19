<template>
    <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header class="primary" style="border-bottom: 1px solid lightgray;">
         <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense color="black" icon="menu" />
          <q-toolbar-title><p style="color:black; margin-top: 15px;">{{title}}</p></q-toolbar-title>
          <div style="color: black;">
          <q-btn flat  round dense color="black" icon="search" class="btnshadow"></q-btn>
          <q-btn dense round flat icon="notifications" class="btnshadow" color="black">
      <q-badge color="red" floating transparent>
        4
      </q-badge>
    </q-btn>
            <q-btn flat  round dense color="black" icon="person" class="btnshadow">
              <q-menu style="width:350px">
                <div class="row no-wrap q-pa-md">
                  <div class="column">
                    <div class="text-h6 q-mb-lg">Opções</div>
                       <q-btn outline color="red" label="Profile" />
                        <q-btn flat rounded color="red" label="Acesso Restrito" class="q-mt-sm" />
                  </div>

                  <q-separator vertical inset class="q-mx-lg" />

                  <div class="column items-center">
                    <q-avatar size="72px">
                      <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                    </q-avatar>

                    <div class="text-subtitle3 q-mx-md q-mr-md">Josué Rufino</div>

                    <q-btn
                      color="red"
                      label="Logout"
                      push
                      flat
                      size="sm"
                      v-close-popup
                      outline
                    />
                  </div>
                </div>
              </q-menu>
            </q-btn>
        </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="320"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <p class="pSidebar">Admin</p>
            <q-item  clickable v-ripple to="/admin" class="click">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/alunos" class="click">
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>

              <q-item-section>
                Alunos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="click" to="/vigilantes">
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>

              <q-item-section>
                Vigilantes
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="click" to="/veiculos">
              <q-item-section avatar>
                <q-icon name="directions_car" />
              </q-item-section>

              <q-item-section>
                Veículos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="click" to="/rotas">
              <q-item-section avatar>
                <q-icon name="alt_route"  />
              </q-item-section>

              <q-item-section>
                Rotas
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="click">
              <q-item-section avatar>
                <q-icon name="emoji_transportation" />
              </q-item-section>

              <q-item-section>
                Viagens
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="click">
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>
                Finanças
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="click">
              <q-item-section avatar>
                <q-icon name="inventory_2" />
              </q-item-section>

              <q-item-section>
                Ocorrências
              </q-item-section>
            </q-item>
          </q-list>
        
           <q-list padding>
             <p class="pSidebar">Usuários</p> 
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>

              <q-item-section>
                Ocorrências
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>

              <q-item-section>
                Motoristas
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>

              <q-item-section>
                Encarregados
              </q-item-section>
            </q-item>
           </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/CoolClips_vc022179.png" style="height: 150px;width: 100%; border: 1px solid lightgray;">
          <div class="absolute-bottom " style="height:20px ;">
            <div class="text-weight"><p style="color: white; text-align: center; margin-top: -10px; font-size: 20px;">Transporte escolar</p></div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
      <KeepAlive>
          <router-view />
      </KeepAlive>
    </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'
 import {openURL} from 'quasar'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import IndexPageVue from 'src/pages/IndexPage.vue'
export default {
  components: {
   IndexPageVue
  },
  setup () {
     const $route = useRoute()
      const title = computed(() => {
        if ( $route.fullPath === '/admin') return "Dashboard"
        else if($route.fullPath === '/alunos') return "Alunos"
        else if( $route.fullPath === '/auth') return "Login"
        return ""
      })
    return {
      drawer: ref(false),
      title
    }
  }
}
</script>
<style scoped>
  .pSidebar{
    margin: 10px;
    margin-left: 30px;
    text-transform: uppercase;
    font-weight: 500;
    color: red;
  }
  .btnshadow{
    color: #a5aaad; 
    font-size: 10px;
    border-radius: 50px;
    background: #FFF;
    box-shadow:  2px 2px 5px #d9d9d9, -2px -2px 5px #FFF;
    padding: 7px;
    margin: 3px;
  }
  .click{
    color: black;
  }
</style>