---
title: メニューを作成
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# メニューの作成

「メニューの作成」機能を使うと、ページタイトルとは別に、独自のナビゲーションラベルを設定できるWordPressのナビゲーションメニューを作成できます。

## 概要 {#overview}

この機能は、標準のメニュー作成機能に `navigation_label` パラメータを指定する機能を追加します。これにより、ナビゲーションに表示されるラベルをページタイトルとは異なるものに設定でき、サイト構造やユーザー体験に柔軟性を持たせることができます。

## パラメータ {#parameters}

| パラメータ | 型 | 必須 | 説明 |
|-----------|------|----------|-------------|
| `name` | string | Yes | メニュー名（例：`Primary Navigation`） |
| `location` | string | No | このメニューを割り当てるテーマロケーション（例：`primary`） |
| `navigation_label` | string | No | ナビゲーションに表示するラベル（ページタイトルとは別） |

## 返り値 {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## ナビゲーションラベルとページタイトルの違い {#navigation-label-vs-page-title}

`navigation_label` パラメータを使用すると、内部のメニュー名とユーザーに表示されるラベルを分離できます。

- **`name`** — WordPressが使用する内部のメニュー識別子（例：「Primary Navigation」）
- **`navigation_label`** — サイト訪問者のナビゲーションに表示されるラベル（例：「Main Menu」）

これは、以下のような場合に便利です。
- 内部の命名規則とユーザー向けのラベルが異なる場合
- 管理画面よりもナビゲーションで短いラベルを使いたい場合
- ラベルの長さが異なる複数の言語をサポートする必要がある場合
- 特定の地域やユーザーグループ向けのメニューを構築する場合

## 使用例 {#usage-examples}

### 例 1: ナビゲーションラベルを持つシンプルなメニュー {#example-1-simple-menu-with-navigation-label}

**プロンプト:**
```
メインナビゲーション「Main Navigation」という名前で、「Menu」というナビゲーションラベルを持つプライマリナビゲーションメニューを作成します。
```

**結果:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 例 2: 特定のテーマロケーションのメニュー {#example-2-menu-for-specific-theme-location}

**プロンプト:**
```
フッターメニュー「Footer Links」を、ナビゲーションラベル「Quick Links」で作成し、フッターのロケーションに割り当てます。
```

**結果:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## テーマビルダーとの連携 {#integration-with-theme-builder}

テーマビルダーを使用する場合、「メニューの作成」機能は以下の処理を行います。

1. 利用可能なテーマのメニューロケーションを自動的に検出します
2. デザインに適したナビゲーションラベルを持つメニューを作成します
3. メニューを正しいテーマロケーションに割り当てます
4. 作成後にメニューアイテムを追加することが可能です

## 関連する機能 {#related-abilities}

- **`add_menu_item`** — 既存のメニューにアイテムを追加します
- **`update_menu`** — メニューの名前を変更したり、テーマロケーションを再割り当てしたりします
- **`delete_menu`** — サイトからメニューを削除します

## ベストプラクティス {#best-practices}

- **明確なナビゲーションラベルを使用する** — ラベルは簡潔で、ユーザーにとって分かりやすいものに保ちましょう
- **テーマロケーションを合わせる** — 正しく表示されるよう、メニューを適切なテーマロケーションに割り当てましょう
- **メニュー構造を計画する** — アイテムを作成する前に、メニューの階層を決定しましょう
- **レスポンシブ性をテストする** — モバイルデバイスでメニューが正しく表示されるか確認しましょう
- **ラベルをローカライズする** — 異なる言語バージョンに対して異なるナビゲーションラベルを使用しましょう

## 制限事項 {#limitations}

- ナビゲーションラベルは表示専用であり、内部の `name` は引き続きWordPressの識別子として使用されます
- テーマのサポートは異なります。すべてのテーマがすべてのメニューロケーションをサポートしているわけではありません
- メニューアイテムは、メニュー作成後に個別に手動で追加する必要があります
- ナビゲーションラベルを変更するには、メニューの更新が必要です

## 関連する機能 {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — サイトヘッダー用のロゴを作成します
- [Validate Palette Contrast](./validate-palette-contrast.md) — アクセシブルな配色であることを確認します
