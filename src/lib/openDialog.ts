import { createApp, h } from 'vue';
import type { VNode } from 'vue';
import NDialog from './NDialog.vue';

interface InterOptions {
  title: string | VNode;
  content: string | VNode;
  ok?: Function;
  cancel?: Function;
  closeOnClickOverlay?: boolean;
}

export const openDialog = (options: InterOptions) => {
  const { title, content, ok, cancel, closeOnClickOverlay } = options;

  const div = document.createElement('div');
  document.body.appendChild(div);

  const closeDialog = () => {
    app.unmount();
    div.remove();
  };

  const app = createApp({
    render() {
      return h(NDialog, {
        visible: true,
        'onUpdate:visible': visible => {
          if (visible === false) closeDialog();
        },
        ok,
        cancel,
        closeOnClickOverlay
      }, { title, content });
    }
  });
  app.mount(div);
};
