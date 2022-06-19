<template>
  <div class="full-width " >
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header 
        elevated
        style="background-color: #26558A; height: 60px;"
        >
        <q-toolbar >
          <q-avatar style="width: 60px; height: 60px;">
            <img src="../assets/IMG_5297.ico"/>
          </q-avatar>

          <q-toolbar-title>Transporte escolar</q-toolbar-title>
          <q-btn flat round dense icon="search" ></q-btn>
           <q-btn dense round flat icon="notifications">
            <q-badge color="red" floating transparent>
              4
            </q-badge>
           </q-btn>
          <q-btn flat round dense icon="person" ></q-btn>
        </q-toolbar>
      </q-header>

      <q-footer style="height:80px" class="bg-grey-11">
        <q-toolbar>
           <q-tabs
        v-model="tab"
        class="text-teal absolute-center q-mt-md bg-grey-11 "
        style="color: black;"
      >
        <q-route-tab name="mails" icon="person" label="Aluno" to="/alunoencarregado"/>
        <q-route-tab name="alarms" icon="fork_right" label="Rota"  />
        <q-route-tab name="movies" icon="pan_tool" label="Presença" />
        <q-route-tab name="inicio" icon="home" label="Inicio" to="/encarregado" />
         <q-route-tab name="mails1" icon="bus_alert" label="Faltas" />
        <q-route-tab name="alarms1" icon="payments" label="Pagamentos" />
        <q-route-tab name="movies1" icon="help" label="Ajuda" />
      </q-tabs>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('mails')
    }
  }
}
</script>
