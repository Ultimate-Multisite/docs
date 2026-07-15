---
title: 管理系統電子郵件
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# 管理系統電子郵件

Ultimate Multisite 會針對註冊確認、付款收據和會員資格變更等事件傳送各種系統電子郵件。你可以自訂這些電子郵件範本，以符合你的品牌。

## 檢視系統電子郵件 {#viewing-system-emails}

前往 **Ultimate Multisite → Settings**，並點擊 **Emails** 分頁以查看電子郵件相關設定。

![Settings - Emails 分頁](/img/admin/settings-emails.png)

在那裡，你可以存取 **System Emails** 頁面以查看所有電子郵件範本。

![System Emails 清單](/img/admin/system-emails-list.png)

你也可以使用系統電子郵件編輯器編輯個別電子郵件範本：

![系統電子郵件編輯器](/img/admin/system-email-editor.png)

## 匯入新的電子郵件範本 {#importing-new-email-templates}

新的 Ultimate Multisite 版本和附加元件可能會註冊新的電子郵件範本。為避免衝突，新的範本不會自動加入——你需要手動匯入。

若要匯入新的電子郵件範本：

1. 前往 **System Emails** 頁面
2. 點擊頁面頂端的 **Reset & Import** 按鈕
3. 切換 **Import Emails** 選項以查看可用的範本
4. 選取你想匯入的範本並確認

## 重設電子郵件範本 {#resetting-email-templates}

如果你已自訂某個電子郵件範本，並想還原為預設內容，你有兩個選項：

1. **刪除並重新匯入** — 刪除該系統電子郵件並再次匯入（這會清除傳送指標）
2. **透過工具重設** — 使用 **Reset & Import** 工具，切換 **Reset** 選項，並選取你想重設的電子郵件

建議使用 Reset 選項，因為它會在還原預設內容的同時保留傳送指標和其他中繼資料。
