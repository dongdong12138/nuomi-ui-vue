import fs from 'fs';
import { baseParse } from '@vue/compiler-core';

const vueDemoPlugin = {
  name: 'vue-block-demo',
  transform(code: string, path: string) {
    if (!/vue&type=demo/.test(path)) {
      return;
    }
    const filePath = path.split('?')[0];
    // 异步读取文件内容，并转为 string 类型
    const file = fs.readFileSync(filePath).toString();
    // 将读取到的文件中的自定义快渲染为 AST
    const parsed: any = baseParse(file).children.find((n: any) => n.tag === 'demo');
    // 读取自定义模块中的文本内容
    const title = parsed.children[0].content;
    // 将读取文件中的自定义块切分，并转为字符串类型
    const main = file.split(parsed.loc.source).join('').trim();
    // 以 JSON 数据类型返回
    return `export default Component => {
			Component.__sourceCode = ${JSON.stringify(main)}
			Component.__sourceCodeTitle = ${JSON.stringify(title)}
		}`;
  },
};

export default vueDemoPlugin;
