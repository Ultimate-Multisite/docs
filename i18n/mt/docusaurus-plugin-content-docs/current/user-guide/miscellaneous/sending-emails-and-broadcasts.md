---
title: Tessend Emailijiet u Broadcasts
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Aċċessament ta Emailijiet u Broadcasts (v2)

_**NOTA KRITIKA: Dan l-artikolu jiferi għall-versjoni 2.x ta Ultimate Multisite.**_

Ultimate Multisite jista' jgħinek b'funzjoni li ti lattjaħq il-komunikazzjoni mal-istmenti tiegħek billi trassili email għal utentità magħrufa jew gruppi ta' utenti, u ttrassili notifikazzjonijiet fuq dashboard l-admin tagħhom biex ttrassili annunzjali.

## Aċċessament ta notifikazzjonijiet admin fuq dashboard il-istmenti tiegħek b'Broadcasts

Bxejnejt l-funzjoni ta Broadcasts tal-Ultimate Multisite, tista' ti aġixxi **notifikazzjonijiet admin** fuq dashboard l-admin tal-subsite tal-utentità tiegħek.

Dan huwa ħafna għal jkun għandek biex tagħmel annunċja kif ma manutenzjoni tal-sistema jew toffri prodotti jew servizzi ġoddi lil utenti esistenti tiegħek. Dan hija l-mod kif se tistempla l-notifikazzjoni admin fuq dashboard l-utentità tiegħek.

<!-- Screenshot unavailable: Broadcast admin notifica mostrata fuq dashboard tal-istmenti ta' utentità -->

Biex tibda notifikazzjoni admin, għandi tmur għad dashboard l-admin tal-network tiegħek u taħt menu **Ultimate Multisite**, tista' tikkunsidixxi l-opzjoni **Broadcasts**.

![Pagja lista Broadcasts f Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Tista' tikkunsidixxi wkoll broadcast esistenti:

![Interfaccia ta modifika broadcast](/img/admin/broadcast-edit.png)

Min-dinja, ikliki fuq bixogħd **Add Broadcast** fuq l-top.

Dan jgħinek li jiftah il-modal window ta Add broadcast fejn tista' tagħżel qed tipi ta broadcast li tista' trassili.

Mura għal selezjoni **Message** u ikliki fuq bixogħd **Next Step**.

![Modal ta Add broadcast ma' l-opzjoni Message msecelta](/img/admin/broadcast-add-message.png)

Il-window prossimu se jistaqqa' minnne għal **Target customer** jew **Target product**. Nota li tista' tagħżel aktar min waħda utentità jew aktar min waħda prodott.

כדי לחפש משתמש או מוצר, אתה צריך להתחיל להקליד את המילה (keyword) בתוך השדה.

תחת שדה **Message type**, תוכל לבחור את הצבע של ההודעה. זה ידגיש את הדחיפות של המסר שלך.

לאחר מכן תוכל ללחוץ על **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

החלון הבא הוא המקום שבו תוכל להתחיל לנסח את ההודעה שלך על ידי הזנת הנושא (subject) והתוכן/המסר שברצונך לשדר למשתמשים.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

לאחר יצירת המסר שלך, תוכל ללחוץ על כפתור **Send**.

וזהו. ההודעה של האדמין אמורה להופיע מיד בלוח המחוונים (dashboard) של המשתמש שלך.

## לשלוח מיילים ללקוחותיך

באמצעות תכונת הbroadcast של Ultimate Multisite, תוכל לשלוח אימייל למשתמשים שלך. יש לך אפשרות לשלוח את האימייל רק למשתמשים ספציפיים או לפנות לקבוצת משתמש ספציפית בהתבסס על המוצר או התוכנית שהם מנויים תחתיה.

כדי להתחיל בשידור אימייל, עבור ללוח המחוונים של מנהל הרשת שלך ובתיבת התפריט של Ultimate Multisite, תמצא את האפשרות Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

מหนעמוד הזה, לחץ על כפתור **Add broadcast** למעלה.

זה יפתח את חלון ה-modal של Add broadcast שבו תוכל לבחור איזה סוג של שידור ברצונך לשלוח. המשך ובחר **Email** ואז לחץ על כפתור **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

החלון הבא ישאל אותך בין **Target customer** (לקוח יעד) או **Target product** (מוצר יעד). שימו לב שתוכל לבחור יותר משתמש אחד או יותר ממוצרים.

Biex tridixxefa għal ricerca ta kontu utente jew prodotto, għandek biex tibda ti tikkba l-parola chiave f'il-field.

Mdaqqaq il-**Next Step** waqt li selezjonat il-target audience tiegħek.

![Selezzjoni tal-klijenti target u prodotta target għall-Email broadcast](/img/admin/broadcast-email-targets.png)

Il-fenestra li jġ peress huwa dawk li tista' tibda tgħanni l-email tiegħek biex ti tikkba is-soggetto u l-kontenut/messa li tista' trassi lill-utenti.

<!-- Screenshot unavailable: Editor tal-soggetto u l-kontenut tal-broadcast email fuq il-step ta kompożjoni -->

Wara li tgħmli l-messagħa tiegħek, tista' ti tikkba bix **Send**.

U dan huwa kif huwa fasil trassi l-email għall-utenti tiegħek u l-feature ta broadcast.

## Emailijiet tal-Sistema (System emails)

Emailijiet tal-sistema f Ultimate Multisite huma dawk **notifikazzjonijiet awtomatiku** li jinvirtu mill-sistema wara x-xogħol speċifi bħal registrazzjoni, pagament, mappatura tal-domeni, ecc. Il-emailijiet hajn tista' jiġu emendati jew modifiktati mill-settings ta Ultimate Multisite. Huwa jkompli għall-feature li tista' ti riżetti u ti importi settings esistenti min installazzjoni oħra ta Ultimate Multisite.

### Riżettare u Importare (Resetting & Importing)

Bizzjoni tal-Ultimate Multisite bizzjoni, in kimija, jista' u jgħandu emailijiet ġeddin mill-ħin u l-add-ons.

Biex tneħħi conflitti u oħra problemi, **ma naddispoċċiam il-template ta l-email ġdid bħala Emailijiet tal-Sistema fuq installazzjoni tiegħek awtomatikament**, mela jkun essenzjali għall-funzionamenti korretti ta xi feature speċifi.

Madankollu, super admins u agenti jista'o jimportaw il-emailijiet ġeddin registrati biex jikbru l-importer tool. Il-proċess huwa li jieħu email tal-sistema ġdid mal-kontenut u konfigurazzjoni tal-template ta l-email ġdid, li jista' super admin jmexxi minnha qualsiex is-modifikazzjonijiet li jiddi jew jippass ilha kif hija.

#### Come timporta emailijiet tal-sistema

Đi le la pagina tal-Settings ta Ultimate Multisite u mrid għall **Emails** tab.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Imkien, fuq il sidebar, għal-click fuq il button **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Fuq la pagina tal-System Emails, tiegħek tar-top tista' tara l-action button **Reset & Import**. Għal-click fuq dan button se jiftħu il modal window ta import u reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Imkien, puoi toggli l-opzioni tal-Import Emails biex tara li quali emails system huma disponibili biex jiġu importati.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Resettjar ta System Emails

Al-aħħar, tista' isseħħ li l-modifikazzjonijiet li għamti għal template tal-email معين ma qed jgħandu għalik u tixtieq resettawlo għall-stato **default** tiegħu.

F'mod kif hu, għandek żgħar opzjonijiet: tista' sempliament tal-delete tal-system email u import tiegħu lura (bxejnu l-istruzzjonijiet fejn qed). Dan se jgħleb metrics ta l-ċekk u dikki hija l-metodu meno preferut.

Oppurt, puoi uża il **Reset & Import tool** biex tista' resettawli dan template tal-email.

Biex tista' resettawli template tal-email, puoi segwi l-istruzzjonijiet fejn qed għandek toħrajt l-Reset & Import tool, u poi toggli l-opzjoni **Reset** u selezżjoni l-emails li tista' resettawli għall-kontenut default tiegħhom.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
