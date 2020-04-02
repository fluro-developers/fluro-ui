import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class FluroUI {
  constructor(options?: FluroUIOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface FluroUIOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $fluroUI: FluroUI;
    __$FluroUIInstance: FluroUI;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    fluroUISettings?: FluroUIOptions | FluroUI
  }
}
