---
title: 翻譯 Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# 翻譯 Ultimate Multisite

Ultimate Multisite 以英文開發，但這個 plugin 完全支援翻譯，我們非常歡迎翻譯貢獻。

## 核心 Plugin 翻譯

核心的 Ultimate Multisite plugin 透過官方的 **WordPress.org 翻譯平台**進行翻譯：

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

這是 WordPress 社群的標準翻譯系統。當翻譯達到足夠的審核通過門檻後，會透過 WordPress plugin 更新自動發布給所有 Ultimate Multisite 使用者。

**我們需要您的幫助！** 如果您會說英文以外的語言，請考慮貢獻翻譯。即使只翻譯幾個字串也很有幫助。開始方式：

1. 前往 [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. 選擇您的語言
3. 點選「Contribute Translation」
4. 您需要一個免費的 WordPress.org 帳號

如果您想成為您語言的翻譯編輯（可以審核翻譯），請透過 [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions) 與我們聯繫。

## Addon 翻譯

Addon plugin 的翻譯在另外的地方進行：

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

目前 addon 的翻譯是以 AI 生成作為起點。它們涵蓋所有支援的語言，但可能包含不通順的語句或不準確的地方。我們歡迎人工翻譯者審查並提出改進建議，讓翻譯更自然、更準確。

## 本機翻譯

如果您想為自己的專案在本機建立翻譯，而不是貢獻到上游，有兩種方式：

### 使用 Poedit

您可以使用桌面應用程式 **[Poedit](https://poedit.net)** 來翻譯 `.pot` 檔案：

1. 從 [poedit.net](https://poedit.net) 下載 Poedit
2. 開啟 `wp-content/plugins/ultimate-multisite/lang/` 中的 `.pot` 檔案
3. 在 Poedit 介面中翻譯字串
4. 儲存——Poedit 會產生 `.po` 和 `.mo` 檔案
5. 將輸出的檔案放到 `lang` 資料夾中

### 使用 Loco Translate

**[Loco Translate](https://wordpress.org/plugins/loco-translate/)** 這個 WordPress plugin 讓您可以直接從管理後台進行翻譯，不需要任何桌面工具。它會幫您處理翻譯檔案的建立和編譯。
