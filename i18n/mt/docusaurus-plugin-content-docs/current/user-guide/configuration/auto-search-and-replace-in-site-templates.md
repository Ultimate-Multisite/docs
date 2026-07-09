---
title: Auto Search and Replace f'Site Templates
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search and Replace f'i Template Sites (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Il tutorial ma jirxi WP UItimo borsa 2.x.**_

Il forzament più potente ta Ultimate Multisite huwa l-possibilità ta aġġixxi test, kollur u seleżjoni tal-field għall-form ta registrazzjoni. Wakqaf il-data tagħna mghinnata, nista uffuha biex nistabbilixhom il-kontenut f'partijiet tal-template siti selejtu. Imbagħad, meta is-siti ġdida titlob, Ultimate Multisite sistaġġi l-placeholder b'informazzjoni effettiva li tmur fl-registrazzjoni.

Bħal xi eżempju, tista' uffuha siti template tagħkom b placeholder. Il-placeholder għandu jkun murat bl-għandhom bid-dwarijiet żwina - {{placeholder_name}}.

Imbagħad, tista' is-sogħtu aġġixxi field ta registrazzjoni li jittlaq il-data kien.

Il-Ultimate Multisite sistaġġi l-placeholder b'dati li qed jkun għandhom l-klijenti awtomatikament.

## **Soluzzjoni tal-problema "template full ta placeholder"** {#solving-the-template-full-of-placeholders-problem}

Koll dan huwa grazi, iżda nistgħu nqaslu b'problema xogħol: il-template siti tagħna - li l-klijenti jistgħu jvisittawhom - huma kollha mfulaħa b placeholder squall li ma jgħidu ħafna.

Biex nisolvi dan, noffru l-opzjoni ta għatti valuri fiktivi għall-placeholder, u nistabbilixhom biex nisagħqu u nistabbilixhom il-kontenut tagħhom fuq is-siti template waqt li l-klijenti qed jvisittawhom.

Tista' tgħandu l-akses għall-editor tal-placeholder billi tmur għand **Ultimate Multisite > Settings > Sites**, tqas il-Area ta Opzjonijiet tal-Template Siti, u tmur biex tikkliċċi fuq is-link **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Dan jxojrkom għall-editor ta placeholder, fejn tista' tgħaddi placeholder u l-kontenut respettiv tiegħu.

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
