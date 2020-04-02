# FluroUI

Your plugin description...

## Installation

### 1. Install
```
yarn add fluro-ui
# or
npm i fluro-ui --save
```

### 2. Plug-in
```js
import FluroUI from 'fluro-ui'

Vue.use(FluroUI)

new Vue({
  // your vue config
  fluroUISettings: new FluroUI(),
})
```

### 3. Use in your components

```vue
<template>
  <fluro-ui />
</template>

<script>
  export default {
    async created() {
      console.log(this.$fluroUI);
    },
  };
</script>
```

## License
MIT
