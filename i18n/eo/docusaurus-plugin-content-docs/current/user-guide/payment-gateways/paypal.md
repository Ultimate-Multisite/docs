---
title: Konfigurado de PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# La Konfiguracio de la Pasarela PayPal (v2)

_**NOTO IMPORTANTE: Esta artikolo se refi a Ultimate Multisite versio 2.x.**_

Puŝas aktivigi ĝis kator metodoj de pago sur nia paĝo de konfigurado de pago: Stripe, Stripe Checkout, PayPal kaj Manua. En ĉi tiu artikolo ni vidos kiel integriĝi kun **PayPal**.

Simile kiel Stripe, PayPal estas ampi uziata por online pagoj, precipe sur WordPress-vintimoj. Ĉi tiu artikolo guidas vin kiel uzi PayPal kiel metodon de pago disponibile en via reron.

Notu, vi bezonas **konton de Biznes PayPal** por akuti la kredencojn API necesajn por ĉi tiu integriĝo.

## Aktivado de PayPal sur via rero

Por aktivi PayPal kiel disponible metodo de pago sur via rero, dirigi al **Ultimate Multisite > Settings > Payments** tab kaj marku la kordon apud PayPal.

![Aktivado de PayPal en aktifaj pagaj pasiloj](/img/config/settings-payment-gateways.png)

## Uzo de la gvidita montraĝo (wizard)

Ultimate Multisite 2.10.0 aĉas gviditan montraĝon de PayPal por konfigurado de pasiloj de pago. Post kiam vi aktivas PayPal, uzu la montraĝon sur **Ultimate Multisite > Settings > Payments** por elgi kiel vi volas konekti la pasilon kaj konfirme ki kie kredencoj estas necesaj antaŭ salvado.

La montraĝo suportas du montraj vojoj:

* **Manuale inserado de credenciais**: Use este caminho quando você já tem as credenciais da API do PayPal, quando a configuração OAuth não está disponível para sua conta, ou quando prefere copiar as credenciais diretamente do PayPal. Insira o Nome de Usuário da API (API Username), a Senha da API (API Password) e a Assinatura da API (API Signature) nos campos do PayPal e depois salve as configurações de pagamento.
* **Portão de conexão OAuth**: Use este caminho apenas quando a opção OAuth estiver disponível e ativada para sua instalação. O assistente mostra o fluxo OAuth por trás de um *feature flag*, então redes sem esse *flag* continuarão usando os campos de inserção manual de credenciais.

Se você não vir a opção OAuth no assistente, complete o fluxo de inserção manual de credenciais abaixo. O gateway funciona com as mesmas credenciais da API do PayPal Business das versões anteriores do Ultimate Multisite 2.x.

## Obtendo as credenciais da API do PayPal

Depois que o PayPal for ativado como gateway de pagamento, você precisará preencher os campos para **Nome de Usuário da API** (PayPal API Username), **Senha da API** (PayPal API Password) e **Assinatura da API** (PayPal API Signature).

Você pode obter isso fazendo login na sua conta [Ao Vivo](https://www.paypal.com/home) ou [Sandbox](https://www.sandbox.paypal.com/home) do PayPal.

(Lembre-se que você pode usar o **modo sandbox** para testar pagamentos e ver se o gateway está configurado corretamente. Basta ativar a seção correspondente.)

![Campos de credenciais da API do PayPal e alternador do modo sandbox](/img/config/settings-payment-gateways.png)

Para solicitar Assinatura de API (API Signature) ou credenciais de Certificado para sua conta do PayPal:

  1. Vá para suas [Configurações da Conta](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Na seção **Acesso à API** (API access), clique em **Atualizar** (Update).
![Configurações da conta do PayPal com a seção de acesso à API](/img/config/settings-payment-gateways.png)

3. Under **NVP/SOAP API integration (Classic)**, kliki **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Se vi unu déjà generita una API Signature aŭ Sertifikato, vi wird redirekti al paĝo kie vi povas trovi vian kredenciojn.

     * _**Notita:** Se vi wird petita verifi vian PayPal konto, sekvi instrukcijn sur la ekrano._

  4. Selekti _un_ de la seguenti opcioj, tiam kliki **Agree and Submit**.

     * **Request API Signature** – Selekti por autentifo per API Signature.

     * **Request API Certificate** – Selekti por autentifo per API Sertifikato.

  5. PayPal generas vian kredenciojn de API kiel seguenti:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** inkluzas API Username, API Password kaj Signature, kiu ne ekspiras. Ĉi tiuj valoroj estas malŝuteblaj per defolo por pliigita sekureco. Kliki **Show/Hide** por ŝanĝi ilin al on ytiro kaj off. Kiam vi finas, kliki **Done**.

     * **API Certificate credentials** inkluzas API Username, API Password kaj Sertifikato, kiu ekspiras aŭtomate dopo tri jaroj. Kliki **Download Certificate**, por konservi la API Sertifikaton al via deskopitaŭro.

Tio estas ĉio, via PayPal pagointegrita estas finita!

Se vi havas jakojn pri PayPal ŝanĝoj, vi povas referi al [Help Center](https://www.paypal.com/br/smarthelp/home) de PayPal.
