---
title: 機能の可視性
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# アビリティの可視性（Ability Visibility） {#ability-visibility}

Superdav AI Agent v1.12.0では、どのインターフェースでどのアビリティが公開されるかを制御する**アビリティの可視性（Ability Visibility）**コントロールが導入されました。これにより、管理者は、REST API、MCPサーバー、WooCommerce連携、その他のインターフェースを通じて、どのエージェント機能が利用可能であるかを細かく調整できます。

## アビリティの可視性とは？ {#what-is-ability-visibility}

アビリティの可視性とは、以下の点を制御する権限システムです。

- **どの機能（アビリティ）**がエージェントに利用可能か
- **どこで公開されるか**（REST API、MCP、WooCommerceなど）
- **誰がアクセスできるか**（パートナーの許可リスト経由）
- **どのように分類されるか**（認識済みか未分類か）

各アビリティには、異なるインターフェースでの利用可能性を決定する可視性レベルが付与されています。

## 可視性レベル {#visibility-levels}

### Public（公開） {#public}

**Publicアビリティ**は、すべての場所で利用可能です。

- REST APIエンドポイント
- MCPサーバー
- WooCommerce連携
- チャットインターフェース
- すべてのユーザーロール（適切な権限を持つ場合）

例: `scaffold-block-theme`、`activate-theme`、`send-email`

### Internal（内部） {#internal}

**Internalアビリティ**は、お使いのWordPressインストール内でのみ利用可能です。

- チャットインターフェース
- 管理パネル
- ログインしているユーザーのみ
- REST APIや外部連携からは公開されません

例: `manage-settings`、`view-analytics`、`export-data`

### Partner（パートナー） {#partner}

**Partnerアビリティ**は、ホワイトリストに登録されたパートナーのみが利用できます。

- 明示的なパートナーの許可リストへの登録が必要です
- パートナー認証情報を持つREST API経由で利用可能
- パートナー認証を持つMCP経由で利用可能
- 一般ユーザーには利用できません

例: `bulk-import-users`、`modify-billing`、`access-analytics`

### Disabled（無効） {#disabled}

**Disabledアビリティ**は、どこでも利用できません。

- いかなるインターフェースからも公開されません
- チャットでは利用できません
- 管理パネルでは利用できません
- 非推奨または実験的なアビリティに有用です

## アビリティの可視性の管理 {#managing-ability-visibility}

### アビリティの可視性設定へのアクセス {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** に移動します。
2. **Abilities** タブをクリックします。
3. インストールされているすべてのアビリティと、それぞれの可視性レベルのリストが表示されます。

### アビリティの詳細の確認 {#viewing-ability-details}

アビリティをクリックすると、以下の情報が表示されます。

- **Name**: アビリティの識別子
- **Description**: アビリティの機能
- **Current visibility**: Public、Internal、Partner、またはDisabled
- **Partner allow-list**: アクセスできるパートナー（Partner可視性の場合）
- **Last updated**: 可視性が最後に変更された日時
- **Status**: Recognized（認識済み）またはUnclassified（未分類）

### 可視性レベルの変更 {#changing-visibility-levels}

アビリティの可視性を変更するには：

1. リストからアビリティをクリックします。
2. ドロップダウンから新しい可視性レベルを選択します。
3. 「Partner」を選択した場合、許可リストにパートナー識別子を追加します。
4. **Save** をクリックします。

例:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### 一括操作 {#bulk-operations}

複数のアビリティの可視性を変更するには：

1. アビリティの横にあるチェックボックスをオンにします。
2. 一括操作のドロップダウンから新しい可視性レベルを選択します。
3. **Apply** をクリックします。

## パートナー許可リスト（Partner Allow-List） {#partner-allow-list}

**パートナー許可リスト**は、どの外部パートナーがPartnerレベルのアビリティにアクセスできるかを制御します。

### パートナーの追加 {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** に移動します。
2. **Add Partner** をクリックします。
3. パートナー識別子（通常はAPIキーまたは組織ID）を入力します。
4. オプションでパートナー名と説明を追加します。
5. **Save** をクリックします。

### パートナーへのアビリティの割り当て {#assigning-abilities-to-partners}

パートナーを追加した後：

1. **Abilities** タブに移動します。
2. Partner可視性を持つアビリティを探します。
3. クリックして編集します。
4. 「Partner allow-list」セクションで、アクセスを許可するパートナーのチェックボックスをオンにします。
5. **Save** をクリックします。

### パートナーアクセスの取り消し {#revoking-partner-access}

パートナーのアクセスを削除するには：

1. アビリティを編集します。
2. 許可リストからパートナーのチェックボックスをオフにします。
3. **Save** をクリックします。

パートナーは、そのアビリティへのアクセスを直ちに失います。

## 未分類のアビリティ（Unclassified Abilities） {#unclassified-abilities}

Superdav AI Agentが認識しないサードパーティ製アビリティをインストールした場合、それは**Unclassified**としてマークされます。

### 未分類アビリティに関する管理者通知 {#admin-notice-for-unclassified-abilities}

以下の管理者通知が表示されます。

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### 未分類アビリティの確認 {#reviewing-unclassified-abilities}

1. 通知内の **Review Abilities** をクリックします。
2. 未分類のアビリティごとに、以下の情報が表示されます。
   - アビリティ名と説明
   - ソース（どのプラグイン/アドオンがインストールしたか）
   - 推奨される可視性レベル
   - セキュリティ評価

3. 可視性レベルを選択します。
   - **Public**: アビリティを信頼し、どこでも公開します。
   - **Internal**: 内部利用に限定します。
   - **Partner**: 特定のパートナーに限定します。
   - **Disabled**: このアビリティは使用しません。

4. **Classify** をクリックして決定を保存します。

### 未分類アビリティを分類する理由 {#why-classify-unclassified-abilities}

アビリティを分類することのメリット：

- **セキュリティの向上**: 公開するものを明示的に承認できます。
- **事故の防止**: 未分類のアビリティはデフォルトで無効になります。
- **機能の有効化**: 分類されると、アビリティが利用可能になります。
- **決定の文書化**: 選択した内容は監査目的で記録されます。

## さまざまなインターフェースでの可視性 {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Publicアビリティ**はRESTエンドポイント経由で利用可能です。

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**InternalおよびPartnerアビリティ**はREST API経由では利用できません。

### MCPサーバー {#mcp-servers}

**Publicアビリティ**はMCP経由で利用可能です。

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internalアビリティ**はMCP経由で公開されません。

**Partnerアビリティ**はパートナー認証情報を持つ場合にのみ利用可能です。

### WooCommerce連携 {#woocommerce-integration}

WooCommerceに関連する**Publicアビリティ**が利用可能です。

- 商品管理
- 注文処理
- 顧客コミュニケーション

**Internalアビリティ**はWooCommerceには公開されません。

### チャットインターフェース {#chat-interface}

**すべてのアビリティ**（Public、Internal、Partner）が、ユーザーの権限に応じてチャットで利用可能です。

- 管理者はすべての利用可能なアビリティを確認できます。
- 一般ユーザーはPublicアビリティのみを確認できます。
- パートナーはPublic + Partnerアビリティ（ホワイトリスト登録されている場合）を確認できます。

## セキュリティのベストプラクティス {#security-best-practices}

### 最小権限の原則（Principle of Least Privilege） {#principle-of-least-privilege}

- 利用を可能にする最小限の制限的な可視性レベルに設定します。
- 機密性の高い操作にはPartner可視性を使用します。
- 使用しないアビリティは無効化します。

### 定期的な監査 {#regular-audits}

- アビリティの可視性を毎月見直します。
- 未分類のアビリティがないか確認します。
- 使用しないパートナーのアクセス権を削除します。

### ログ記録と監視 {#logging-and-monitoring}

- どの機能が最も使用されているかを監視します。
- パートナーのアクセスパターンを追跡します。
- 通常とは異なるアビリティの使用があった場合にアラートを設定します。

### サードパーティ製アビリティ {#third-party-abilities}

- 有効化する前にサードパーティ製アビリティを確認します。
- 明示的に分類します。
- InternalまたはPartner可視性から開始します。
- 徹底的な審査を経た後のみPublicに昇格させます。

## トラブルシューティング {#troubleshooting}

**リストにアビリティが表示されない**
- アビリティがインストールされ、有効になっているか確認してください。
- プラグイン/アドオンが有効になっているか確認してください。
- ページをリフレッシュしてください。

**アビリティの可視性を変更できない**
- 管理者権限を持っているか確認してください。
- アビリティが他のプラグインによってロックされていないか確認してください。
- 競合するプラグインを無効化してみることを試してください。

**パートナーがアビリティにアクセスできない**
- パートナーが許可リストに含まれているか確認してください。
- アビリティの可視性がPartnerに設定されているか確認してください。
- パートナーの認証情報が正しいか確認してください。
- APIログに認証エラーがないか確認してください。

**未分類のアビリティが残り続ける**
- 管理通知で確認し、分類してください。
- 分類が保存されたか確認してください。
- アビリティを提供しているプラグインが最新であることを確認してください。

## レガシーモードからの移行 {#migration-from-legacy-mode}

Superdav AI Agentの古いバージョンからアップグレードする場合：

- 既存のすべての機能は自動的にPublicとして分類されます。
- 必要に応じて可視性を見直し、調整してください。
- アクセスを制限したい場合を除き、特別な操作は必要ありません。

移行に関する詳細については、**Third-Party Mode Migration** を参照してください。

## 次のステップ {#next-steps}

アビリティの可視性を設定した後：

1. **アビリティの見直し**: インストールされているすべての機能を監査します。
2. **未分類アビリティの分類**: 管理通知に対応します。
3. **パートナーの設定**: Partner可視性を使用する場合は、パートナーを追加します。
4. **使用状況の監視**: どの機能が最も使用されているかを追跡します。
5. **決定の文書化**: 各可視性レベルを選択した理由を記録しておきます。
