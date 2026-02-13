---
title: '# ドメインマッピングの設定方法'
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# ドメインマッピングの設定方法 (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

プレミアムネットワークの最も強力な機能の1つは、クライアントにトップレベルドメインをサイトに付与する機会を提供できることです。結局のところ、どちらがよりプロフェッショナルに見えるでしょうか: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) か [_**joesbikeshop.com**_](http://joesbikeshop.com)？ そのため、Ultimate Multisiteはサードパーティのプラグインを使用せずにその機能を組み込んで提供しています。

## ドメインマッピングとは？

名前が示すように、ドメインマッピングはUltimate Multisiteがカスタムドメインのリクエストを受け取り、そのドメインを付与したネットワーク内の該当サイトにマッピングする機能です。

### How to setup domain mapping on your Ultimate Multisite Network

ドメインマッピングを機能させるには、設定が必要です。幸いなことに、Ultimate Multisiteはその作業を自動化してくれるので、簡単に要件を満たすことができます。

During Ultimate Multisite installation, the wizard will automatically copy and install the **sunrise.php** to the designated folder. **The wizard won't allow you to proceed until this step is completed**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/config/settings-domain-mapping.png)

つまり、Ultimate Multisiteのインストールウィザードがネットワークの設定を完了したら、すぐにカスタムドメインのマッピングを開始できます。

Note that domain mapping in Ultimate Multisite is not mandatory. You have an option to use WordPress Multisite native domain mapping function or any other domain mapping solution.

Should you need to disable Ultimate Multisite domain mapping to give way to other domain mapping solutions, you can disable this feature under **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings with enable toggle](/img/config/settings-domain-mapping.png)

このオプションのすぐ下に **Force Admin Redirect** オプションがあります。このオプションは、顧客がカスタムドメインとサブドメインの両方で管理ダッシュボードにアクセスできるか、あるいはどちらか一方だけにアクセスできるかを制御します。

If you select **Force redirect to mapped domain**, your customers will only be able to access their admin dashboard on their custom domains.

The option **Force redirect to** **network domain** will do exactly the opposite - your customers will only be allowed to access their dashboards on their subdomain, even if trying to sign in on their custom domains.

And the option **Allow access to the admin by both mapped domain domain and network domain** allows them to access their admin dashboards both on the subdomain and the custom domain.

![Force Admin Redirect options for domain mapping](/img/config/settings-domain-mapping.png)

カスタムドメインをマッピングする方法は2つあります。1つ目はネットワーク管理ダッシュボードからスーパ管理者としてドメイン名をマッピングする方法で、2つ目はアカウントページのサブサイト管理ダッシュボードから行う方法です。

But before you start mapping the custom domain to one of the subsites in your network, you will need to make sure that the **DNS settings** of the domain name are properly configured.

### 

### Making sure the domain DNS settings are properly configured

マッピングを機能させるには、マッピング予定のドメインがネットワークのIPアドレスを指していることを確認する必要があります。Ultimate MultisiteがインストールされているドメインのIPアドレス（ネットワークIPアドレス）を使用し、マッピングしたいカスタムドメインのIPアドレスではありません。特定のドメインのIPアドレスを検索するには、例えば [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) にアクセスすることをお勧めします。

To correctly map the domain, you need to add an **A RECORD** on your **DNS** configuration pointing to that **IP address**. DNS management varies greatly between different domain registrars, but there's plenty of tutorials online covering that if you search for " _Creating A Record on XXXX_ " where XXXX is your domain registrar (ex.: " _Creating A Record on_ _GoDaddy_ ").

If you find yourself having trouble getting this to work, **contact your domain registrar support** and they will be able to help you with this part.

If you plan to allow your clients to map their own domains, they will have to do the work on this part themselves. Point them towards their registrar support system if they find themselves unable to create the A Record.

### Mapping custom domain name as Super Admin

ネットワークでスーパ管理者としてログインしている場合、**Ultimate Multisite > Domains** に移動してカスタムドメイン名を簡単に追加・管理できます。

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

このページでは、上部の **Add Domain** ボタンをクリックすると、モーダルウィンドウが表示され、**custom domain name**、**適用したいサブサイト**、そしてそれを **primary domain** とするかどうかを設定できます（**1つのサブサイトに複数のドメイン名をマッピング**できることに注意してください）。

![Add Domain modal with domain name and site fields](/img/admin/domains-list.png)

すべての情報を入力したら、下部の **Add Existing Domain** ボタンをクリックします。

![Domain stage changing from Checking DNS to Ready](/img/admin/domains-list.png)

これにより、カスタムドメインのDNS情報の検証と取得プロセスが開始されます。ページ下部にログが表示され、プロセスの進行状況を確認できます。このプロセスは完了まで数分かかる場合があります。

**Stage**（ステータス）は、すべてが正しく設定されている場合、**Checking DNS** から **Ready** に変わります。

![Domain with Ready status in domains list](/img/admin/domains-list.png)

![Domain detail page with stage, site, active, and SSL options](/img/admin/domains-list.png)

ドメイン名をクリックすると、いくつかのオプションが表示されます。簡単に見てみましょう：

![Domain mapping settings allowing subsite users to map domains](/img/config/settings-domain-mapping.png)

**Stage:** これはドメインが現在あるステージです。ドメインを最初に追加すると、**Checking DNS** ステージにあるはずです。プロセスはDNSエントリを確認し、正しいかどうかを確認します。その後、ドメインは **Checking SSL** ステージに移行します。Ultimate MultisiteはドメインにSSLがあるかどうかを確認し、**Ready** または **Ready (without SSL)** と分類します。

**Site:** このドメインに関連付けられたサブドメインです。マッピングされたドメインは、この特定のサイトのコンテンツを表示します。

**Active:** このオプションをオン/オフに切り替えて、ドメインを有効/無効にできます。

**Is Primary Domain?:** 顧客は各サイトに複数のマッピングドメインを持つことができます。このオプションを使用して、特定のサイトのプライマリドメインかどうかを選択します。

**Is Secure?:** Ultimate MultisiteはドメインにSSL証明書があるかどうかを確認してから有効化しますが、手動でSSL証明書の有無でドメインを読み込むこともできます。ウェブサイトにSSL証明書がなく、SSLで強制読み込みを試みるとエラーが発生する場合があります。

### Mapping custom domain name as Subsite user

サブサイト管理者は、サブサイト管理ダッシュボードからカスタムドメイン名をマッピングすることもできます。

まず、**Domain mapping** 設定でこのオプションを有効にしていることを確認してください。下のスクリーンショットを参照してください。

![Product custom domains option in product settings](/img/config/settings-domain-mapping.png)

また、**Ultimate Multisite > Products** の **Plan** レベルまたは製品オプションでこのオプションを設定または構成できます。

![Domains metabox on the subsite account page](/img/admin/domains-list.png)

これらのオプションが有効になり、サブサイトユーザーがカスタムドメイン名をマッピングできるようになった場合、サブサイトユーザーは **Account** ページに **Domains** というメタボックスを表示します。

![Add Domain modal with DNS instructions for subsite users](/img/admin/domains-list.png)

ユーザーは **Add Domain** ボタンをクリックすると、いくつかの指示が表示されたモーダルウィンドウが開きます。

![Add custom domain name field with primary domain option](/img/admin/domains-list.png)

ユーザーは **Next Step** をクリックしてカスタムドメイン名を追加できます。また、これがプライマリドメインになるかどうかを選択できます。

![Click Add Domain to start DNS verification](/img/admin/domains-list.png)Click to **Add Domain** will start the process of verifying and fetching the DNS information of the custom domain.

![Integration tab in Ultimate Multisite settings](/img/config/settings-domain-mapping.png)

**Add Domain** をクリックすると、カスタムドメインのDNS情報の検証と取得プロセスが開始されます。

### About Domain Syncing

Domain Syncingは、Ultimate Multisiteがホスティングアカウントにカスタムドメイン名をアドオンドメインとして追加し、**ドメインマッピングを機能させる**プロセスです。

ドメイン同期は、ホスティングプロバイダーがUltimate Multisiteのドメインマッピング機能と統合されている場合に自動的に行われます。現在、以下のホスティングプロバイダーが該当します：_Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ および _Cpanel._

この統合を有効にするには、Ultimate Multisiteの設定で **Integration** タブを使用します。

![Hosting provider integration settings for domain syncing](/img/config/settings-domain-mapping.png)

![Hosting provider integration configuration](/img/config/settings-domain-mapping.png)

_注意: 上記のプロバイダーのいずれでもない場合は、**ホスティングアカウントにドメイン名を手動で同期または追加**する必要があります。_
