declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<object, object, any>;
  export default component;
}


declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
