<template>
  <div>
    <div>
      <CreateNotes></CreateNotes>
      <DisplayNotes v-bind:NoteListArray="NotesArray"></DisplayNotes>
    </div>
  </div>
</template>

<script>
import CreateNotes from "@/components/CreateNotes.vue";
import DisplayNotes from "@/components/DisplayNotes.vue";
import NoteService from "@/services/userservice/NoteService";

export default {
  name: "GetAllNotes",
  components: {
    CreateNotes,
    DisplayNotes,
  },
  data() {
    return {
      NotesArray: [],
    };
  },
  methods: {
    GetAllListNotes() {
      console.log("GetAllNotes called");
      NoteService.prototype
        .getAllNoteService()
        .then((data) => {
          console.log("Response from getAllNotes", data);
          this.NotesArray = data.data.notes;
          console.log(this.NotesArray);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.GetAllListNotes();
  },
};
</script>