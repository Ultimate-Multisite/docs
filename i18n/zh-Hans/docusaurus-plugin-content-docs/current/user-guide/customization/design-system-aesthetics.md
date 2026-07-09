---
title: 设计系统美学技能
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# 设计系统美学技能 {#design-system-aesthetics-skill}

**设计系统美学技能**是一个指导性的方法，用于完善您网站的视觉识别度。它帮助您就定义设计系统的排版、颜色、间距和动效（motion）等设计令牌（tokens）做出一致的决策。

## 什么是设计系统美学？ {#what-is-design-system-aesthetics}

设计系统美学是一个结构化的技能，涵盖以下内容：

- **排版（Typography）**: 字体族、字号、字重和行高
- **颜色（Color）**: 主色、辅色、强调色和中性色调板
- **间距（Spacing）**: 内边距（Padding）、外边距（Margin）和间隙（Gap）比例
- **边框（Borders）**: 圆角和宽度令牌
- **阴影（Shadows）**: 提升和深度令牌
- **动效（Motion）**: 动画和过渡效果

这些决策都会记录在您主题的 `theme.json` 文件中，从而创建一个统一的视觉系统。

## 为什么使用设计系统美学？ {#why-use-design-system-aesthetics}

### 一致性 {#consistency}

设计系统确保了：

- 所有文本都使用相同的排版比例
- 颜色在整个网站上使用一致
- 间距遵循可预测的模式
- 动画感觉统一协调

### 效率 {#efficiency}

您无需逐页做出设计决策，而是可以：

- 定义令牌一次
- 在所有地方应用它们
- 通过更改一个值实现全局更新

### 灵活性 {#flexibility}

您可以：

- 快速调整整个设计系统
- 尝试不同的美学风格
- 在不断发展的同时保持品牌一致性

## 触发设计系统美学技能 {#triggering-the-design-system-aesthetics-skill}

### 手动激活 {#manual-activation}

您可以在任何时候启动此技能：

```
"帮我完善我的设计系统"
```

或

```
"让我们改善一下网站的美观度"
```

或

```
"引导我完成设计系统决策"
```

### 自动建议 {#automatic-suggestions}

当您：

- 询问设计更改时
- 请求进行“现代”或“专业”的重新设计时
- 希望提高视觉一致性时
- 准备发布网站时

代理可能会建议使用此技能。

## 设计系统美学流程 {#the-design-system-aesthetics-process}

### 步骤 1：排版（Typography） {#step-1-typography}

代理会询问您的字体选择：

```
您偏好的排版风格是什么？
- 衬线体（Serif，传统、优雅）
- 无衬线体（Sans-serif，现代、简洁）
- 等宽字体（Monospace，技术、代码相关）

关于您的标题字体：
- 您想要一个独特的标题字体，还是使用与正文相同的字体？
- 偏好：粗体、优雅、活泼、极简？

关于您的正文字体：
- 可读性是关键。您更喜欢：
  - 更大、更宽松的文本
  - 紧凑、高效的文本
  - 标准尺寸
```

然后，代理会定义：

- **标题字体（Heading font）**: 用于标题和标题的主要字体
- **正文字体（Body font）**: 用于段落和正文的字体
- **等宽字体（Monospace font）**: 用于代码和技术内容的字体
- **尺寸比例（Size scale）**: 预定义的尺寸（small, base, large, XL 等）
- **字重比例（Weight scale）**: 字体字重（regular, medium, bold 等）
- **行高（Line height）**: 用于提高可读性的行间距

### 步骤 2：颜色调色板（Color Palette） {#step-2-color-palette}

```
让我们定义您的颜色调色板。

主色（品牌色）：
- 当前：[显示现有颜色]
- 更改为：[颜色选择器或十六进制代码]

辅色（辅助色）：
- 当前：[显示现有颜色]
- 更改为：[颜色选择器或十六进制代码]

强调色（高亮和 CTA）：
- 当前：[显示现有颜色]
- 更改为：[颜色选择器或十六进制代码]

中性色调板（用于文本、边框、背景的灰色）：
- 浅色：[颜色]
- 中等：[颜色]
- 深色：[颜色]
```

代理会创建一个包含以下内容的完整调色板：

- 主色、辅色和强调色
- 中性灰色（浅色、中等、深色）
- 语义色（成功、警告、错误）
- 悬停和激活状态

### 步骤 3：间距（Spacing） {#step-3-spacing}

```
您想要多少呼吸空间？

间距比例偏好：
- 紧凑（紧密、高效的布局）
- 正常（平衡的间距）
- 宽松（充足的留白）

这会影响：
- 按钮和卡片内部的内边距
- 部分之间的外边距
- 网格项之间的间隙
```

代理会定义间距令牌：

- 基础单位（通常为 4px 或 8px）
- 比例：xs, sm, md, lg, xl, 2xl
- 用于内边距、外边距、间隙的具体值

### 步骤 4：边框和阴影（Borders and Shadows） {#step-4-borders-and-shadows}

```
视觉深度和定义：

圆角偏好：
- 锐利（无圆角）
- 微妙（小半径）
- 圆角（中等半径）
- 非常圆角（大半径）

阴影深度：
- 平面（无阴影）
- 微妙（浅阴影）
- 明显（强阴影）
```

代理会创建：

- 圆角令牌（用于按钮、卡片、输入框）
- 用于提升级别的阴影令牌
- 边框宽度令牌

### 步骤 5：动效和动画（Motion and Animation） {#step-5-motion-and-animation}

```
您的网站在交互时应该感觉如何？

动画偏好：
- 极简（无动画）
- 微妙（平滑过渡）
- 活泼（明显的动画）

特定动画：
- 页面过渡：淡入、滑动还是无？
- 按钮悬停：缩放、颜色变化，还是两者都做？
- 加载状态：加载指示器、骨架屏还是进度条？
```

代理会定义：

- 过渡持续时间（快、正常、慢）
- 缓动函数（ease-in, ease-out, ease-in-out）
- 用于常见交互的动画关键帧

## 应用设计系统美学 {#applying-design-system-aesthetics}

### 自动应用 {#automatic-application}

完成此技能后，代理会：

1. 使用所有令牌更新您主题的 `theme.json`
2. 将设计系统应用到您当前的主题
3. 重新生成块样式以匹配新的系统
4. 激活更新后的主题

### 手动应用 {#manual-application}

您也可以直接编辑 `theme.json`：

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## 查看您的设计系统 {#viewing-your-design-system}

### 询问代理 {#ask-the-agent}

```
"展示我的设计系统"
```

或

```
"我当前的设计令牌是什么？"
```

代理将显示您的排版、颜色、间距和其他令牌。

### 查看 theme.json {#view-themejson}

在文本编辑器中打开 `/wp-content/themes/[theme-name]/theme.json` 即可查看原始令牌定义。

## 更新您的设计系统 {#updating-your-design-system}

### 快速更新 {#quick-updates}

要求代理进行特定更改：

```
"把主色调变深一点"
```

或

```
"将间距比例增加 20%"
```

或

```
"把标题字体改成衬线体"
```

### 全面重设计 {#full-redesign}

重新运行设计系统美学技能：

```
"让我们重新设计整个设计系统"
```

这将引导您再次完成所有决策，从您当前的数值开始。

### 部分更新 {#partial-updates}

更新特定方面：

```
"只更新颜色调色板，其他保持不变"
```

## 设计系统最佳实践 {#design-system-best-practices}

### 一致性 {#consistency-1}

- 在所有地方使用相同的令牌
- 不要创建一次性的颜色或尺寸
- 参考令牌而不是硬编码值

### 命名 {#naming}

使用清晰、语义化的名称：

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### 可扩展性 {#scalability}

设计您的系统以实现扩展：

- 使用相对单位（rem, em）而不是像素
- 创建比例（xs, sm, md, lg, xl）而不是任意值
- 为未来的添加做好规划

### 文档化 {#documentation}

记录您的设计系统：

- 选择特定颜色的原因
- 何时使用每个令牌
- 例外情况和边缘情况

## 常见设计系统模式 {#common-design-system-patterns}

### 现代极简风（Modern Minimalist） {#modern-minimalist}

- 无衬线体排版（Inter, Helvetica）
- 有限的颜色调色板（2-3 种颜色）
- 宽松的间距
- 微妙的阴影
- 平滑、快速的动画

### 温馨友好风（Warm and Friendly） {#warm-and-friendly}

- 衬线体和无衬线体的混合使用
- 温暖的颜色调色板（橙色、暖灰色）
- 圆角
- 柔和的阴影
- 活泼的动画

### 专业企业风（Professional Corporate） {#professional-corporate}

- 简洁的无衬线体（Roboto, Open Sans）
- 带有强调色的中性调色板
- 结构化的间距
- 极简的阴影
- 微妙的过渡效果

### 创意大胆风（Creative and Bold） {#creative-and-bold}

- 独特的排版
- 大胆的颜色调色板
- 多变的间距
- 强烈的阴影
- 明显的动画

## 故障排除 {#troubleshooting}

**我的设计系统更改没有显示**
- 清除浏览器缓存
- 如果使用静态生成器，请重建您的网站
- 检查 `theme.json` 是否是有效的 JSON
- 验证主题是否已激活

**不同页面上的颜色看起来不同**
- 检查插件中是否存在冲突的 CSS
- 验证所有页面是否使用了相同的主题
- 清除任何缓存插件

**我想恢复到之前的设计系统**
- 询问代理：“展示我的设计系统历史记录”
- 手动编辑 `theme.json` 到之前的数值
- 使用不同的选择重新运行此技能

## 下一步 {#next-steps}

定义了设计系统后：

1. **审阅您的网站**：访问您的网站查看新的设计
2. **进一步完善**：再次使用此技能进行调整
3. **创建模板**：使用您的设计令牌构建自定义块模板
4. **文档化**：与团队成员分享您的设计系统
