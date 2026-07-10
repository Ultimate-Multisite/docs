---
title: VAT 更新日志
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT 更新日志 {#vat-changelog}

Version 1.0.7 - 发布于 2026-02-03

* 修复：由于 VIES SOAP 服务的 MS_MAX_CONCURRENT_REQ 错误，德国（DE）VAT 号码验证失败。已从旧版 SOAP API 切换到官方 EU VIES REST API，以实现更可靠的验证。
* 修复：现在当 VIES 服务暂时不可用时，VAT 号码会被接受，而不是被错误拒绝。会创建一条日志条目以供稍后查看。
* 修复：VAT/Tax ID 字段现在对所有国家/地区可见，而不仅限于 EU 成员国。非 EU 税号（例如瑞士 CHE 号码）会被存储用于发票显示，不进行 VIES 验证。
* 修复：由于数组查找逻辑不正确，希腊（GR）、摩纳哥（MC）和马恩岛（IM）的 VAT 前缀查找出现故障。
* 改进：移除了不必要的 wp-cli-bundle 开发依赖，该依赖在与 Site Exporter addon 一起使用时可能导致致命错误。
* 改进：添加了全面的单元测试套件（53 个测试）。

Version 1.0.6 - 发布于 2026-01-25

* 修复：国内 B2B 交易现在会正确收取 VAT。根据 EU VAT 规则，反向收费仅适用于跨境 B2B 交易，不适用于客户国家/地区与公司国家/地区相同的情况。

Version 1.0.5 - 发布于 2026-01-22

* 修复：Addon 未加载或无法正常工作。
* 变更：将 VAT 税率数据源从 euvatrates.com 切换到 ibericode/vat-rates 仓库，以获得更可靠且积极维护的数据。
* 修复：更正了 super_reduced_rates 选项值拼写错误。
* 改进：为国家/地区代码处理添加了 null 检查以防止错误。
* 变更：移除了捆绑的翻译文件，改为通过 Traduttore 自动更新。

Version: 1.0.3 - 发布于 2025-09-28

* 将前缀重命名为 ultimate-multisite；更新 text domain；版本提升。

Version 1.0.0-beta.4 - 2021-09-24

* 新增：用于基于 mu-plugins 设置的过滤器 wp_ultimo_skip_network_active_check；

Version 1.0.0 - 05/08/2021 - 初始发布
