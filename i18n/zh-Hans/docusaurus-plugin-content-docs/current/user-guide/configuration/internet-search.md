---
title: 互联网搜索
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# 互联网搜索

Gratis AI Agent v1.5.0 新增了 **互联网搜索** 功能，让 AI 助手能够在对话过程中从网络上检索最新的信息。此功能由 [Brave Search API](https://brave.com/search/api/) 或 [Tavily API](https://tavily.com/) 提供支持。

## 工作原理

当启用互联网搜索后，如果助手判断一个问题需要当前或外部信息（例如，最新的新闻、实时价格或自模型训练截止日期以来可能发生变化的文档），它会自动查询您配置的搜索提供商。

搜索结果会实时获取，并在助手生成回复之前注入到助手的上下文（context）中。助手也会明确告知用户，它使用了搜索结果来回答问题。

## 启用互联网搜索

互联网搜索需要您选择的搜索提供商提供的 API 密钥。配置步骤如下：

1. 导航到 **Gratis AI Agent → 设置 → 高级**。
2. 找到 **Internet Search Provider**（互联网搜索提供商）下拉菜单，选择 **Brave Search** 或 **Tavily**。
3. 在相应的字段中输入您的 API 密钥。每个字段旁边都会显示注册链接。
4. 点击 **保存设置**。

密钥保存后，互联网搜索功能会自动对助手可用。

## Brave Search

### 获取 Brave Search API 密钥

1. 访问 [Brave Search API 页面](https://brave.com/search/api/)。
2. 注册一个计划。免费套餐提供每月请求限制。
3. 从 Brave Search 开发者控制台复制您的 API 密钥。
4. 将其粘贴到 Gratis AI Agent 设置中的 **Brave Search API Key** 字段。

### 使用限制

Brave Search 根据您发出的查询次数进行计费。每次触发搜索的 AI 回复都算作一次查询。请在 [Brave Search 开发者控制台](https://brave.com/search/api/) 监控您的使用量，以避免意外费用。

## Tavily

Superdav AI Agent v1.10.0 增加了 **Tavily** 作为替代的互联网搜索提供商，它提供了更丰富的搜索结果和高级研究能力。

### 获取 Tavily API 密钥

1. 访问 [Tavily API 页面](https://tavily.com/)。
2. 注册一个账户。免费套餐提供每月请求限制。
3. 从 Tavily 控制台复制您的 API 密钥。
4. 将其粘贴到 Gratis AI Agent 设置中的 **Tavily API Key** 字段。

### 使用限制

Tavily 根据您发出的 API 调用次数进行计费。每次触发搜索的 AI 回复都算作一次调用。请在 [Tavily 控制台](https://tavily.com/) 监控您的使用量，以避免意外费用。

## 禁用互联网搜索

只需从当前活动的搜索提供商字段中移除 API 密钥并保存即可。互联网搜索功能将不再提供给助手使用。

:::note
由于助手在生成答案前必须等待搜索结果，因此互联网搜索会增加回复的延迟。对于时间敏感的用例，请考虑是否真的需要实时搜索，或者助手内置的知识是否已经足够。
:::
