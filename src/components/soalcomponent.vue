<template>
  <div class="hello">

    <h1 :class="[nilai > 1 ? 'Berhasil' : 'gagal']">Nilai : {{ nilai }}</h1>
      <h2 v-if="nilai > 1" style="color:green">Jagoan si eta euy</h2>
      <h2 v-else style="color:red">Alah siahdud eweuh kabisa :v</h2>
      <div v-for="(soal, indexsoal) in questions">
        <h2>{{indexsoal+1}}) {{soal.deskripsi}} </h2>
        <div v-for="(pilihans, indexpiilhan) in soal.pilihan">
          <input type="radio" @click="checkAnswer(indexsoal, indexpiilhan)" :value="pilihans[0]" :name="indexsoal">
          <span v-text="pilihans[0]"></span>
        </div>
      </div>

      <h3>Jawaban Yang Benar : </h3>
      <ul>
        <li v-for="no_soal in jawabanBenar">No. {{ no_soal+1 }}</li>
      </ul>

  </div>

</template>

<script>


import SoalComponent from '@/components/soalcomponent'
export default {
    name:'Controlleroriginal',
    components:{
      SoalComponent
    },
    data() {
      return{
        nilai: 0,
        jawabanBenar : [],
        jawabanSalah : [],
        questions : [
          {
            deskripsi : "Kamu siapa?",
            pilihan : [
              ["Sugan kamu saha", true],
              ["Irga putra"],
              ["Jokowi"],
              ["Prabowo"]
            ]
          },
          {
            deskripsi : "Untuk apa tugas ini dibuat?",
            pilihan : [
              ["Gabut"],
              ["Males"],
              ["Mengerjakan tugas PWD", true],
              ["hayang we"]
            ]
          },
          {
            deskripsi : "Saya siapa?",
            pilihan : [
              ["Komodo"],
              ["Orangutan"],
              ["Akbar", true],
              ["Buaya"]
            ]
          },
          {
            deskripsi : "Dimana letak smkn 4 bandung?",
            pilihan : [
              ["Jln peta"],
              ["Jln jalanan"],
              ["Jl Kliningan", true],
              ["dimana mana hatiku senang"]
            ]
          }
        ]
      }
    },
    methods:{
      checkAnswer(indexsoal, indexpiilhan) {
          if(this.questions[indexsoal].pilihan[indexpiilhan][1]){
            if(this.jawabanBenar.indexOf(indexsoal)== -1){
              this.jawabanBenar.push(indexsoal);
            }
            if(this.jawabanSalah.indexOf(indexsoal)!= -1){
              this.jawabanSalah.splice(this.jawabanSalah.indexOf(indexsoal),1);
            }
          }else{
            if(this.jawabanBenar.indexOf(indexsoal)!= -1){
              this.jawabanBenar.splice(this.jawabanBenar.indexOf(indexsoal),1);
              this.jawabanSalah.push(indexsoal);
            }else if(this.jawabanSalah.indexOf(indexsoal)!= -1){

            }else{
              this.jawabanSalah.push(indexsoal);
            }
          }
          this.nilai = this.jawabanBenar.length;
        }
    }
}
</script>

<style scoped>
</style>
