# page

綾川星凛（AyagawaSeirin）的个人主页，基于 Vite + Vue 3 + vue-router，原生 CSS。

## 本地运行

```bash
npm install
npm run dev      # 开发服务器 http://localhost:5173
npm run build    # 类型检查 + 生产构建，输出到 dist/
npm run preview  # 预览生产构建
```

## 页面

| 路由 | 说明 |
| --- | --- |
| `/` | 首页：头像、名字（含注音）、介绍与联系方式 |
| `/guestbook` | 留言板，基于 giscus |
| `/friends` | 友情链接 |

## giscus 配置

留言板使用 [giscus](https://giscus.app)（基于 GitHub Discussions）。配置集中在
`src/config/giscus.ts`，其中的 `repoId` / `categoryId` 是通过 GitHub API
查询到的真实值，指向 `AyagawaSeirin/page` 仓库的 Announcements 分类。
留言以固定 term `guestbook` 映射到同一个 Discussion。

> **注意**：giscus GitHub App 无法通过命令行安装。需要手动访问
> <https://github.com/apps/giscus>，为 `AyagawaSeirin/page` 仓库安装该 App，
> 否则评论区会显示 "giscus is not installed on this repository"。

giscus 主题会跟随站点的明暗主题自动切换。

## 添加友情链接

编辑 `src/data/friends.json`，追加一项即可，无需改代码：

```json
{
  "avatar": "https://example.com/avatar.png",
  "name": "站点名称",
  "description": "一句话描述",
  "link": "https://example.com"
}
```

## 部署

推送到 `main` 后，GitHub Actions 会构建并把 `dist/` 发布到 GitHub Pages。站点绑定自定义域名 [seir.in](https://seir.in)。

域名解析在阿里云 DNS（`ns1.alidns.com` / `ns2.alidns.com`）。apex 需指向 GitHub Pages，请把原先指向 Vercel 的记录改成：

```
A     seir.in     185.199.108.153
A     seir.in     185.199.109.153
A     seir.in     185.199.110.153
A     seir.in     185.199.111.153
AAAA  seir.in     2606:50c0:8000::153
AAAA  seir.in     2606:50c0:8001::153
AAAA  seir.in     2606:50c0:8002::153
AAAA  seir.in     2606:50c0:8003::153
CNAME www         ayagawaseirin.github.io
```

DNS 生效后 GitHub 会签发 HTTPS 证书。仓库 Pages 设置中已指定自定义域名为 `seir.in`。

## 主题

默认跟随系统 `prefers-color-scheme`；右上角按钮可手动切换，选择会存入
`localStorage` 并优先于系统设置。`index.html` 中的内联脚本在首帧前设置主题，
避免刷新闪烁。
