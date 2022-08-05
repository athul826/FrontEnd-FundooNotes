<template>
  <div class="main_Note_box">
    <v-container class="CreateNew">
      <v-card
        v-if="!show"
        @click="open"
        elevation="10"
        class="mx-auto pl-3"
        height="50"
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
              style="border: none; margin-left: 20px; margin-right: 20px"
            >
              <img class="takenoteicons" src="../assets/check_box.svg" />
            </button>
            <button class="iconbutton" style="border: none; margin-right: 20px">
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
            <NoteIcons></NoteIcons>
          </div>
          <div class="cls">
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
// import NoteService from "@/services/userservice/NoteService";
import NoteIcons from "@/components/IconNote.vue";
export default {
  name: "CreateNotesComponent",
  components: { NoteIcons },
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
.CN_Functions {
  width: 497px;
  height: 35px;
  padding-top: 2px;
}
.functionity_setup {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
}
.takenoteicons {
  width: 25px;
  height: 22px;
  opacity: 0.56;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.ft {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 100px;
  margin-top: 10px;
  margin-right: 10px;
}
.CreateNew {
  width: 600px;
  margin-left: 450px;
  margin-top: 5px;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  padding-right: 190px;
}
.cls {
  padding-left: 450px;
  margin-top: -20px;
}
</style>
