---
title: Foomamka La Xiriirka Qaybaha Website-ga
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Foomamada La Xiriirka ee Sameynta Website-ga

Superdav AI Agent v1.10.0 wuxuu ku siinayaa awoodda in la abuuro foomamada la xiriirka (contact forms) si toos ah iyadoo la isticmaalayo interface-ka qoraalka (chat interface) iyo agent-ka Site Builder. Tani waxay kuu oggolaanaysaa inaad ku dari foomamada la xiriirka oo si buuxda u shaqeeya qayb kasta oo bogga ah iyadoo aan la ka baxin chat-ka.

## Aragtida Guud (Overview) {#overview}

Awoodda samaynta foomamada la xiriirka ee Site Builder (`create_contact_form`) waxay si toos ah u ogaataa plugin-ka foomamada aad ku haysato, ka dibna waxay abuureysaa foomamada la xiriirka iyadoo la isticmaalayo awoodaha bini'aheeda (native capabilities). Plugin-yada foomamada ee taageerada waxaa ka mid ah:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Kaashinka ayaa si toos ah u xulaya plugin-ka foomamada ugu habboon ee boggaaga oo abuura foomamada la xiriirka oo ku habboon plugin-kaas.

## Sameynta Foomamada La Xiriirka (Creating a Contact Form) {#creating-a-contact-form}

Si aad u samayso foomamada la xiriirka adiga oo isticmaalaya Site Builder:

1. Furso **Gratis AI Agent** chat panel-ka WordPress admin-ka.
2. U beddel **Site Builder** agent-ka adigoo riixaya astaanta agent-ka ee header-ka qoraalka (chat header).
3. Sharax barnaamijka la xiriirka (contact form) aad rabto inaad samayso. Tusaale ahaan:

   > "Ku dar barnaamij la xiriirka (contact form) bogga Contact-ka oo leh meelo lagu qoro magaca, email-ka, fariinta, iyo lambarka taleefanka."

   Ama si fudud:

   > "Samayso barnaamij la xiriirka (contact form) bogga Contact-ka."

4. Site Builder-ku wuxuu samayn doonaa barnaamijka la xiriirka (contact form) wuxuuna soo celin doonaa shortcode diyaar u ah in lagu dhejiyo (embed).

## Isticmaalka Shortcode-ka La Samay {#using-the-generated-shortcode}

Marka Site Builder-ku samaynayo barnaamijka la xiriirka, wuxuu soo celin doonaa shortcode (tusaale ahaan, `[contact-form-7 id="123"]`). Waxaad samayn kartaa:

1. **Ku dhowuu bog ama maqaal ku dhejin** — Copy shortcode-ka (koodka kooban) oo ku dheji bog ama maqaal kasta adoo isticmaalaya block editor ama classic editor.
2. **Isticmaal Site Builder-ka si aad u ku dariin** — Weydii Site Builder-ka inuu form-ka si toos ah ugu dariyo bog gaar ah:

   > "Add the contact form to the Contact page." (Ku darii form-ka la xiriirka bogga La Xiriirka.)

3. **Isticmaal template** — Haddii aad ku mahadsan tahay PHP, waxaad shortcode-kaas ku dari kartaa faylka template-ka theme-kaaga.

## Wax ka beddelid Form-ka La Xiriirka (Customizing the Contact Form) {#customizing-the-contact-form}

Marka Site Builder-ku form-ka la xiriirka uu sameeyo, waxaad si dheeri ah u hagaajin kartaa:

### Iyadoo la isticmaalayo Chat Interface-ka {#via-the-chat-interface}

Weydii Site Builder-ka inuu form-kaas beddelo:

> "Update the contact form to add a subject field and make the message field required." (Beddel form-ka la xiriirka si loo daro qayb loogu talagalay mawduuca oo loo dhigo meelka fariinta inuu noqdo wax waajib ah.)

Site Builder-ku wuxuu hagaajin doonaa form-ka wuxuuna soo celin doonaa shortcode-ka la cusboonaysiiyay.

### Iyadoo la isticmaalayo Admin Interface-ka Plugin-ka Form-ka {#via-the-form-plugins-admin-interface}

Waxaad si toos ah ugu hagaajin kartaa foomkaaga settings-ka plugin-ka foomkaaga:

1. Ku socdo **Contact Form 7** (ama plugin-ka foomkaaga oo aad ku rakibtay) ee WordPress admin-ka.
2. Hel foomka uu sameeyay Site Builder.
3. Hagaasi qaybaha foomka, xeerada xaqiijinta (validation rules), iyo ogeysiisyada email-ka sida loo baahan yahay.

## Form Plugins and Compatibility {#form-plugins-and-compatibility}

Site Builder wuxuu si toos ah u ogaadaa nooca plugin-ka foomka ee ku rakiban website-kaaga, ka dibna wuxuu isticmaalaa kanas si uu sameeyo foomka la xiriirka (contact form). Haddii aad hesho in laba ama badan oo plugin-ka foomka la rakibay yihiin, Site Builder wuxuu u qaataa inay horumaray yihiin arrimahan:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Haddii aanu jirin wax ka mid ah plugin-kan oo la rakibay, Site Builder wuxuu ku talinayaa inaad mid ka soo dejiso (install) intaadan samayn foomka la xiriirka.

## Email Notifications {#email-notifications}

Formaalka la samaysay Site Builder-ka waxaa inta badan loo dejiyay inuu u dirto o-mail notification-s ah oo loo dirayo maamulaha website-ka. Waxaad hagaajin kartaa email-ka la qaadanayo iyo fariinta warbixinta:

1. Tag interface-ka admin ee plugin-ka form-kaaga.
2. Hel form-ka uu samay Site Builder-ku.
3. Hagaaji dejimaha notification-ka email-ka ah.

Si aad u hesho tilmaamo faahfaahsan, isku day inaad la socoto dukumeentiga plugin-ka form-kaaga:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Tusaaleoyin Isticmaal {#example-use-cases}

### Form-ka La Xiriirka Fudud {#simple-contact-form}

> "Samay form-ka la xiriirka fudud oo leh meelaha magaca, email-ka, iyo fariinta."

### Foomka Cadhan-Cadhan (Multi-Step Form) {#multi-step-form}

> "Abuur foom la xiriir ah oo leh tallaabo koowaad oo ku saabsan macluumaadka la xiriirka iyo tallaabo labaad oo ku saabsan fariinta iyo habka lala xiriirka la rabo."

### Foomka Laba-Tallaabo Ah (Form with Conditional Logic) {#form-with-conditional-logic}

> "Abuur foom la xiriir ah oo muujinaya qaybo kala duwan iyadoo ku xiran waxa isticmaaluhu doorbiyay ka soo qaadaday dropdown-ka."

### Foomka La Soo Dhaqan File (Form with File Upload) {#form-with-file-upload}

> "Abuur foom la xiriir ah oo u oggolaanaya isticmaalayaasha inay soo dhaqaaraan fayl ama dhejmis (attachment)."

:::note
Waxaa laga heli karaa abuurista foomka la xiriirka Superdav AI Agent v1.10.0 iyo intaas ka dambeeya. Agablisda Site Builder waa inuu hawlgalka badan yahay si loo isticmaalo awooddan.
:::
