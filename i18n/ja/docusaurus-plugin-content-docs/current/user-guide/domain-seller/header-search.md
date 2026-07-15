---
title: ヘッダードメイン検索
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Ultimate Multisite の checkout 内で、利用可能なドメインから顧客が選べるようにしつつ、小さなヘッダーフォームからドメイン検索を開始したい場合は、この設定を使用します。

## 要件 {#requirements}

- Ultimate Multisite がネットワークで有効化されていること。
- Multisite Ultimate Domain Seller がネットワークで有効化されていること。
- 少なくとも 1 つの有効なドメイン登録商品があり、次を満たしていること:
  - `domain_provider` が設定済みのプロバイダーに設定されている。
  - 対応する TLD が設定されている。例: `com`、`net`、`org`。
- **Domain Selection** フィールドを含む有効な checkout フォーム。

## Checkout フォーム {#checkout-form}

1. 登録ページで使用する checkout フォームを作成または編集します。
2. **Username** を含む、通常必要な checkout/Account フィールドを追加します。ドメインフィールドだけを含む checkout フォームは、Ultimate Multisite の検証で拒否されます。
3. **Domain Selection** フィールドを追加します。
4. フローで無料サブドメインや既存ドメインではなく登録済みドメインに重点を置く場合は、Domain Selection モードを **Register Only** に設定します。
5. ドメイン登録商品をそのフィールドに割り当てます。

登録ページでは、例えば次のように checkout フォームを表示します:

```text
[wu_checkout slug="domain-form"]
```

## ヘッダーフォーム {#header-form}

サイトのヘッダーに小さな `GET` フォームを追加し、入力された検索語を `domain_name` として checkout ページへ送信します:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

カスタムヘッダーの JavaScript でドメインを事前選択しないでください。ヘッダーは検索語だけを渡します。Domain Seller の checkout スクリプトが `?domain_name=example` を読み取り、checkout の検索ボックスに入力して利用可否検索を実行するため、顧客は返されたドメインから選択できます。

## 想定される動作 {#expected-behaviour}

ヘッダーで `example` を検索すると、次が開きます:

```text
/register/?domain_name=example
```

その後、checkout には次のような選択可能な結果が表示されます:

- `example.com`
- `example.net`
- `example.org` 利用不可
- その他、プロバイダーが対応する TLD

利用可能な結果を選択すると、注文概要にドメイン登録商品と選択したドメイン名が含まれるはずです。

## 検証 {#verification}

1. ホームページを開きます。
2. 例えば `example` のような単独の名前を検索します。
3. checkout URL に `?domain_name=example` が含まれていることを確認します。
4. checkout のドメインフィールドに `example` が入っていることを確認します。
5. ドメイン候補の一覧が表示されることを確認します。
6. 利用可能なドメインの **選択** をクリックします。
7. 注文概要に `Domain Registration - example.com` または選択したドメインが含まれていることを確認します。

## トラブルシューティング {#troubleshooting}

- 一覧が表示されない場合は、ブラウザーのネットワークタブで `admin-ajax.php?action=wu_domain_search` を確認し、空ではない `domains` または `results` が返っていることを確認します。
- checkout フォームの保存時に検証で失敗する場合は、**Username** などの必須 Account フィールドを追加します。
- ドメインを選択してもカートが更新されない場合は、`window.wu_checkout_form` が存在し、Domain Seller の checkout アセットが checkout ページに読み込まれていることを確認します。
