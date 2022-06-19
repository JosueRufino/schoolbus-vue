<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
      style="height: 85vh;"
    >
      <q-step
        :name="1"
        title="Cadastrar Encarregado"
       icon="person"
        :done="step > 1"
        color="red"
        style="height: 60vh;"
      >
      <q-form>
       <div class="q-pa-md">

          <div class="row">
            <div class="col">
              <q-input outlined v-model="text" dense label="Outlined" color="black" class="q-ml-sm q-mt-sm"/>
            </div>
            <div class="col">
               <q-input outlined v-model="text" dense label="Outlined" color="black" class="q-ml-sm q-mt-sm"/>
            </div>
          </div>

          <div class="row">
            <div class="col">
               <q-input outlined v-model="text" label="Outlined" dense color="black" class="q-ml-sm q-mt-sm"/>
            </div>
            <div class="col">
               <q-input outlined v-model="text" label="Outlined" dense color="black"  class="q-ml-sm q-mt-sm"/>
            </div>
            <div class="col">
               <q-input outlined v-model="text" label="Outlined" dense color="black" class="q-ml-sm q-mt-sm"/>
            </div>
          </div>
          <div class="row">
            <div class="col">
               <q-input outlined v-model="text" label="Outlined" dense color="black" class="q-ml-sm q-mt-sm"/>
            </div>
            <div class="col">
               <q-input outlined v-model="text" label="Outlined" dense color="black" class="q-ml-sm q-mt-sm"/>
            </div>
            <div class="col">
               <q-input outlined v-model="text" label="Outlined" dense color="black" class="q-ml-sm q-mt-sm"/>
            </div>
          </div>
          

        </div>
      </q-form>  
      </q-step>


      <q-step
        :name="3"
        title="Cadastrar Aluno"
        icon="person"
        color="red"
          style="height: 60vh;"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="red" :label="step === 3 ? 'Cadastrar' : 'Cadastrar'" />
          <q-btn v-if="step > 1" flat color="" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm bg-grey-11" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      step: ref(1)
    }
  }
}
</script>