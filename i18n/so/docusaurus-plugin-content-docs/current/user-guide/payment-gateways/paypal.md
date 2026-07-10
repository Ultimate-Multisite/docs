---
title: Wax-soo-dhinta PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Wax-sareynta PayPal Gateway-ga (v2) {#setting-up-the-paypal-gateway-v2}

_**Fadlan Muhiim Ah: Qoraalkan wuxuu la xiriira Ultimate Multisite nooca 2.x.**_

Waxaad u furtaa ilaa afar hab oo lacag bixinta ah oo aad samayn karto bogga settings-kaaga lacag bixinta: Stripe, Stripe Checkout, PayPal iyo Manual. Qoraalkan, waxaan ku arki doonaa sida loo isku xiro **PayPal**.

Sida Stripe, PayPal si ballaaran ayaa loo isticmaalaa lacag bixinta online-ka ah, gaar ahaan bogga WordPress-ka ah. Qoraalkan wuxuu kuu hagayaa sida aad u isticmaali karto PayPal sidii hab lacag bixinta ee ku jira shabakadahaaga.

Xusuusnow inaad u baahan tahay **PayPal Business account** si aad u hesho API credential-ka loo baahan yahay isku xirtaalkaasi.

## Furitaanka PayPal-ka shabakadahaaga {#enabling-paypal-on-your-network}

Si aad u furto PayPal sidii hab lacag bixinta la heli karo shabakadahaaga, tag **Ultimate Multisite > Settings > Payments** tab-ka oo ku calaamadii (tick) ee dhanka PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Isticmaalka wizard-ka hagaajinta {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 wuxuu ku daray wizard-ka hagaajinta (setup wizard) ee PayPal-ka lacag bixinta settings-ka gateway-ga. Marka aad furto PayPal, isticmaal wizard-ka **Ultimate Multisite > Settings > Payments** si aad u doorato sida aad rabto in la xiriirto gateway-ga iyo inaad xaqiijiso nooca credential-ka ee weli loo baahan yahay ka hor intaadan kaydin.

Wizard-ku wuxuu taageera laba hab oo hagaajin ah:

* **Galka macluumaada si gacanta loo galo (Manual credential entry)**: Isticmaal waddadaas haddii aad horey u haysato fursadaha PayPal API credentials, haddii aan la heli karin OAuth setup-ka liisaskaaga, ama haddii aad dooratay inaad isku daydo inaad ka koobato macluumaadka PayPal si aad isku beddesho. Ku qor Username-ka API, Password-ka API, iyo Signature-ka API ee meelaha PayPal-ka, kadibna kaydi dejinta lacagta (payment settings).
* **Gudaha furitaanka OAuth (OAuth connection gate)**: Isticmaal waddadaas kaliya haddii fursadda OAuth ay ku jirto oo la fulinayo install-kaaga. Wizard-ku wuxuu muujinayaa habka OAuth ee ku jira feature flag, sidaas darteed shabakadaha aan lahayn flag-ga waxay sii socdaan inay isticmaalaan meelaha gacanta loo galo macluumaadka.

Haddii aadan arki karin fursadda OAuth ee wizard-ka, dhammaystir flow-ga gacanta loo galo macluumaadka hoose. Gateway-gu wuxuu shaqeeyaa si la mid ah PayPal Business API credentials-ka kuwa hore ee Ultimate Multisite 2.x.

## Helitaanka PayPal API credentials {#getting-the-paypal-api-credentials}

Marka aad fuliso (enable) PayPal sidii gateway lacagti, waxaad u baahan doontaa inaad buuxisato meelaha Username-ka API ee PayPal, Password-ka API ee PayPal iyo Signature-ka API ee PayPal.

Waxaad heli kartaa kan adiga ayaa galay account-kaaga [Live](https://www.paypal.com/home) ama [Sandbox](https://www.sandbox.paypal.com/home).

(Xusuusnow inaad isticmaali karto **sandbox mode** si aad u baaritaan lacagta oo aad aragto haddii gateway-gu si sax ah loo dejiyay. Si kaliya dib u fuli qaybta la xiriirta.)

![Meelaha PayPal API credentials iyo sandbox mode toggle](/img/config/settings-payment-gateways.png)

Si aad codsato API Signature ama macluumaadka Certificate ee account-kaaga PayPal:

  1. Tag [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)-kaaga.

  2. Qaybta **API access** (Fursadda isticmaalka API), guji **Update**.
![Account settings-ka PayPal ee qaybta API access](/img/config/settings-payment-gateways.png)

3. Hooska **NVP/SOAP API integration (Classic)**-ka ho, **Manage API credentials** ku riixow.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Haddii aad horey u samaysay API Signature ama Certificate, waxaad la wareegi doontaa bog ay ka heli karto macluumaadkaaga.

     * _**Fadlan ogaow:** Haddii lagu weydiiyo in la xaqiijiyo akoonkaaga PayPal, markaas raac tilmaamaha laga soo bandhigay shaashadda._

  4. Dooro **hal** oo ka mid ah doorooyinkan hoose, ka dibna riix **Agree and Submit**.

     * **Request API Signature** – Dooro haddii aad u baahan tahay xaqiijinta API Signature-ga.

     * **Request API Certificate** – Dooro haddii aad u baahan tahay xaqiijinta API Certificate-ka.

  5. PayPal waxay samaynaysaa macluumaadka API-gaaga sida tan:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** waxaa ka mid ah Username-ka API, Password-ka API, iyo Signature-ka, oo aan waayo. Qaybtaas waxay si default ah ugu qarsoon tahay si loo xoojiyo amnigaaga. Rixi **Show/Hide** si aad u furto ama u xirto. Marka la dhammeeyo, riix **Done**.

     * **API Certificate credentials** waxaa ka mid ah Username-ka API, Password-ka API, iyo Certificate-ka, kaas oo si toos ah u dhici doono 3 sano ka dib. Rixi **Download Certificate** si aad u kaydsato API Certificate-ka desktop-kaaga.

Waa la dhammeeyay, isdhexgalka lacagtaada PayPal wuu dhammaystiray!

Haddii aad qabto su'aalo ku saabsan settings-ka PayPal, waxaad tusi kartaa [Help Center](https://www.paypal.com/br/smarthelp/home) ee PayPal.
