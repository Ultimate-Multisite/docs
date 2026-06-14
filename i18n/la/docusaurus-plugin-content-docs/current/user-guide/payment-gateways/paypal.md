---
title: Configurare PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurare il Gateway PayPal (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Puoi attivare fino a quattro metodi di pagamento nella pagina delle impostazioni dei pagamenti: Stripe, Stripe Checkout, PayPal e Manuale. In questo articolo vedremo come integrarsi con **PayPal**.

Come Stripe, PayPal è ampiamente utilizzato per i pagamenti online, specialmente sui siti WordPress. Questo articolo ti guiderà su come usare PayPal come metodo di pagamento disponibile nella tua rete.

Nota che devi avere un **account Business PayPal** per ottenere le credenziali API necessarie per questa integrazione.

## Abilitare PayPal sulla tua rete

Per abilitare PayPal come metodo di pagamento disponibile sulla tua rete, vai a **Ultimate Multisite > Impostazioni > Pagamenti** e spunta la casella accanto a PayPal.

![Abilitare PayPal nei gateway di pagamento attivi](/img/config/settings-payment-gateways.png)

## Utilizzare il wizard di configurazione guidato

Ultimate Multisite 2.10.0 aggiunge un wizard di configurazione PayPal guidato alle impostazioni del gateway di pagamento. Dopo aver abilitato PayPal, usa il wizard su **Ultimate Multisite > Impostazioni > Pagamenti** per scegliere come vuoi collegare il gateway e confermare quali credenziali sono ancora necessarie prima di salvare.

Il wizard supporta due percorsi di configurazione:

* **Inserire credenziali manualmente**: Usa questo percorso se hai già le credenziali API di PayPal, se la configurazione OAuth non è disponibile per il tuo account, o se preferisci copiare le credenziali da te stesso su PayPal. Inserisci l'API Username, l'API Password e la API Signature nei campi PayPal, quindi salva le impostazioni di pagamento.
* **Porta d'accesso OAuth**: Usa questo percorso solo quando l'opzione OAuth è disponibile e abilitata per la tua installazione. Il wizard mostra il flusso OAuth dietro un feature flag, quindi le reti senza il flag continueranno a usare i campi per l'inserimento manuale delle credenziali.

Se non vedi l'opzione OAuth nel wizard, completa il flusso di inserimento manuale delle credenziali qui sotto. Il gateway funziona con le stesse credenziali API Business PayPal delle precedenti versioni Ultimate Multisite 2.x.

## Ottenere le credenziali API di PayPal

Una volta abilitato PayPal come gateway di pagamento, dovrai compilare i campi per l'**API Username** di PayPal, la **API Password** di PayPal e la **API Signature** di PayPal.

Puoi ottenerle effettuando l'accesso al tuo account [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

(Ricorda che puoi usare il **modal sandbox** per testare i pagamenti e vedere se il gateway è configurato correttamente. Basta attivare la sezione corrispondente.)

![Campi credenziali API PayPal e interruttore modalità sandbox](/img/config/settings-payment-gateways.png)

Per richiedere l'API Signature o le credenziali del certificato per il tuo account PayPal:

  1. Vai alle tue [Impostazioni Account](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Nella sezione **Accesso API**, clicca su **Aggiorna**.

3. Under **NVP/SOAP API integration (Classic)**, clique sobre **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Se já gerou uma Assinatura de API ou Certificado, você será redirecionado para uma página onde poderá encontrar suas credenciais.

     * _**Nota:** Se for solicitado que você verifique sua conta PayPal, siga as instruções na tela._

  4. Selecione _uma_ das opções abaixo e clique em **Agree and Submit**.

     * **Request API Signature** – Selecione para autenticação por Assinatura de API.

     * **Request API Certificate** – Selecione para autenticação por Certificado de API.

  5. O PayPal gera suas credenciais de API da seguinte forma:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * As credenciais de **API Signature** incluem um Nome de Usuário de API, uma Senha de API e uma Assinatura, que não expira. Esses valores estão ocultos por padrão para maior segurança. Clique em **Show/Hide** para ligá-los ou desligá-los. Quando terminar, clique em **Done**.

     * As credenciais de **API Certificate** incluem um Nome de Usuário de API, uma Senha de API e um Certificado, que expira automaticamente após três anos. Clique em **Download Certificate** para salvar o Certificado de API no seu desktop.

Pronto, sua integração de pagamento PayPal está completa!

Se tiver alguma dúvida sobre as configurações do PayPal, você pode consultar o [Help Center](https://www.paypal.com/br/smarthelp/home) do PayPal.
