---
title: Registrovať účet cez Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Úloha: Registrácia účtu pomocou Zapier {#event-register-an-account-via-zapier}

V článku [Integrácia Ultimate Multisite s Zapierom](zapier.md) sme diskutovali o tom, ako použiť Zapier na vykonávanie rôznych akcí v rámci Ultimate Multisite na základe spúšťačov a udalostí (triggers and events). V tomto článku ukážeme, ako môžete integrovať externé aplikácie. Použijeme Google Sheets ako zdroj dát a pošlite informácie do Ultimate Multisite na registrácia účtu.

Pred pripojením Zapieru sa navštívte v **Ultimate Multisite > Settings > API & Webhooks** a potvrďte, že je API zapnuté (enabled). Skopírujte API Key a API Secret z tejto obrazovky, keď si Zapier požiada o údaje účtu Ultimate Multisite.

![Nastavenia API a Webhookov s API Kľúčom, API Tajomstvom a možnosťou zapnutia API](/img/admin/settings-api-webhooks.png)

Prv prvej chvíli musíte vytvoriť **Google Sheet** v rámci svojho Google Drive. Uistite sa, že každý stlnec (column) správne definujete, aby ste mohli neskôr ľahko mapovať údaje.

Po vytvorení Google Sheetu si môžete prihlásiť do svojho účtu Zapier a začať vytvárať zap (zap).

Pod vyhľadávacím polom pre **"App event"** vyberte **"Google Sheets"**.

Potom v poli "**Event** " vyberte **"New spreadsheet row** (Nový riadok v tabuľke) a kliknite na "**Continue**".

Nasledujúci krok vás požiada o výber **Google účtu**, kde je uložený Google Sheet. Uistite sa, že je uvedený správny Google účet.

Pod sekci **"Set up trigger"** musíte vybrať a uviesť konkrétnu Google tabuľku (spreadsheet) a listinu (worksheet), ktorú budete používať ako zdroj dát. Len vyplňte tieto údaje a kliknite na "**Continue**".

Ďalší krok je "**test your trigger**", aby ste si uistili, že váš Google Sheet je správne pripojený.

Ak je váš test úspešný, uvidíte výsledok s niektorými hodnotami z vašich tabuľiek. Kliknite na "**Continue**" pre pokračovanie.

Ďalšou krokom je nastaviť druhú akciu, ktorá vytvorí alebo zaregistruje účet v Ultimate Multisite. V vyhľadávacom poli vyberte "**Ultimate Multisite(2.0.2)** ".

Pod polom "**Event** " vyberte "**Register an Account in Ultimate Multisite** " a potom kliknite na tlačidlo "**Continue** ".

Pod sekciou "**Set up an action** " uvidíte rôzne pole s možnosťami pre údaje zákazníka, členstvá, produkty atď. Môžete mapovať hodnoty z vášho Google Sheets a priradit ich do správneho pola, kde sa majú vyplniť, ako je ukázané na obrázku nižšie.

Po mapovaní hodnôt môžete akciu testovať.
