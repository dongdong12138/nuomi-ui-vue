import { createApp, h } from 'vue';
import NDialog from './NDialog.vue';

export const openDialog = options => {
  const { title, content, ok, cancel, closeOnClickOverlay } = options;

  const div = document.createElement('div');
  document.body.appendChild(div);

  const closeDialog = () => {
    app.unmount(div);
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
