<template>
<q-page class="absolute-center" style=" width: 60%">
  <div class="q-pa-md" flat>
    <div class="q-gutter-y-md" style="width: 100%;" flat>
      <q-card style="height: 75vh;" flat="">
        
        <q-tabs
          v-model="tab"
          align="justify"
          flat
        >
          <q-tab name="mails" icon="person" label="Dados do aluno" />
          <q-tab name="alarms" icon="my_location" label="Localização do aluno" />
          <q-tab name="movies" icon="map" label="Mapa" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated class="center">
          <q-tab-panel name="mails" style="height: 70vh; display: flex; justify-content: center; widows: 100%;" >
            <div class="q-mt-sm " style="width: 50%;" >
                <q-avatar style=" display: flex; justify-content: center; width: 100%; height: 80px; ">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png"  style="width: 80px; ">
                 </q-avatar>
                  <q-item-label class="q-mt-md center bold text-h5" style=" text-align: center;">Josué Quintas Rufino</q-item-label>
                  <div style="display: flex; justify-content: space-between; width: 100%;" class="q-mt-lg nome" >
                <div class="text-weight-bold">
                    <p>Nascimento:</p>
                    <p>Sexo:</p>
                    <p>Nº do processo:</p>
                    <p>Turno:</p>
                    <p>Turma:</p>
                    <p>Sala:</p>
                    <p>Nível:</p>
                    <p>Viagem:</p>
                </div>
                <div >
                    <p>20/08/2002</p>
                    <p>M</p>
                    <p>62296</p>
                    <p>Tarde</p>
                    <p>IG13A</p>
                    <p>80</p>
                    <p>Médio</p>
                    <p>Ida-Volta</p>
                </div>
            </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  </q-page>
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

<style scoped>
.nome p{
    margin-bottom: 10px;
}
</style>