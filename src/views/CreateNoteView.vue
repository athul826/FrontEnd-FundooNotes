<template>
  <div class="home">
    <CreateNotes></CreateNotes>
  </div>
</template>

<script>
import CreateNotes from '@/components/CreateNotes.vue'

export default {
  name: 'CreateNotesUI',
  components: {
    CreateNotes,
   }
}

</script>