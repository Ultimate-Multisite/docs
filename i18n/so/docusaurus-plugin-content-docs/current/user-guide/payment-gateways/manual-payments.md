---
title: Wax-soo-dhinta Lacagta Qoraalka
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Siiroorinta Lacagalka Tooska ah (v2)

_**Fadlan oogu ogow: Maqaalkan wuxuu la xiriira Ultimate Multisite nooca 2.x.**_

Lacagta tooska ah waa hab aad ku bixiso qaabab kale oo lacag bixinta haddii **Stripe** ama **PayPal** aanu u helin isticmaalayaashaada. Waxay noqon kartaa wareej lacag (wire) ama laba-jeerigeed bank ah ama hab kale oo lacag bixinta ee la heli karo isticmaalayaashaada goobta aad ku joogto.

## Sida loo furayo Lacagta Tooska ah

Waxay fududahay in la dejiyo lacagta tooska ah. Waxaad u baahan tahay inaad siiyeyso inay u furato iyadoo ay ku jiraan qaybta payment gateways, ka dibna aad ku qorto tilmaamo faahfaahsan oo ku saabsan sida isticmaaluhu u bixinayo lacagta.

Marka hore, tag **Ultimate Multisite > Settings > Payments**. Hoos **Payment Gateways**, hubi in aad furto (toggle) **Manual**-ka. Waxaad arki doontaa in qaybta **Payment Instructions** ay kuu soo muuqato.

Ku dar macluumaadka isticmaaluhu u baahan yahay si uu lacagta u bixiyo qaybtaas. Waxay noqon kartaa faahfaahinta xisaabta bankigaaga iyo emailkaaga si isticmaaluhu uu kuu dirto xaqiijinta lacagta, tusaale ahaan.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Halkan waa interface-ka dejinta manual gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Marka aad dejisay, kaliya riix **Save Settings** oo ay dhammaan tahay. Marka isticmaalayaasha ku biiraan shirkaddaada, waxay arki doonaan fariin ah oo u sheegaysa inay helayaan tilmaamahaaga si ay dhammaystiraan iibsiga.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Waxay sidoo kale helayaan fariin ku taal bogga **Thank You** ee aad bixisayna, oo ah tilmaamaha lacagtaada.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Xaqiijinta Lacagta Tooska ah

Si aad u xaqiijin bixinta gacanta (manual payment), tag menu-ga **Payments** ee dhanka bidix ah. Halkaas waxaad arki doontaa dhammaan lacag bixinnada ku jira shabakadahaaga iyo faahfaahinta ay leeyihiin, oo ay ka mid yihiin **status**-kooda. Bixinta gacanta waxay mar kasta waxay lahayd statuska **Pending** (Wixii la filayo) ilaa aad si gacanta u beddesho.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Gelka bogga bixinta adigoo riixaya **reference code**. Boggan waxaa ku jira dhammaan faahfaahinta lacag bixinta la filayo, sida reference ID, alaabta (products), wakhtarrada (timestamps) iyo waxyaabo kale.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Dhanka midig ah, waxaad beddeli kartaa statuska bixinta. Beddelka statuska oo aad u dhigto **Completed** (La dhammeeyay) iyo in aad dib u fuliso (toggle) doorashada **Activate Membership** (Fur Xubnaha), waxay furaysaa website-ka macmiilkaaga, waxaana xubnahaagu wuu shaqayn doonaa.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
