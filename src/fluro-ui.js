import { devMode, registerVuexStore } from './utils';

// Import your additional components here
import FluroUIComponent from './fluro-ui-component.vue';

export default class FluroUI {
  // HERE IS YOUR PLACE TO DEVELOP YOUR COMPONENT

  constructor(options = {}) {
    const defaults = {
      // This is your plugin's options. It will be accessible with this.options
      accessorName: '$fluroUI'
    };
    this.options = { ...defaults, ...options };
  }

  // Some instance methods that you can access from this.$fluroUI
  world() {
    return 'world';
  }

  static register = (Vue, options, store) => {
    console.log('Here is the options of the component', options);
    console.log('Here is the store of the app', store);
    // You can use `this.options` property to access options.

    // Delete this line if your plug-in doesn't provide any components
    Vue.component('FluroUI', FluroUIComponent);

    // Vue.directive('your-custom-directive', customDirective);

    // registerVuexStore(store, 'counterStore', {
    //   namespaced: true,
    //   state: { counter: 0 },
    //   getters: {
    //     counter: state => state.counter
    //   },
    //   actions: {
    //     increment: ({ commit }) => commit('increment')
    //   },
    //   mutations: {
    //     increment: state => state.counter++
    //   }
    // });
  };

  // Some lifecycle hooks to add on mixin
  static mixin = () => ({
    mounted() {
      console.log('Hey! I am running on every mount, please remove me!');
      console.log(this.$store);
    }
  });

  ////////////////////////////////////
  // YOU MAY NOT NEED TO EDIT BELOW //
  ////////////////////////////////////

  initialized = false;

  init(Vue, store) {
    if (devMode() && !install.installed) {
      console.warn(
        `[fluro-ui] not installed. Make sure to call \`Vue.use(FluroUI)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    FluroUI.register(Vue, this.options, store);
    this.initialized = true;
  }
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn('[fluro-ui] already installed. Vue.use(FluroUI) should be called only once.');
    }
    return;
  }

  Vue.mixin({
    /**
     * FluroUI init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { fluroUISettings, store, parent } = this.$options;

      let instance = null;
      if (fluroUISettings) {
        instance =
          typeof fluroUISettings === 'function'
            ? new fluroUISettings()
            : new FluroUI(fluroUISettings);
        // Inject store
        instance.init(Vue, store);
      } else if (parent && parent.__$FluroUIInstance) {
        instance = parent.__$FluroUIInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        // Store helper for internal use
        this.__$FluroUIInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    ...FluroUI.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[fluro-ui] is plugged in.');
  }
}

FluroUI.install = install;
