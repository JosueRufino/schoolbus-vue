<template>
  <q-page >
    <div class="row q-px-xl q-gutter-md flex" style="display:flex; align-items:center; " >
      <div>
        <img style="height: 150px; object-fit: cover" src="../assets/adm.ico"/>
      </div>
      <div class="q-mt-xl">
        <p style="color: red; font-size: 1.6rem; font-weight: 500;">Olá, admin Josué Rufino</p>
        <p style="color: gray; font-size: .9rem; margin-top:-15px">Seja bem-vindo ao seu painél</p>
      </div>
    </div>
    
    <div class="row q-pa-md q-col-gutter-sm  q-gutter-y-sm">
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="group" size="25px" color="red"/>
                  <p style="margin-top: 20px; font-weight:500 ">Administradores</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="group" size="25px" color="blue"/>
                  <p style="margin-top: 20px; font-weight:500 ">Alunos</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="group" size="25px" color="brown"/>
                  <p style="margin-top: 20px; font-weight:500 ">Motoristas</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="group" size="25px" color="black"/>
                  <p style="margin-top: 20px; font-weight:500 ">Vigilantes</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>  
     <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="directions_car" size="25px" />
                  <p style="margin-top: 20px; font-weight:500 ">Veículos</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="alt_route" size="25px" color="grey"/>
                  <p style="margin-top: 20px; font-weight:500 ">Rotas</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="inventory_2" size="25px" color="cyan"/>
                  <p style="margin-top: 20px; font-weight:500 ">Ocorrências</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
        <q-card
          flat
          class=""
          style="background: #f3f6f6; border-right: 2px solid red; height: 16vh;"
        >
          <q-card-section >
              <div  style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <q-icon name="payments" size="25px" color="green"/>
                  <p style="margin-top: 20px; font-weight:500 ">Pagamentos</p>
                </div>
                <p style="margin-top: 45px; font-size: 1rem; font-weight: 500">1</p>
              </div>
          </q-card-section>
        </q-card>
      </div>    
  </div>
  <div id="chart" padding class="q-ml-md q-mb-sm q-mr-xl" style="display: flex; width: 97%">
    <div style="width: 100%; box-shadow:  2px 2px 5px #2222, -2px -2px 5px #2222; padding:5px">
      <apexchart background="#f3f6f6" type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import {ChartDashboard} from '../components/charts/ChartDashboard.vue'
export default defineComponent({
  name: 'IndexPage',
  components:{
    ChartDashboard
  },
  data(){
    return{
    series: [{
            name: 'Inflation',
            data: [1, 1, 4.0, 10, 4, 3, 3, 5]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val ;
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
            
            xaxis: {
              categories: ["Admins", "Alunos", "Motoristas", "Vigilantes", "Veiculos", "Rotas", "Ocorrências", "Pagamentos"],
              position: 'bottom',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#f3f6f6',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }
            
            },
            title: {
              text: 'Monthly Inflation in Argentina, 2002',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#f3f6f6'
              }
            }
          },
          series1: [44, 55, 41, 17, 15],
          chartOptions1: {
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },

    }
  }
})
</script>
