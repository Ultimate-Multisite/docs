---
title: 增值税变更日志
sidebar_position: 99
_i18n_hash: 203587cca82c7a062fdbaf29c1b0024b
---
# 增值税更新日志

版本 1.0.6 - 2026-01-25 发布

* 修复：国内 B2B 交易现在正确计费增值税。根据欧盟增值税规则，反向计税仅适用于跨境 B2B 交易，而不适用于客户所在国家与公司所在国家相同的情况。

版本 1.0.5 - 2026-01-22 发布

* 修复：插件未能加载或正常工作。
* 更改：将增值税率数据源从 euvatrates.com 切换到 ibericode/vat-rates 仓库，以获得更可靠且积极维护的数据。
* 修复：纠正 super_reduced_rates 选项值的拼写错误。
* 改进：为国家代码处理添加了空值检查，以防止错误。
* 更改：移除捆绑的翻译文件，改为通过 Traduttore 自动更新。

版本 1.0.3 - 2025-09-28 发布

* 将前缀重命名为 ultimate-multisite；更新文本域；升级版本。

版本 1.0.0-beta.4 - 2021-09-24

* 添加：filter wp_ultimo_skip_network_active_check 用于基于 mu-plugins 的设置；

版本 1.0.0 - 05/08/2021 - 初始发布
