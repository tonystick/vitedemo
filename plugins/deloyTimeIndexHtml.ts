import { format } from 'date-fns';
import { Plugin } from 'vite';

const deployTimeIndexHtmlPlugin = (): Plugin => ({
  name: 'deploy-time-index-html',
  // apply: "build",
  transformIndexHtml(html) {
    const t = format(new Date(), 'yyyy-MM-dd_HH:mm:ss');
    return html.replace('<html', `<html _t_=${t}`);
  },
});

export default deployTimeIndexHtmlPlugin;
