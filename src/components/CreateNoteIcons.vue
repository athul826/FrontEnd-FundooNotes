<template>
  <div class="ic" style="margin right:10px">
    <img
      class="ic"
      style="width: 25px"
      :src="require('../components/Icons/add_alert.svg')"
    />
    <img
      style="width: 25px"
      class="ic"
      :src="require('../components/Icons/person.svg')"
    />
    <img
      style="width: 25px"
      class="ic"
      :src="require('../components/Icons/palette.svg')"
    />
    <img
      style="width: 25px"
      margin-right:20px
      class="ic"
      :src="require('../components/Icons/image.svg')"
    />
    <img
      style="width: 25px"
      class="ic"
      :src="require('../components/Icons/archive.svg')"
    />
    <img
      style="width: 25px"
      class="ic"
      :src="require('../components/Icons/more_vert.svg')"
    />
    
  </div>
</template>

<script>
export default {
  name: "CreateNoteIcons",
};
</script>

<style scoped>
.ic {
  display: flex;
  flex-direction: row;
  gap: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 6px;
}
</style>
