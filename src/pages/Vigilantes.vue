<template>
    <q-page>
         <q-dialog
      v-model="fullWidth"
      full-width
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Full Width</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">

  </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div style="display: flex; justify-content: space-between; height: 20%; align-items: flex-end;">
      <div>
      <div>
        <q-btn-dropdown
            color="red"
            icon="settings"
            label="Opções"
            @click="onMainClick"
            class="q-ml-md"
          >
        <q-list >
        <q-item clickable v-close-popup @click="onItemClick" to="/Cadastraralunos">
          <q-item-section avatar>
            <q-avatar icon="person_add" color="black" text-color="white" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Novo vigilante</q-item-label>
            </q-item-section>
           </q-item>
          </q-list>

        </q-btn-dropdown>
      </div>
      </div>   
      <div >
         <q-card
          flat
          class="q-mt-lg q-mr-md q-ml-auto"
          style="background: #f3f6f6; border-right: 2px solid red; height:80%; width:200px"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="group" size="25px" color="red"/>
                  <p style="margin-top: 20px; font-weight:500 ">Vigilantes</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500" class="q-ml-xl">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>   
    </div>
      
    <div class="q-pa-md">
        <q-table
            title="Vigilantes"
        :rows="rows"
        row-key="name"
         style="height: 64vh;"
        />
        </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'
const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]
export default {
  setup () {
    return { 
        rows,
       small: ref(false),
      medium: ref(false),
      fullWidth: ref(false),
      fullHeight: ref(false),
       step: ref(1) 
    }
  }
}
</script>