<template>
  <div class="col-xs-12 col-sm-6">
    <p>Current Id : {{currentServerId}}</p>
    <ul class="list-group">
      <app-server-item
        v-for="aServer in servers"
        :key="aServer.id"
        :id="aServer.id"
        :status="aServer.status"
      />
    </ul>
  </div>
</template>

<script>
import EVENT_IDS from './event_ids'
import {eventBus} from '../../main';
import ServerItem from './ServerItem.vue';

export default {
  components:{
    'app-server-item': ServerItem
  },
  data(){
    return {
      currentServerId: 1,
      servers : [
        {id: 1, status: 'Normal'},
        {id: 2, status: 'Critical'},
        {id: 3, status: 'Normal'},
        {id: 4, status: 'Unknown'},
        {id: 5, status: 'Critical'},
      ]
    }
  },
  created(){
    eventBus.$on(EVENT_IDS.UPDATE_STATUS, (id, status)=>{
      const aServer = this.servers.find(item => item.id === id);
      aServer.status = status;

      eventBus.$emit(EVENT_IDS.SELECT_SERVER, id, status);
    });
  }
}
</script>

<style>
</style>
