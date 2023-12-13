import{d as n,h as e,c as o,u as r,o as s}from"./index-pcgP_JKC.js";const t=n({name:"Markdown"}),a=()=>e("div",{innerHTML:`<h1>开始使用</h1>
<p>请先<a href="#/doc/install">安装</a>本组件库。</p>
<p>在 main.ts 中引入组件库样式：</p>
<pre><code class="language-ts">import &#39;nuomi-ui-vue/dist/lib/nuomi.css&#39;;
</code></pre>
<p>引入组件（以 <code>Button</code> 组件为例）：</p>
<pre><code class="language-html">&lt;script setup lang=&quot;ts&quot;&gt;
import { NButton } from &#39;nuomi-ui-vue&#39;;
&lt;/script&gt;

&lt;template&gt;
  &lt;n-button&gt;按钮&lt;/n-button&gt;
&lt;/template&gt;
</code></pre>
`});t.render=a;const c=["innerHTML"],d=n({__name:"GetStarted",setup(p){return(l,u)=>(s(),o("article",{innerHTML:r(t).render().props.innerHTML,class:"markdown-body"},null,8,c))}});export{d as default};
