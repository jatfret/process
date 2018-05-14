<template>
  <div class="board">
    <div>
      <input type="text" :model="count" @input="updateCount"/>
      {{count}}
    </div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <div>doneTodosCount: {{doneTodosCount}}</div>
    <div id="jsplumb-demo">
      <div id="one"></div>
      <div id="two"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import jsplumb from 'jsplumb'

export default {
  data: function(){
    return {
      searchValue: ''
    }
  },
  computed: {
    localState() { 
      return this.$data.searchValue
    },
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters([
      'doneTodosCount'
    ])
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    updateCount(e){
      this.$store.commit('updateCount', e.target.value)
    },
    test(e){
      this.$store.count = 10
    }
  },
  mounted(){
    const j = jsplumb.jsPlumb.getInstance({
      Connector: "Flowchart",
      Anchor: "Bottom",
      Endpoint: [ "Dot", { radius: 2 }],
      ConnectionOverlays: [
        [ "Arrow", { location: 0, width: 10, length: 7, foldbackPoint: 0.62, direction:-1 }]
      ],
      container: 'jsplumb-demo'
    });
    j.draggable("one")
    j.draggable("two")
    j.connect({source: "one", target: "two" });

    j.on(window, "resize", j.repaintEverything);
  }
}
</script>
<style lang="less" scoped>
  #jsplumb-demo {
    width: 100%;
    height: 500px;
    background: #fafafa;
    background-image:
        linear-gradient(rgba(180,180,180,.8) 1px, transparent 0),
        linear-gradient(90deg, rgba(180,180,180,.8) 1px, transparent 0),
        linear-gradient(white 1px, transparent 0),
        linear-gradient(90deg, white 1px, transparent 0);
    background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
  }
  #one {
    height: 100px;
    width: 100px;
    border: 1px solid red;
  }
  #two {
    margin-top: 50px;
    width: 50px;
    height: 50px;
    border: 1px solid red;
  }
</style>


