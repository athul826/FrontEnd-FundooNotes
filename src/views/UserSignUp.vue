<template>
  <div class="home">
    <registration></registration>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from '@/components/Registration.vue'
export default {
  name: 'RegistrationUI',
  components: {
    Registration
  }
}
</script>