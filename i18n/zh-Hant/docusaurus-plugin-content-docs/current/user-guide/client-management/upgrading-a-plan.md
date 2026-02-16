---
title: 升級方案
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# 升級方案 (v2)

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

您的客戶可以隨時升級他們的方案。他們可以升級到其他方案，或購買您在網站上提供的任何附加服務或套件。

在這篇教學中，我們將說明客戶如何升級方案，以及升級後會發生什麼事。

要升級方案，您的客戶需要進入他們的 dashboard，前往 **Account** 頁面。

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

在 Account 頁面上，他們會看到目前的會員資格及相關方案。要升級到其他方案，他們必須點擊 **Your Membership** 區塊右上角的 **Change** 按鈕。

![Your Membership section with Change button](/img/admin/memberships-list.png)

他們會被導向結帳表單，頁面上會顯示所有可用的方案。

他們也可以看到**目前方案可用的服務和套件**，如果他們只想購買特定的服務或套件（例如我們範例中的無限流量或磁碟空間），而不是升級方案的話。

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

選擇要購買的產品後，他們會看到現在需要支付的金額（扣除任何現有點數後），以及下一個帳單日期會被收取的金額。

通常，如果購買的產品是其他方案，而且付款是在會員費收取週期之間進行，他們會收到第一個方案已付金額的點數。

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

如果他們選擇的方案或套件不會改變目前的訂閱內容，他們會看到一則說明訊息。

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

結帳完成後，新產品會加入客戶的帳戶，新產品的所有限制或功能也會立即生效：流量、磁碟空間、文章數量等等...

## 

## 

## 升級與降級路徑

在每個產品中，您會看到 **Up & Downgrades** 分頁。該分頁的第一個選項是 **Plan Group** 欄位。

**Plan groups** 可以讓 Ultimate Multisite 知道某些方案屬於同一個「家族」，因此應該用來建構升級/降級的選項路徑。

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

舉例來說，您有 **Free plan**、**Basic Plan** 和 **Premium Plan** 三種方案。您希望訂閱 **Free Plan** 的用戶只能升級到 **Premium Plan**，而不想讓他們看到「Basic Plan」作為升級選項。您只需要為 Free 和 Premium 方案指定相同的 plan group 名稱，如下方截圖所示。

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

這樣做的效果是告訴 Ultimate Multisite，網站上有一個叫做 **High End** 的方案「家族」。在提供升級或降級選項時，只會顯示同一家族的方案供用戶選擇。
