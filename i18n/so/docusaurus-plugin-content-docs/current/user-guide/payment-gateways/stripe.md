---
title: Wax-soo-gaarsiinta Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Wax-sareyntaaya ee Stripe Gateway-ga (v2)

_**Fadlan o daran: Maqaalkan wuxuu la xiriira Ultimate Multisite noortii 2.x.**_

Waxaad u fur kartaa ilaa afar hab oo lacag bixinta ah oo aad ku samayn karto bogga settings-kaaga lacag bixinta: Stripe, Stripe Checkout, PayPal iyo Manual. Maqaalkan, waxaan arki doonaa sida loo isku xiro **Stripe**.

## Furitaanka Stripe

Si aad u furto Stripe sidii hab lacag bixinta oo la heli karo barahaaga, tag **Ultimate Multisite > Settings > Payments** oo ku riix toggle-ka ee dhanka **Stripe** ama **Stripe Checkout** ee qaybta Active Payment Gateways.

![Furitaanka Stripe ee gateway-yada lacag bixinta ee firfircoon](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Habkan wuxuu kuu soo bandhigi doona meel lagu dhejin karo lambarka card-ka si aad u bixiso inta lagu jiro checkout-ka.

![Meel lagu dhejiyo card-ka ee inline ah ee Stripe inta lagu jiro checkout-ka](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Habkan wuxuu u wareejin doonaa macaamiisha bogga Stripe Checkout inta lagu jiro checkout-ka.

![Bogga wareejinta (redirect page) ee Stripe Checkout inta lagu jiro checkout-ka](/img/config/settings-payment-gateways.png)

Helitaanka API keys-kaaga ee Stripe

Marka aad furto Stripe sidii hab lacag bixinta, waxaad u baahan doontaa inaad buuxisato meelaha **Stripe Publishable Key** iyo **Stripe Secret Key**. Waxaad heli kartaa kan adigoo galaysid (log in) akoonkaaga Stripe.

_**Fadlan o daran:** Waxaad fur kartaa **Sandbox mode** si aad u baaristid haddii habka lacag bixinta uu shaqaynayo._

![Meelaha API key-ga Stripe iyo toggle-ka sandbox mode](/img/config/settings-payment-gateways.png)

Dashboard-kaaga Stripe, riix **Developers** ee dhanka sare ee dhabarka (top-right corner), ka dibna **API Keys** ee menu-ga bidixda.

![Qaybta Developers ee dashboard-ka Stripe oo leh API Keys](/img/config/settings-payment-gateways.png)

Waxaad isticmaali kartaa **Test Data** (si aad u hubiso in isku-dhafka uu shaqaynayo website-kaaga dhabta ah) ama aysan isticmaalin. Si aad tani beddesho, si fudud u beddel toggle-ka **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Ka soo koob qiimaha laga qaado **Publishable key** iyo **Secret key**, oo ka yimid qaybta **Token** oo ku dheji meelka ay ku jira qaybta Stripe Gateway ee Ultimate Multisite. Ka dibna riix si aad u **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Ujeedinta Webhook-ka Stripe (Setting up Stripe Webhook)

Stripe wuxuu u dirayaa dhacdo webhook ah oo si loo ogeysiiyo Ultimate Multisite markasta ay dhacdo wax ku dhaca **account-kaaga stripe**.

Riix **Developers** ka dibna dooro qaybta **Webhooks** ee menu-ga bidixda. Ka dib, dhinaca midigta riix **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Waxaad u baahan doontaa **Endpoint URL** *.* Ultimate Multisite wuxuu si toos ah u abuuraa Endpoint URL kaas oo aad ka heli karto hoos ka dhaca qaybta **Webhook Listener URL** ee qaybta **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copy** endpoint URL-kaas oo **ku dheji** meelka ay ku jira qaybta Stripe **Endpoint URL**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Markaasi waa inaad doorato **Event** *.* Hoos, waxaad kaliya u baahan tahay inaad hubiso sanduuqa **Select all events** oo aad riixdo si aad u **Add events**. Ka dibna riix **Add Endpoint** si aad u kaydsato isbeddellada.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Waa la soo qabtay, inteerkaaga Stripe ayaa dhammaystiran!
