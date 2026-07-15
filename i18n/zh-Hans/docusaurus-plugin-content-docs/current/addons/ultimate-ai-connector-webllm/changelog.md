---
title: Ultimate AI Connector for WebLLM 更新日志
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM 更新日志

## Version 1.1.0 — 发布于 2026-04-09 {#version-110--released-on-2026-04-09}

* **新增：** 带有管理栏状态指示器的浮动聊天小部件 — 任何登录用户现在可以直接从前端向浏览器侧的 LLM 发出提示。
* **新增：** SharedWorker 运行时 — MLC 引擎现在运行在 SharedWorker 中，因此多个标签页可以共享一个 GPU 会话，而不是互相争抢。
* **新增：** apiFetch 中间件拦截器 — 匹配 AI Client SDK 模式的 WordPress REST 请求现在会透明地路由到本地 WebLLM 代理，无需回环 HTTP 往返。
* **新增：** 在 Connector 面板中添加了小部件设置 UI，用于切换聊天小部件并配置自动提示行为。
* **修复：** 强制使用 IndexedDB 缓存后端，确保模型权重下载能够存活于 HuggingFace xet CDN 重定向破坏默认 Cache API 路径的情况。
* **修复：** 跳过了嵌入模型（embedding models）的 context_window KV-cache 覆盖（因为它们没有解码器，该覆盖导致了运行时错误）。
* **修复：** 在 worker 标签页加载之前，先在 /webllm/v1/models 处宣传冷启动候选模型，这样 SDK 消费者就能立即看到模型信息。
* **修复：** 将 WebLLM 挂接到 wpai_preferred_text_models 过滤器，确保当配置了模型时，AI Experiments 功能能够路由到浏览器引擎。
* **改进：** 在端到端测试中发现并修复了缓存清除（Cache-busting）、内容标准化和硬件引用相关的错误。

## Version 1.0.0 — 初始发布 {#version-100--initial-release}
