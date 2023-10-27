<template>
    <v-container >
        <v-row
            no-gutters
            justify="space-between"
        >
            <v-col cols="12">
                <v-container >
                    <v-row
                        no-gutters
                    >
                        <v-col align-self="center" >
                            <v-sheet class="pa-2 ma-2">
                                <v-autocomplete
                                    v-model="selectfilter"
                                    :disabled="isUpdating"
                                    :items="sites"
                                    chips
                                    closable-chips
                                    color="blue-grey-lighten-2"
                                    item-title="location"
                                    item-value="location"
                                    label=""
                                    multiple
                                    variant="underlined"
                                >
                                    <template v-slot:chip="{ props, item }">
                                        <v-chip
                                            v-bind="props"
                                            :prepend-avatar="item.raw.avatar"
                                            :text="item.raw.name"
                                        ></v-chip>
                                    </template>

                                    <template v-slot:item="{ props, item }">
                                        <v-list-item
                                            v-bind="props"
                                            :title="item?.raw?.name"
                                            :subtitle="item?.raw?.descripcion"
                                        ></v-list-item>
                                    </template>
                                </v-autocomplete>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col
                v-for="(card, index) in cards"
                :key="index"
                sm="12"
                md="5"
                xl="4"
            >
                <v-card
                    class="mx-auto my-4"
                    max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    :src="card.image_path"
                    cover
                    >
                        <v-card-title>{{ card.name }}</v-card-title>
                    </v-img>

                    <!-- <v-card-subtitle class="pt-4">
                        {{ card.subtitle }}
                    </v-card-subtitle> -->

                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-information"></v-icon> Tiempo estimado: {{ card.latest_report ? `${card.latest_report?.approx_vehicle * 2} min` : '-' }}
                        </p>
                        <p>
                            <v-icon icon="mdi-antenna"></v-icon> aprox. en fila: {{ card.latest_report ? `${card.latest_report?.approx_vehicle} vehiculos` : '-'  }} 
                        </p>

                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="blue-accent-3" variant="flat" rounded="xl" :href="'/informacion'">
                        Informacion
                    </v-btn>

                    <v-btn color="yellow-accent-4" rounded="xl" variant="flat" :href="'/miUbicacion'">
                        Estoy aqui
                    </v-btn>
                    </v-card-actions>
                </v-card>


            </v-col>
        <v-row  no-gutters class="paginationHome">
            <v-col align-self="center" cols='12'>
                <div class="text-center">
                    <v-pagination
                    v-model="page"
                    :length="totalPages"
                    @click="handlePageClick"
                    :disabled="selectfilter[0] !== undefined"
                    ></v-pagination>
                </div>
            </v-col>
        </v-row>
        </v-row>
    </v-container>
</template>

<script>
import { getAvailableStations } from "@/services/stationServices"
// const data = [
//   {
//   title: "Whitehaven Beach",
//   subtitle: "Number 10",
//   text: "1h",
//   text2: "10",
//   imageSrc:
//     "https://th.bing.com/th/id/R.ad7db4f4c13cb2e070eccc4865def5f5?rik=%2bDExZDKQ9m9TMw&riu=http%3a%2f%2frevistamagazzine.com%2fwp-content%2fuploads%2f2019%2f01%2fimg_4679.jpg&ehk=aHOqCV06wF%2f6hTIbBx4g%2f8tAzZbpCCFetRJuSLyPEF8%3d&risl=&pid=ImgRaw&r=0",
//   },
// ];
 export default {
  data () {
    return {
      data: [],
      selectfilter: [],
      sites: [],
      page: 1,
      cards: [],
    }
  },
  async mounted() {
    // this.cards = await this.loadData(["undefine"])
    this.loadPagination(1)
    // this.data = await this.loadData(["undefine"])
    this.sites = await this.loadSites()
  },
  computed: {
    totalPages() {
      const len = this.data.length >10 ? this.data : 10
      const groups = Math.ceil(this.data.length / 10)

      return Math.ceil(+groups) //obtener el tamano del pagnation
    },
  },
  methods: {
    handlePageClick(pageNumber) {
      if(!this.selectfilter[0]){
        this.page = +pageNumber.srcElement.innerText;
        this.loadPagination(+pageNumber.srcElement.innerText)
      }
      
    },
    async loadData(e) {
      const { data } = await getAvailableStations("")
  
      if(!this.cards[0] || e[0]==="undefine"){
        this.cards = data
      }else if(e){
        this.cards = data.filter(objeto => e.some(item => item.name === objeto.name));
      }
      return data
    },
    async loadSites() {
      const { data, status } = await getAvailableStations("")
      // if(data){ 
      //   data = data.map((e)=> {
      //     if(e){
      //       return(
      //           { name: e.name, descripcion: e.neighborhood.city }
      //         )
      //     }
      //   });
      // }
    
      return data
    },
    async loadPagination(n) {
      const { data } = await getAvailableStations("")
      console.log(data)
      data.latest_report?.approx_vehicle 

      if(!this.data[0]){
        this.data = data
      }
      let startIndex = (n - 1) * 10;
      let endIndex = startIndex + 10;
      this.cards = data.filter((objeto, index) => index >= startIndex && index < endIndex);
    },
  },
  watch: {
    selectfilter(newSelectFilter){
      if(newSelectFilter[0]){
        this.loadData(newSelectFilter)
      }else{
        this.loadData(["undefine"])
      }
    },
  },
}
</script>

<style>
.paginationHome{
    width: 100vw;
}
</style>
