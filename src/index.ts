/* Vue Screenfull */

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
