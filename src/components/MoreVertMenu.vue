<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          <img style="width:20px" class="ic" :src="require('../components/Icons/more_vert.svg')" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item
        
        >
          <v-list-item-title @click="deleteNote()">deleteNote </v-list-item-title>
          <v-list-item-title>Add Label</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
//import NoteService from "@/services/userService/NoteService";

import NoteService from '@/services/userservice/NoteService';

  
  export default {
    data: () => ({
      items: [
        { title: 'Delete Note' },
        { title: 'Add Label' },
        { title: 'Add Drawing' },
        { title: 'Make a copy' },
        { title: 'Show CheckBox' },
        { title: 'Copy to Google Docs' },
      ],
    }),
    props:{
      noteId:Number
    },
    methods:{
    deleteNote(){
      //call api
     // let reqData={id:this.noteId}
     let reqData = {
       id:this.noteId
       
      };

      console.log(this.noteId)
      NoteService.prototype
        .deleteNote(reqData)
        .then((responce) => {
          console.log(responce);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    }
  }
  
</script>