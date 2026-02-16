---
title: 管理系統電子郵件
sidebar_position: 13
_i18n_hash: b1bc640a1a5d9b508b8c46ab59bb1221
---
# 管理系統郵件

Ultimate Multisite 會針對各種事件發送系統郵件，例如註冊確認、付款收據和會員資格變更等。您可以自訂這些郵件範本，讓它們符合您的品牌風格。

## 檢視系統郵件

前往 **Ultimate Multisite → Settings**，然後點選 **Emails** 分頁，即可看到郵件相關設定。

![Settings - Emails tab](/img/admin/settings-emails.png)

接著，您可以進入 **System Emails** 頁面，查看所有郵件範本。

![System Emails list](/img/admin/system-emails-list.png)

## 匯入新郵件範本

新版本的 Ultimate Multisite 和 add-on 可能會註冊新的郵件範本。為了避免衝突，新範本不會自動加入——您需要手動匯入。

匯入新郵件範本的步驟：

1. 前往 **System Emails** 頁面
2. 點選頁面頂端的 **Reset & Import** 按鈕
3. 開啟 **Import Emails** 選項，即可看到可用的範本
4. 選取您要匯入的範本，然後確認

## 重設郵件範本

如果您已自訂過某個郵件範本，想要恢復成預設內容，可以選擇以下兩種方式：

1. **刪除後重新匯入** — 刪除該系統郵件，再重新匯入（這會清除發送統計資料）
2. **使用工具重設** — 使用 **Reset & Import** 工具，開啟 **Reset** 選項，然後選取您要重設的郵件

建議使用 Reset 選項，因為這樣可以保留發送統計和其他中繼資料，同時恢復預設內容。
