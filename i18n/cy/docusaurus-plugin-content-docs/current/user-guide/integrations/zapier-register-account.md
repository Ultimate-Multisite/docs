---
title: Reisglau un cyfrifolion drwy Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Gênyniad: Cyflwyno cyfrifolion drwy Zapier {#event-register-an-account-via-zapier}

Yn ylenniad [Integrating Ultimate Multisite with Zapier](zapier.md), ddebethau ni dysgu sut i'w defnyddio Zapier i gyflawni gweithredoedd gwahanol yn Ultimate Multisite ar adffrywiadau a digwyddiadau (triggers and events). Yn ylenniad hwn, byddwn yn dangos eich sut i chynllunio cyfathrebu â'r cyfathrebuion o'r trefn. Byddwn yn defnyddio Google Sheets fel ffynhonnell data a anfon y gairiadau i Ultimate Multisite i gyfrifolio cyfrifolion.

Cynllunio gyda Zapier, mynd i **Ultimate Multisite > Settings > API & Webhooks** ac gwneud sicr y API yn cael ei chynllunio (enabled). Copi'r API Key a'r API Secret o'r screen hwn pan fydd Zapier yn gofyn am cyfrifolion y account Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Yn gyntaf, mae angen i chi creu **Google Sheet** o dan eich Google Drive. Gofynwch fod y cyflenau (columns) yn cael eu cyfeiriant'r dda felly gallwch chi ddarlunio'r data'n ddefnyddio yn ddiweddarach.

Ar ôl creu'r Google Sheet, gallwch chi log in i eich account Zapier a entynnu'r creu o zap (zap).

O dan y ffordd chwilio ar gyfer **"App event"**, wybynwch **"Google Sheets"**.

Yna ar gyfer'r ffordd "**Event**", wybynwch **"New spreadsheet row"** a gwch "Continue".

Yn ymddangos y cyflwyniad nesaf bydd yn gofyn i chi ddewis ac cyfeiriant y Google Account lle mae'r **Google Sheet** wedi'i cadw. Felly, sicr eich account Google'r oedd yn cael ei gyfeiriant iawn.

O dan **"Set up trigger"**, angen i chi ddewis a cyfeiriant y Google Spreadsheet a worksheet yr bydd yn ei ddefnyddio lle bydd y data yn dod o. Rhowch y cyflenau hyn ac gwch "Continue".

Yna mae'r cynllun nesaf yn **"test eich trigger"** i sicr bod eich Google Sheet wedi'i cysylltu'n dda.

Os oes eich test yn llwyddiannus, byddwch yn gweld y canlyniad gan dangos rhai gwerthau o'ch spreadsheets. Gwch "Continue" i ddeall ymlaen.

Y ddau cyflwyniad yw setefol y gweithredol arall sydd yn creu neu gyfrannu cyfrifolion mewn Ultimate Multisite. Ar y ffordd chwilio, wybynwch "Ultimate Multisite(2.0.2)".

Ond yn y cyflwyniad "**Event**", wybynwch "**Register an Account in Ultimate Multisite**" a ddilynwch y botnel "**Continue**".

Ond yn y cyflwyniad "**Set up an action**", byddwch yn gweld ffieldau amrywiol ar gael i ddata cyddeeion, mynediadau, produsau, etc. Gallwch mapio'r gwerthau o'r google sheet eich a chynllun nhw i'r ffieldau cywir lle fydd eu cyflwyniad fel yn cael ei dangos mewn llwybr is-gysylltiedig isod.

Ar ôl y mapio'r gwerthau, gallwch gwneud gwalia'r weithredol.
