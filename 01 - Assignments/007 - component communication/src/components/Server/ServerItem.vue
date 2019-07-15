<template>
      <li class="list-group-item" @click="selectServer()">Server #{{ id }} - {{status}}</li>
  </template>

<script>
import EVENT_IDS from './event_ids'
import {eventBus} from '../../main';

export default {
  props: {
    id: Number,
    status: String
  },
  methods:{
    selectServer(){
      eventBus.$emit(EVENT_IDS.SELECT_SERVER, this.id, this.status);
    }
  }
}
</script>

<style scoped>
  li{
    cursor: pointer;
  }
  li:hover{
    background: #f0f0f0;
  }
</style>
