# Blog

使用**Hexo**搭建
- <https://hexo.io/zh-cn/docs/>

所以你的环境需要先使用命令`npm install hexo-cli -g`安装hexo-cli。

使用 **Travis CI** 部署
- <https://hexo.io/zh-cn/docs/github-pages>

主题使用 **indigo** 
- <https://github.com/yscoder/hexo-theme-indigo>
- <https://github.com/yscoder/hexo-theme-indigo/wiki>

主题使用 **next**
- <https://theme-next.org/>
- <https://github.com/theme-next/hexo-theme-next/blob/master/docs/zh-CN/INSTALLATION.md>
- <https://theme-next.org/docs/>


## 注意事项
使用主题时请参考文档安装 `npm install hexo-renderer-less --save` 依赖及其它设置。

hexo默认配置项 `external_link`。是否在新的界面打开标签设置是为 `true`。改设置会导致主题的一些功能，例如搜索，回到顶部等功能。点击时会打开新的标签。
```yml
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
```
将配置设置为`false`,如下：
```yml
external_link:
  enable: false
  field: site
  exclude: ''
```

# Hexo 基础命令
- <https://hexo.io/zh-cn/docs/writing>

默认视图已经修改为`draft`。所以我们在写一篇文章时，可以直接使用命令`hexo new 'name'`。名称推荐使用全小写的英文。
使用该命令之后，会在`./source/_drafts`目录下生成对应的文件。该目录下的文件不会发布到站点。

当你完成了文章之后，使用`hexo publish 'name'`发布。默认使用`post`模板。