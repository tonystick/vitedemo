import * as allIcons from '@element-plus/icons-vue';
import { Plugin } from 'vue';
type IconKey = keyof typeof allIcons;
const plugin: Plugin = {
    install: (app, option) => {
        const keys = Object.keys(allIcons) as IconKey[];
        keys.forEach(key => {
            const component = allIcons[key];
            app.component(component.name, component)
        })
    }
}
export default plugin