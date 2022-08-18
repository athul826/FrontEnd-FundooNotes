<template>
  <div class="main_Note_box">
    <v-container class="CreateNew">
      <v-card
        v-if="!show"
        @click="open"
        elevation="11"
        class="mx-auto pl-3"
        height="48"
        width="800"
      >
        <v-text-field
          placeholder="take a note.."
          pl-3
          v-model="noteDetails.title"
          solo
          flat
          hide-details
          
        >
        </v-text-field>
        <div>
          <div class="button">
            <button
              class="iconbutton"
              style="border: none; margin-left: 50px; margin-right: 5px"
              
            >
              <img class="takenoteicons" src="../assets/check_box.svg" />
            </button>
            <button class="iconbutton" style="border: none; margin-right: 15px;margin-left: 15px;">
              <img class="takenoteicons" src="../assets/brush.svg" />
            </button>
            <button
              class="iconbutton"
              style="border: none; margin-right: -350px"
            >
              <img class="takenoteicons" src="../assets/image.svg" />
            </button>
          </div>
        </div>
      </v-card>
      <v-card v-if="show">
        <div>
          <v-text-field
            placeholder="Title"
            class="pt-0"
            v-model="noteDetails.title"
            solo
            flat
            hide-details
          >
          </v-text-field>

          <v-text-field
            placeholder="take a note.."
            class="pt-0"
            v-model="noteDetails.descreption"
            solo
            flat
            hide-details
          ></v-text-field>
          <div class="ft">
            <CreateNoteIcons></CreateNoteIcons>
          </div>
          <div class="clse_button">
            <v-btn small color="white" elevation="0" @click="CreateNotes()"
              >close</v-btn
            >
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import NoteService from "@/services/userservice/NoteService";
import CreateNoteIcons from "./CreateNoteIcons.vue";
export default {
  name: "CreateNotesComponent",
  components: { CreateNoteIcons },
  data() {
    return {
      noteDetails: {
        Title: "",
        Descreption: "",
      },
      show: false,
    };
  },

  methods: {
    open() {
      this.show = !this.show;
    },

    CreateNotes() {
      console.log(this.noteDetails.title);
      console.log(this.noteDetails.descreption);
      let reqData = {
        title: this.noteDetails.title,
        description: this.noteDetails.descreption,
      };
      this.show = !this.show;
      NoteService.prototype
        .createNoteService(reqData)
        .then((data) => {
          console.log("Response from createNotes", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.main_Note_box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
}

.close {
  width: 50px;
  height: 100px;
  padding-top: -50px;
  padding-left: 450px;
  padding-bottom: 100px;
}
.iconbutton {
  margin-bottom: 1px;
  margin-top: -100px;
  margin-left: 5px;
  
}
.takenoteicons {
  width: 25px;
  height: 25px;
  opacity: 0.50;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.CreateNew {
  width: 600px;
  margin-left: 450px;
  margin-top: -40px;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  padding-right: 5px;
  
}
.clse_button {
  padding-left: 500px;
  margin-top: -20px;
}
</style>
