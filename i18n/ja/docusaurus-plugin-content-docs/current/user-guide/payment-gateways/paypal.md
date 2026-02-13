---
title: PayPalの設定
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# PayPalゲートウェイの設定 (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

支払設定ページでは最大4つの支払方法を有効化できます: Stripe、Stripe Checkout、PayPal、Manual。この記事では **PayPal** の統合方法を見ていきます。

Stripeと同様に、PayPalはオンライン決済で広く利用されており、特にWordPressサイトで人気です。本記事では、ネットワーク上で利用可能な支払方法としてPayPalを使用する方法を案内します。

この統合に必要なAPI認証情報を取得するには、**PayPal Businessアカウント**が必要であることに注意してください。

## ネットワークでPayPalを有効化する

ネットワークでPayPalを利用可能な支払方法として有効化するには、**Ultimate Multisite > Settings > Payments** タブに移動し、PayPalの横にあるチェックボックスをオンにします。

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## PayPal API認証情報の取得

PayPalが支払ゲートウェイとして有効化されたら、PayPal API **Username**、PayPal API **Password**、PayPal API **Signature** のフィールドに値を入力する必要があります。

これらは、PayPalの[Live](https://www.paypal.com/home)または[Sandbox](https://www.sandbox.paypal.com/home)アカウントにログインして取得できます。

(**sandbox mode**を使用して支払テストを行い、ゲートウェイが正しく設定されているか確認できます。該当セクションをオンにしてください。)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

PayPalアカウントのAPI SignatureまたはCertificate認証情報をリクエストするには:

1. [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) に移動します。  
2. **API access** セクションで **Update** をクリックします。  
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)
3. **NVP/SOAP API integration (Classic)** の下で **Manage API credentials** をクリックします。  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

   * 既にAPI SignatureまたはCertificateを生成済みの場合、認証情報を確認できるページにリダイレクトされます。  
   * _**注意:** PayPalアカウントの確認を求められた場合は、画面上の指示に従ってください。_

4. 以下のオプションのうち**1つ**を選択し、**Agree and Submit** をクリックします。  
   * **Request API Signature** – API Signature認証を選択します。  
   * **Request API Certificate** – API Certificate認証を選択します。  

5. PayPalは以下のようにAPI認証情報を生成します：  
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

   * **API Signature credentials** にはAPI Username、API Password、Signatureが含まれ、期限はありません。これらの値はデフォルトで非表示にされ、**Show/Hide** をクリックして表示/非表示を切り替えます。完了したら **Done** をクリックします。  
   * **API Certificate credentials** にはAPI Username、API Password、Certificateが含まれ、3年後に自動で期限切れになります。**Download Certificate** をクリックしてAPI Certificateをデスクトップに保存します。

これで、PayPalの支払統合は完了です！

PayPal設定に関して質問がある場合は、PayPalの[Help Center](https://www.paypal.com/br/smarthelp/home) を参照してください。
