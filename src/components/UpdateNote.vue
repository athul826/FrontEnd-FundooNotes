<template>

    <v-dialog v-model="show" max-width="650px">
    <v-card style="height:220px;">
<div class="handle_text">
            <div>
                {{ NoteData.title }}
                <input type="text" v-model="title">
                </div>
                <div>
                
                <div>
                     {{ NoteData.description }}
                <input type="text" v-model="description">
               
                </div>
                </div>
            </div>
            <div class="handle_icons "><IconNote v-bind:NoteObject="NoteData" ></IconNote></div>
            <div class="close_buttin">
            <v-card-actions>
                <v-btn color="solid" @click.stop="show = false" @click="submit">Close</v-btn>
            </v-card-actions>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import NoteService from '@/services/userservice/NoteService';
import IconNote from './IconNote.vue';

export default {
    name: 'DialogueNote',
components : { IconNote},
    data() {
        return {

            dialog: false,
            title: '',
            description: ''
        }
    },
    props: {
        value: Boolean,
        NoteData: {},
    },
    methods: {
        submit() {
            console.log("calling submit function");
            console.log(this.title)
            console.log(this.description)
            console.log(this.id);

            let reqData = {
                title: this.title,
                description: this.description,
                id: this.NoteData.id
            }

            console.log(reqData)
            NoteService.prototype.UpdateNotes(reqData).then((responce) => {
                console.log(responce);

            }).catch((error) => {
                console.log(error);
            })
        }
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value)
            },
        },

    },
    title: {
        get() {
            return this.NoteData.title;
        },
        set(value) {
            this.$emit("input", value);
        }

    },
    description: {
        get() {
            return this.NoteData.description;
        },
        set(value) {
            this.$emit("input", value);
        }
    },

}
</script>

<style scoped>
.close_buttin {
  padding-left: 520px;
  margin-top: -57px;
}
.handle_icons {
 display: flex;
flex-direction: row;
gap: 18px;
padding-top: 105px;
/* padding-bottom: 10px; */
padding-left: 13px;

}
.handle_text {
    margin-left: 10px;
    padding-top: 10px;

}
</style>
