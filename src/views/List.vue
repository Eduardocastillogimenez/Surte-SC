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
                    :src="card.imageSrc"
                    cover
                    >
                        <v-card-title>{{ card.title }}</v-card-title>
                    </v-img>

                    <!-- <v-card-subtitle class="pt-4">
                        {{ card.subtitle }}
                    </v-card-subtitle> -->

                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-information"></v-icon> Tiempo estimado: {{ card.text }}
                        </p>
                        <p>
                            <v-icon icon="mdi-antenna"></v-icon> aprox. en fila: {{ card.text2 }}
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
                    ></v-pagination>
                </div>
            </v-col>
        </v-row>
        </v-row>
    </v-container>
</template>

<script>
import { getAvailableStations } from "@/services/stationServices"
const data = [
  {
  title: "Whitehaven Beach",
  subtitle: "Number 10",
  text: "1h",
  text2: "10",
  imageSrc:
    "https://th.bing.com/th/id/R.ad7db4f4c13cb2e070eccc4865def5f5?rik=%2bDExZDKQ9m9TMw&riu=http%3a%2f%2frevistamagazzine.com%2fwp-content%2fuploads%2f2019%2f01%2fimg_4679.jpg&ehk=aHOqCV06wF%2f6hTIbBx4g%2f8tAzZbpCCFetRJuSLyPEF8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
  title: "Estacion de servicio Los Agustinos",
  subtitle: "",
  text: "2dias",
  text2: "100",
  imageSrc:
    "https://okdiario.com/img/motor/2017/06/20/gasolineras.jpg",
  },
  {
  title: "Card 3",
  subtitle: "Subtitle 3",
  text: "5h",
  text2: "20",
  imageSrc:
    "https://th.bing.com/th/id/R.e4122cecf82cd04eb0f8f91b9974ee00?rik=0Y1ggdPn24okpg&riu=http%3a%2f%2fwww.pressdigital.es%2fimages%2fshowid%2f3709903&ehk=cRlN5Vb77bw05EFLb6r%2bDfJowBr56dv4eqaqaYibl5k%3d&risl=&pid=ImgRaw&r=0",
  },
  {
  title: "Card 4",
  subtitle: "Subtitle 4",
  text: "10h",
  text2: "50",
  imageSrc:
    "https://www.elsoldesanluis.com.mx/incoming/ozmfvg-gasolineras-3.jpeg/ALTERNATES/LANDSCAPE_1140/gasolineras%20%20(3).jpeg",
  },
];
 export default {
  data () {
    return {
      selectfilter: [],
      sites: [
        { name: 'Lugar 1', descripcion: 'descripcion site' },
        { name: 'otro lugar', descripcion: 'descripcion ee site' },
        { name: 'El espacio', descripcion: 'descripcion fawf site' },
        { name: 'La nieve', descripcion: 'descripcion aa  site' },
        { name: 'QUE SE YO', descripcion: 'decion site' },
      ],
      page: 1,
      cards: [],
    }
  },
  mounted() {
    this.cards = this.loadData();
  },
  computed: {
    totalPages() {
      return Math.ceil(4); //obtener el tamano del pagnation
    },
  },
  methods: {
    handlePageClick(pageNumber) {
      this.page = +pageNumber.srcElement.innerText;
      console.log(+pageNumber.srcElement.innerText);
    },
    handleLocationClick(e) {
      console.log(e);
    },
    loadData(e) {
      getAvailableStations();
      if(!this.cards[0] || e[0]==="undefine"){
        this.cards = data;
      }else if(e){
        this.cards =  data.filter(objeto => objeto.title === e);
      }
      return data;
    },
  },
  watch: {
    selectfilter(newSelectFilter){
      if(newSelectFilter[0]){
        this.loadData(newSelectFilter[0].name)
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
