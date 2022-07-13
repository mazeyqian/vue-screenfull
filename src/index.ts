/* Vue Screenfull */
// JS Lib https://github.com/rafgraph/fscreen
// JS Lib Demo https://fscreen.rafgraph.dev/
// React Component by fscreen↑ https://github.com/snakesilk/react-fullscreen
// JS Lib https://github.com/sindresorhus/screenfull
// Vue3 Component by screenfull.js↑ https://github.com/mirari/vue-fullscreen/tree/v3
import { isNumber } from 'mazey';
import { defineComponent } from 'vue'; // TypeScript with Options API https://vuejs.org/guide/typescript/options-api.html

export default defineComponent({
  // type inference enabled
  props: {
    name: String,
    msg: { type: String, required: true }
  },
  data() {
    return {
      count: 1
    };
  },
  mounted() {
    this.name; // type: string | undefined
    this.msg; // type: string
    this.count; // type: number
  }
});
