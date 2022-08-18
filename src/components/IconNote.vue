<template>
  <div class="ic" style="margin right:10px">
    <img
      class="ic"
      style="width: 30px"
      :src="require('../components/Icons/add_alert.svg')"
    />
    <img
      style="width: 30px"
      class="ic"
      :src="require('../components/Icons/person.svg')"
    />
    <img
    @click="colourNote()"
      style="width: 30px"
      class="ic"
      :src="require('../components/Icons/palette.svg')"
    />
    <img
      style="width: 30px"
      margin-right:20px
      class="ic"
      :src="require('../components/Icons/image.svg')"
    />
    <img
    @click="archiveNote()"
      style="width: 30px"
      class="ic"
      :src="require('../components/Icons/archive.svg')"
    />
    <!-- <img style="width:20px" class="ic" :src="require('../components/Icons/more_vert.svg')" />  -->
    <MoreVertMenu v-bind:noteId="NoteObject.id"></MoreVertMenu>
    <!-- <MoreVertMenu></MoreVertMenu> -->
  </div>
</template>

<script>
import NoteService from "@/services/userservice/NoteService";
import MoreVertMenu from "./MoreVertMenu.vue";

export default {
  name: "NoteIcons",
  components: { MoreVertMenu },
  props: {
    NoteObject: {},
    
  },
  methods: {
    archiveNote() {
      console.log("Archive notes calling", this.NoteObject);

      let reqData = {
        // id:this.NoteData.id,
        id: this.NoteObject.id,
        
      };

      console.log(this.NoteObject.id);
      NoteService.prototype
        .archiveNote(reqData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    colourNote() {
      console.log("Colour note is calling", this.NoteObject);

      let reqData = {
        // id:this.NoteData.id,
        id: this.NoteObject.id,
      };

      console.log(this.NoteObject.id);
      NoteService.prototype
        .colourNote(reqData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style scoped>
.ic {
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 13px;
}
</style>
