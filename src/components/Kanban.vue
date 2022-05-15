<script setup lang="ts">
defineProps<{
  prefix: string
}>()
</script>

<template>
  <q-input v-model="name" maxlength="12" class="p-0 w-full" :borderless="true" input-class="name q-ml-md" :input-style="{width:`${name.length/2}em`}">
    <template v-slot:before>
      <div class="prefix">
        {{ prefix }}
      </div>
    </template>
    <template v-slot:after>
      <q-icon name="refresh" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<style scoped>
@import '@/assets/base.scss';
.q-input::v-deep .name, .prefix {
  font-weight: 500;
  font-size: 2.6rem;
  color: hsla(160, 100%, 37%, 1);
}
.q-input::v-deep .name{
  min-width: 100px;
}
</style>

<script lang="ts">
export default {
  data: ()=>({
    name: Math.random().toString().slice(2, 8),
  })
}
</script>