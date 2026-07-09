---
title: Tibgħat Emails u Broadcasts
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Tibgħat Emails u Broadcasts (v2) {#sending-emails-and-broadcasts-v2}

_**NOTA IMPORTANTI: Dan l-artiklu jirreferi għal Ultimate Multisite verżjoni 2.x.**_

Ultimate Multisite jiġi b’karatteristika li se tippermettilek tikkomunika mal-klijenti tiegħek billi tibgħat email lil utent immirat jew grupp ta’ utenti kif ukoll tibgħat avviżi fuq id-dashboard tal-amministrazzjoni tagħhom biex ixxandar avviżi

## Żid avviżi tal-amministrazzjoni mad-dashboard tal-klijenti tiegħek b’Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Bl-użu tal-karatteristika broadcast ta’ Ultimate Multisite, tista’ żżid **avviżi tal-amministrazzjoni** mad-dashboard tal-amministrazzjoni tas-subsite tal-utent tiegħek.

Dan huwa estremament utli jekk ikollok bżonn tagħmel avviż bħal manutenzjoni tas-sistema jew toffri prodotti jew servizzi ġodda lill-utenti eżistenti tiegħek. Hekk se jidher l-avviż tal-amministrazzjoni fuq id-dashboard tal-utent tiegħek.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Biex tibda avviż tal-amministrazzjoni, mur fid-dashboard tal-amministrazzjoni tan-network tiegħek u taħt il-menu **Ultimate Multisite**, issib l-għażla **Broadcasts**.

![Paġna tal-lista tal-Broadcasts fl-amministrazzjoni ta’ Ultimate Multisite](/img/admin/broadcasts-list.png)

Tista’ wkoll teditja broadcasts eżistenti:

![Interfaċċa tal-editjar tal-broadcast](/img/admin/broadcast-edit.png)

Minn din il-paġna, ikklikkja l-buttuna **Add Broadcast** fuq nett.

Dan se jiftaħ it-tieqa modali Add broadcast fejn tista’ tagħżel x’tip ta’ broadcast tixtieq tibgħat.

Kompli u agħżel **Message** imbagħad ikklikkja l-buttuna **Next Step**.

![Modal Add broadcast bl-għażla Message magħżula](/img/admin/broadcast-add-message.png)

It-tieqa li jmiss se titolbok jew il-**Target customer** jew it-**Target product**. Innota li tista’ tagħżel aktar minn utent wieħed jew aktar minn prodott wieħed.

Biex tfittex jew account ta’ utent jew prodott, trid tibda tittajpja l-kelma prinċipali ġewwa l-field.

Taħt il-field **Message type**, tista’ tagħżel il-kulur tal-avviż. Dan se jenfasizza l-urġenza tal-messaġġ tiegħek.

Imbagħad tista’ tikklikkja **Next Step**.

![Fields għal Target customers, target product u message type għal broadcast ta’ Message](/img/admin/broadcast-message-targets.png)

It-tieqa li jmiss hija fejn tista’ tibda tikkomponi l-messaġġ tiegħek billi ddaħħal is-suġġett u l-kontenut/messaġġ li tixtieq ixxandar lill-utenti.

![Suġġett tal-messaġġ broadcast u editur tal-kontenut fil-pass tal-kompożizzjoni](/img/admin/broadcast-edit.png)

Wara li toħloq il-messaġġ tiegħek, tista’ mbagħad tagħfas il-buttuna **Send**.

U hekk hu. L-avviż tal-amministrazzjoni għandu jidher immedjatament fuq id-dashboard tal-utent tiegħek.

## Ibgħat emails lill-klijenti tiegħek {#send-emails-to-your-customers}

Bl-użu tal-karatteristika broadcast ta’ Ultimate Multisite, tista’ tibgħat email lill-utenti tiegħek. Għandek għażla li tibgħat l-email biss lil utenti speċifiċi jew timmira grupp ta’ utenti speċifiku bbażat fuq il-prodott jew il-pjan li huma abbonati taħtu.

Biex tibda email broadcast, mur fid-dashboard tal-amministrazzjoni tan-network tiegħek u taħt il-menu Ultimate Multisite, issib l-għażla Broadcast.

![Paġna tal-lista tal-Broadcasts użata bħala l-punt tat-tluq għal email broadcast](/img/admin/broadcasts-list.png)

Minn din il-paġna, ikklikkja l-buttuna **Add broadcast** fuq nett.

Dan se jiftaħ it-tieqa modali Add broadcast fejn tista’ tagħżel x’tip ta’ broadcast tixtieq tibgħat. Kompli u agħżel **Email** imbagħad ikklikkja l-buttuna **Next Step**.

![Modal Add broadcast bl-għażla Email magħżula](/img/admin/broadcast-add-email.png)

It-tieqa li jmiss se titolbok jew il-**Target customer** jew it-**Target produc** t. Innota li tista’ tagħżel aktar minn utent wieħed jew aktar minn prodott wieħed.

Biex tfittex jew account ta’ utent jew prodott, trid tibda tittajpja l-kelma prinċipali ġewwa l-field.

Ladarba l-udjenza mmirata tiegħek tkun magħżula, tista’ tikklikkja **Next Step**.

![Għażla ta’ Target customers u target product għal broadcast ta’ Email](/img/admin/broadcast-email-targets.png)

It-tieqa li jmiss hija fejn tista’ tibda tikkomponi l-email tiegħek billi ddaħħal is-suġġett u l-kontenut/messaġġ li tixtieq tibgħat lill-utenti.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Wara li toħloq il-messaġġ tiegħek, tista’ tagħfas il-buttuna **Send**.

U hekk hu faċli tibgħat email lill-utenti finali tiegħek billi tuża l-karatteristika broadcast.

## Emails tas-sistema {#system-emails}

Emails tas-sistema f’Ultimate Multisite huma dawk **in-notifiki awtomatiċi** mibgħuta mis-sistema wara ċerti azzjonijiet bħar-reġistrazzjoni, il-ħlas, il-mapping tad-domain, eċċ. Dawn l-emails jistgħu jiġu editjati jew modifikati mis-settings ta’ Ultimate Multisite. Jiġi wkoll b’karatteristika li se tippermettilek tirrisettja u timporta settings eżistenti minn installazzjoni oħra ta’ Ultimate Multisite.

### Irrisettjar u Importazzjoni {#resetting--importing}

Verżjonijiet ġodda ta’ Ultimate Multisite, kif ukoll add-ons, jistgħu u se jirreġistraw emails ġodda minn żmien għal żmien.

Biex jiġu evitati kunflitti u kwistjonijiet oħra, **mhux se nżidu t-templates ġodda tal-email bħala System Emails fuq l-installazzjoni tiegħek awtomatikament** , sakemm ma jkunux kruċjali għall-funzjonament korrett ta’ karatteristika partikolari.

Madankollu, super admins u agents jistgħu jimportaw dawn l-emails irreġistrati ġodda permezz tal-għodda tal-importatur. Dak il-proċess joħloq email tas-sistema ġdida bil-kontenut u l-konfigurazzjoni tat-template l-ġdida tal-email, u jippermetti lis-super admin jagħmel kwalunkwe modifika li jixtieq jew iżommhom kif inhuma.

#### Kif timporta emails tas-sistema {#how-to-import-system-emails}

Mur fil-paġna Settings ta’ Ultimate Multisite tiegħek u mur fit-tab **Emails**.

![Tab Emails fis-settings ta’ Ultimate Multisite li turi t-taqsima System Emails](/img/config/settings-emails-tab.png)

Imbagħad, fis-sidebar, ikklikkja fuq il-buttuna **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Fil-paġna System Emails, tara l-buttuna ta’ azzjoni **Reset & Import** fuq nett. Meta tikklikkja dik il-buttuna għandha tiftaħ it-tieqa modali tal-importazzjoni u r-reset.

![Buttuna ta’ azzjoni Reset jew Import fil-paġna tal-amministrazzjoni System Emails](/img/admin/system-emails-reset-import.png)

Imbagħad, tista’ taqleb l-għażliet Import Emails biex tara liema emails tas-sistema huma disponibbli biex jiġu importati.

<!-- Screenshot mhux disponibbli: modal Irrisettja u Importa bl-għażliet Importa Emails estiżi -->

#### Irrisettjar tal-Emails tas-Sistema {#reseting-system-emails}

Drabi oħra, tinduna li l-bidliet li għamilt f’mudell ta’ email partikolari m’għadhomx jaħdmulek u tkun trid tirrisettjah għall-**istat predefinit** tiegħu.

F’każijiet bħal dawn, għandek żewġ għażliet: tista’ sempliċement tħassar l-email tas-sistema u timportaha lura (billi tuża l-istruzzjonijiet ta’ hawn fuq) - dan iħassar il-metriċi tat-trażmissjoni u affarijiet oħra, u għalhekk jagħmel dan il-metodu l-inqas preferut.

Jew tista’ tuża l-**għodda Irrisettja u Importa** biex tirrisettja dak il-mudell tal-email.

Biex tirrisettja mudell tal-email, tista’ ssegwi l-passi ta’ hawn fuq sakemm tasal għall-għodda Irrisettja u Importa, u mbagħad, tattiva l-għażla **Irrisettja** u tagħżel l-emails li trid tirrisettja lura għall-kontenut predefinit tagħhom.

<!-- Screenshot mhux disponibbli: modal Irrisettja u Importa bl-għażliet Irrisettja Emails estiżi -->
