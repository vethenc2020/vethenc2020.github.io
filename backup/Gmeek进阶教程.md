# 【Gmeek进阶】①亮暗主题配置方式



这篇文章详细说一下目前Gmeek支持的亮暗主题配置方式，以及后续待改进之处。

## 手动模式（默认）

这种模式就是当访问者第一次打开博客页面时，呈现的是亮主题。访问者可以通过页面右上角的按钮随意切换（亮/暗/跟随系统），当切换过后，会自动在浏览器存储目前的选择，之后访问者用同一浏览器再打开博客任何页面，则自动为上次选择的模式。

```
"themeMode":"manual",
"dayTheme":"light",
"nightTheme":"dark",
```



## 固定模式

设置`themeMode`为`fix`，`dayTheme`定义的就是想要固定的主题，可以定义为`light`则永远为亮主题，用户无法切换，定义为`dark`则永远为暗主题。而`nightTheme`定义的就是`utterances`评论框的永久固定主题。

### 固定亮主题

```
"themeMode":"fix",
"dayTheme":"light",
"nightTheme":"github-light",
```



### 固定暗主题

```
"themeMode":"fix",
"dayTheme":"dark",
"nightTheme":"dark-blue",
```



这里提到的亮暗主题可以查看[github官方](https://github.com/settings/appearance)支持的主题，这里都支持

- 亮主题：`light` `light_high_contrast` `light_colorblind ` `light_tritanopia `
- 暗主题：`dark` `dark_high_contrast` `dark_colorblind` `dark_tritanopia` `dark_dimmed`

而[utterances](https://utteranc.es/)评论框的主题选择有

```
github-light
github-dark
preferred-color-scheme
github-dark-orange
icy-dark
dark-blue
photon-dark
boxy-light
gruvbox-dark
```



## 其他

目前做到的就是这些功能，可以定义的主题模式有限，但还是有一些选择的。可以优化的地方还有很多，如果有其他主题方面的需求或者建议欢迎一起讨论和完善。

1、固定跟随系统切换目前还没有实现
2、手动模式目前访问者第一次打开页面是亮主题，是否需要实现第一次打开是暗主题或者是跟随系统？



# 【Gmeek进阶】②强调关键信息使用



Github的语法里面有5中警报强调信息，分别是`NOTE` `TIP` `IMPORTANT` `WARNING` `CAUTION` 。在写文章的时候，适当使用可以提高文章的可读性，并且颜色也更加丰富。下面就简单描述一下使用方式，以及效果如何。

## 使用方式

```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```



## 效果

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

## 其他

由于[primer.style](https://primer.style/css)没有对`alerts`标签进行颜色处理，所以在Gmeek的`v2.19`版本添加了颜色的支持，效果还是不错的，同时切换亮暗主题也有对应的变化。

参考链接：https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts



# 【Gmeek进阶】③文章插入html标签



Github由于安全考虑，是不允许使用`iframe`等标签的，而且在issues插入的图片也会自动转换为github的地址。为了文章的多样性，在Gmeek的`v2.19`版本中添加了支持html标签的功能。

## 使用方式

在需要添加html标签的位置使用`code`方式，并且后面紧跟着Gmeek-html，然后才是html标签。

### 图片img

```
`Gmeek-html<img src="https://picsum.photos/200">`
```



![img](https://picsum.photos/200)

### 内嵌框架iframe-网站

```
`Gmeek-html<iframe src="https://music.meekdai.com/#61" width="100%" height="460px" frameborder="0" allowfullscreen="true"></iframe>`
```


`Gmeek-html<iframe src="https://music.meekdai.com/#61" width="100%" height="460px" frameborder="0" allowfullscreen="true"></iframe>`


### 内嵌框架iframe-歌曲

```
`Gmeek-html<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0U3fV7K4WFfVRgLGEAKh3g?utm_source=generator' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>`
```

`Gmeek-html<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0U3fV7K4WFfVRgLGEAKh3g?utm_source=generator' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>`



### 内嵌框架iframe-视频

```
`Gmeek-html<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1604800941&bvid=BV1qm421M7Xs&cid=1557311907&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="460px"></iframe>`
```

`Gmeek-html<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1604800941&bvid=BV1qm421M7Xs&cid=1557311907&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="460px"></iframe>`



## 其他

上面仅仅是示例了一些经常会使用到的html标签，其他html标签同样也是支持的，大家可以尝试添加到自己的文章中。 🥂



# 【Gmeek进阶】④static文件夹使用



有很多小伙伴反馈说需要在docs文件内上传一些自己的文件，比如图片、js、css等，所以在`v2.20`版本添加了这个功能。下面就简单说明一下使用方法。

## 使用方式

1. 在自己的仓库根目录下新建一个文件夹，名称必须是`static`。
2. 然后在`static`文件内上传一些自己的文件，比如`avatar.svg`文件。
3. 通过手动全局生成一次成功后，你就可以通过 xxx.github.io/avatar.svg 访问了。

## 例子

我新建的[static文件夹](https://github.com/Meekdai/meekdai.github.io/tree/main/static)
通过链接访问static文件夹内的文件：https://meekdai.github.io/avatar.svg

## 备注

在全局生成的时候，Actions会自动把`static`文件夹的所有内容拷贝到`docs`文件夹内。方便用户把docs当成一个目录部署到CF等其他服务器中。



# 【Gmeek进阶】⑤右上角圆按钮配置



在博客首页的右上角有一些圆形的按钮，有同学不知道如何配置它们，下面就详细介绍一下配置的方式。

## 站内链接

例如我博客里面的[关于页面](https://blog.meekdai.com/about.html)和[友情链接](https://blog.meekdai.com/link.html)。下面以添加关于页面按钮为示例。

1. 添加config.json配置

```
"singlePage":["about"],
```



1. 添加一个Labels标签为`about`，在你的issue里面写一个文章，然后配置Labels为`about`即可。
2. 手动全局生成一次。

> [!TIP]
> 注意，`about`标签只可以添加给唯一一篇issue，不然会出错
> 如果有多个`singlePage`，则可以这样定义`"singlePage":["link","about"],`
> 如果需要修改或者自定义其他的按钮图标，可以使用`iconList`来配置

## 站外链接

如果你的`about`页面是站外的，或者想定义其他的站外链接，例如我博客里面的[music](https://music.meekdai.com/)。下面以添加music页面按钮为示例。

1. 添加config.json配置

```
"iconList":{"music":"M12.7 0.9L7.3 0.9C6 0.9 4.9 2 4.9 3.3L4.9 10.1C4.5 9.9 4.1 9.8 3.6 9.8C2.1 9.8 0.9 11 0.9 12.4C0.9 13.9 2.1 15.1 3.6 15.1C5 15.1 6.2 13.9 6.2 12.4L6.2 3.3C6.2 2.7 6.7 2.2 7.3 2.2L12.7 2.2C13.3 2.2 13.8 2.7 13.8 3.3L13.8 7.5C13.4 7.3 12.9 7.1 12.4 7.1C11 7.1 9.8 8.3 9.8 9.8C9.8 11.2 11 12.4 12.4 12.4C13.9 12.4 15.1 11.2 15.1 9.8L15.1 3.3C15.1 2 14 0.9 12.7 0.9ZM3.6 13.8C2.8 13.8 2.2 13.2 2.2 12.4C2.2 11.7 2.8 11.1 3.6 11.1C4.3 11.1 4.9 11.7 4.9 12.4C4.9 13.2 4.3 13.8 3.6 13.8ZM12.4 11.1C11.7 11.1 11.1 10.5 11.1 9.8C11.1 9 11.7 8.4 12.4 8.4C13.2 8.4 13.8 9 13.8 9.8C13.8 10.5 13.2 11.1 12.4 11.1ZM12.4 11.1"},
"exlink":{"music":"https://music.meekdai.com"},
```



2. 手动全局生成一次。

> [!TIP]
> 此处`iconList`自定义了图标的SVG，`exlink`定义了外部链接的地址
> `about`和`link`这两个图标的SVG是内置的无需定义`iconList`，其他则需要自己定义

## SVG图标格式

使用`iconList`自定义SVG图标必须是`16px`大小的，建议使用github的`Octicons`图标。

Octicons图标链接：https://primer.style/foundations/icons/#16px
我自己转换的Octicons图标path列表：https://gist.github.com/Meekdai/f6375fe2740428af39d90f1afa678fdc



# 【Gmeek进阶】⑥插件功能的使用



为了使得Gmeek的功能更加的丰富，我添加了插件的功能，目前已经有几个插件可以使用。大家可以直接复制文章中的配置代码使用，也可以把对应的插件文件拷贝到自己的static文件夹下使用。

## 不蒜子

> [!TIP]
> [不蒜子](https://busuanzi.ibruce.info/)是一个极简网页计数器，很多同学都希望有这个功能，所以这个插件就来了。
目前更推荐使用下面的Vercount插件

1. 全站添加不蒜子，只需要在config.json文件内添加配置

```
"allHead":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekBSZ.js'></script>",
```



2. 单个文章页添加不蒜子，只需要在文章最后一行添加如下

```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekBSZ.js'></script>"}## -->
```



## Vercount

> [!TIP]
> 目前发现了不蒜子官方有一个BUG，就是Safari浏览器统计的pv数据不准确，具体可见文章[解决不蒜子 (busuanzi) 文章计数出错问题](https://jdhao.github.io/2020/10/31/busuanzi_pv_count_error/)。所以找了一个可以兼容不蒜子的计数工具 [Vercount](https://github.com/EvanNotFound/vercount)。不蒜子中的数据都会自动同步过来，非常方便。

1. 全站添加Vercount，只需要在config.json文件内添加配置

```
"allHead":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekVercount.js'></script>",
```



2. 单个文章页添加不蒜子，只需要在文章最后一行添加如下

```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekVercount.js'></script>"}## -->
```



## TOC目录

> [!TIP]
> 效果预览：[markdown测试页面](https://meekdai.github.io/post/markdown-ce-shi-ye-mian.html)
> 如果某些文章比较长，里面有很多h1、h2、h3、h4等标题，就可以在右边显示TOC目录，方便导航到对应位置。

1. 所有文章页添加TOC目录，只需要在config.json文件内添加配置

```
"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>",
```



2. 单个文章页添加TOC目录，只需要在文章最后一行添加如下

```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->
```



## articletoc

> [!TIP]
> 效果预览：[Markdown语法总览](https://code.buxiantang.top/post/Markdown-yu-fa-zong-lan.html) 在右下角有个圆形按钮。
> 本插件由[Tiengming](https://code.buxiantang.top/)编写，也是一个非常不错的TOC目录插件。配置方式和上面一样，只需要替换地址为如下地址即可。

```
https://blog.meekdai.com/Gmeek/plugins/articletoc.js
```



## 灯箱插件

> [!TIP]
> 效果预览：[养鱼？我应该不行](https://blog.meekdai.com/post/yang-yu-？-wo-ying-gai-bu-xing.html) 点击图片就会出现灯箱效果。
> 本插件由[Tiengming](https://code.buxiantang.top/)编写，可以放大浏览文章中的图片，适合一些图片较多的文章。

1. 所有文章页添加lightbox，只需要在config.json文件内添加配置

```
"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>",
```



2. 单个文章页添加lightbox，只需要在文章最后一行添加如下

```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>"}## -->
```



## 多插件使用

同时在所有文章页使用`TOC目录`和`灯箱插件`，需要这样添加配置文件：

```
"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script><script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>",
```



同时在一篇文章页使用`TOC目录`和`灯箱插件`，需要这样添加配置文件：

```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script><script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>"}## -->
```


> [!CAUTION]
> 需要特别注意区分`script` `head` `allHead` 等这些键的用途，详细请参考 [Gmeek快速上手](https://blog.meekdai.com/post/Gmeek-kuai-su-shang-shou.html#二、配置文件)

## 其他

有了插件就可以在基础版的Gmeek框架上玩出很多很多定制化的功能，简单的UI修改也可以通过插件实现，只需要学习一点点前端知识，另外非常欢迎大家一起完善Gmeek，开发出更多的插件。

> [!IMPORTANT]
> 转载地址：https://blog.meekdai.com/

<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>"}## -->
