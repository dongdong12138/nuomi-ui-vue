# 运行命令：sh deploy.sh

rm -rf dist
pnpm build
pnpm run deploy
echo https://dongdong12138.github.io/nuomi-ui-vue/
