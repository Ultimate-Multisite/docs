---
title: 按量计费套餐更新日志
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans 变更日志

版本 1.1.0 - 发布于 2026-05-05
- 新增：多站点子站点的 AI token 计费 — 跨客户站点跟踪并计费 AI token 用量，并支持可配置的按 token 费率
- 新增：Connector 强制机制已通过动态限制发现和直写进行重建，确保所有 Connector 的实时准确性
- 修复：数据库表升级现在已与 BerlinDB schema 定义正确对齐，防止新安装时升级失败
- 修复：数据库升级回调已转换为正确格式，解决静默升级失败问题
- 修复：AI Usage Overage Markup 输入字段现在接受小数值
- 修复：解决了 plugin 加载时的致命错误和双重初始化问题
- 改进：添加了 check-env npm script，使开发环境在首次运行时自动配置

### 1.0.3 {#103}
* 更新到 Plugin Update Checker v5
* 添加了现代 WordPress plugin 头信息
* 改进了与最新 WordPress 版本的兼容性
* 增强了用量跟踪性能

### 1.0.2 {#102}
* 错误修复和性能改进
* 增强了用量报告

### 1.0.0 {#100}
* 初始发布
* 核心计量计费功能
* 用量跟踪和超额计算
* 自动发票生成
