<template v-slot:activator="{ on, attrs }">
  <div
    class="display_note"
    style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    "
  >
    <div
      style="width: 255px; height: 160px; margin: 10px; border: 0px solid black"
      v-for="note in NoteListArray"
      :key="note.id"
    >
      <v-card>
        <div style="padding-left: 15px;padding-top: 5px;">
        <div @click="setNotedata(note)" @click.stop="showScheduleForm = true">
          <span>{{ note.title }}</span>
        </div>
        <div @click="setNotedata(note)" @click.stop="showScheduleForm = true">
          <span>{{ note.description }}</span>
        </div>
        </div>
        <div class="disply_box">
          <NoteIcons v-bind:NoteObject="note"></NoteIcons>
        </div>
      </v-card>
    </div>
    <DialogueNote
      v-bind:NoteData="noteInfo"
      v-model="showScheduleForm"
    ></DialogueNote>
  </div>
</template>
<script>
import DialogueNote from "@/components/UpdateNote.vue";
import NoteIcons from "@/components/IconNote.vue";

export default {
  name: "DisplayNotes",
  components: { NoteIcons, DialogueNote },
  props: ["NoteListArray"],
  data() {
    return {
      showScheduleForm: false,
      noteInfo: "",
    };
  },
  methods: {
    setNotedata(noteObject) {
      console.log(noteObject);
      this.noteInfo = noteObject;
    },
  },
};
</script>
<style scoped>
.disply_box {
  flex-direction: row;
  margin-top: 50px;
  margin-right: 25px;
}
.display_note {
  width: 1100px;
  margin-left: 300px;
  margin-top: 30px;
}
 .ic {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 5px;
} 
</style>
