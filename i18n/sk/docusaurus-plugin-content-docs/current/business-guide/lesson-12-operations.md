---
title: 'Lekcia 12: Riadenie podnikania'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lekcia 12: Prevádzkovanie biznisu

Platforma nie je projekt, ktorý dokončíte -- je to biznis, ktorý prevádzkujete. Táto lekcia pokrýva každodennú prevádzku správy FitSite: podporu, fakturáciu, údržbu a udržiavanie spokojnosti zákazníkov.

## Kde sme skončili

FitSite je spustený a zákazníci sa registrujú. Teraz potrebujete prevádzkovať celý proces udržateľne.

## Každodenná prevádzka

### Monitorovanie

Kontrolujte ich denne (alebo nastavte upozornenia):

- **Uptime**: Je platforma dostupná? Použite službu na monitorovanie uptime.
- **Nové registrácie**: Koľko nových zákazníkov sa dnes zaregistrovalo?
- **Neúspešné platby**: Sú tu zlyhania platieb, ktoré si vyžadujú pozornosť?
- **Žiadosti o podporu**: Sú tu nezodpovedané otázky zákazníkov?

### Zákaznícka podpora

Vaše zameranie na výklenok je tu výhodou. Keďže všetci vaši zákazníci sú fitness štúdiá, budete opakovane vidieť tie isté otázky:

**Bežné otázky, ktoré budete dostávať:**

- "Ako aktualizujem rozvrh svojich lekcií?"
- "Môžem zmeniť farby svojej stránky?"
- "Ako pridám na svoju stránku nového trénera?"
- "Moja doména nefunguje"
- "Ako zruším/upgradeujem svoj plán?"

Budujte svoju znalostnú databázu (začatú v Lekcii 8) okolo týchto opakujúcich sa otázok. Každý tiket podpory, ktorý mohol byť článkom v znalostnej databáze, je signálom, že máte taký článok napísať.

### Úrovne podpory

Ako rastiete, štruktúrujte podporu podľa plánu:

| Plán | Úroveň podpory | Čas odpovede |
|------|--------------|---------------|
| Starter | Znalostná databáza + email | 48 hodín |
| Growth | Emailová podpora | 24 hodín |
| Pro | Prioritný email + úvodný hovor | 4 hodiny |

[Support Tickets addon](/addons/support-tickets) môže pomôcť spravovať žiadosti o podporu v rámci platformy.

## Fakturačná prevádzka

### Opakované platby

Ultimate Multisite spracúva opakovanú fakturáciu automaticky cez vašu platobnú bránu. Vašou úlohou je monitorovať:

- **Neúspešné platby**: Rýchlo ich riešte. Väčšina zlyhaní sú expirované karty, nie zámerné zrušenia.
- **Dunning**: Nastavte automatizovanú logiku opakovaných pokusov cez vašu platobnú bránu (Stripe to zvláda dobre)
- **Žiadosti o zrušenie**: Pochopte, prečo zákazníci odchádzajú. Každé zrušenie je spätná väzba.

### Správa členstiev

Prejdite na **Ultimate Multisite > Memberships**, kde môžete:

- Zobraziť všetky aktívne predplatné
- Riešiť žiadosti o upgrade a downgrade
- Spracovať refundácie, keď je to potrebné
- Spravovať vypršania skúšobných období

Úplnú referenciu nájdete v časti [Správa členstiev](/user-guide/administration/managing-memberships).

### Fakturácia

Zabezpečte, aby sa faktúry generovali správne pre každú platbu. Zákazníci môžu potrebovať faktúry na vykazovanie podnikateľských výdavkov. Pozrite si [Správa platieb a faktúr](/user-guide/administration/managing-payments-and-invoices).

## Údržba platformy

### Aktualizácie WordPress a pluginov

Ako správca siete ste zodpovední za:

- **Aktualizácie jadra WordPress**: Otestujte na staging stránke pred nasadením do produkcie
- **Aktualizácie pluginov**: Rovnako -- najprv otestujte, potom aplikujte v celej sieti
- **Aktualizácie theme**: Overte, že templates po aktualizáciách theme stále vyzerajú správne
- **Aktualizácie Ultimate Multisite**: Sledujte changelog a pred aktualizáciou testujte

:::warning Nikdy neaktualizujte v produkcii bez testovania
Pokazená aktualizácia ovplyvní každú zákaznícku stránku vo vašej sieti. Aktualizácie vždy najprv otestujte na staging kópii svojej siete.
:::

### Bezpečnosť

- Udržiavajte všetok softvér aktuálny
- Používajte silné heslá a dvojfaktorové overovanie pre správcovské účty
- Monitorujte podozrivú aktivitu
- Majte plán pre bezpečnostné incidenty

### Výkon

Ako vaša sieť rastie, monitorujte:

- **Časy načítania stránok**: Sú zákaznícke stránky rýchle?
- **Využitie serverových zdrojov**: CPU, pamäť, diskový priestor
- **Výkon databázy**: Veľké siete potrebujú časom optimalizáciu databázy

Zvážte implementáciu cacheovania (page cache, object cache) a CDN, ak ste to ešte neurobili. [Cloudflare integrácia](/user-guide/host-integrations/cloudflare) pokrýva veľkú časť z toho.

## Správa životného cyklu zákazníka

### Znižovanie churnu

Churn je percento zákazníkov, ktorí každý mesiac zrušia službu. Pre biznis založený na predplatnom je znižovanie churnu rovnako dôležité ako získavanie nových zákazníkov.

**Bežné dôvody, prečo zákazníci z fitness štúdií odchádzajú:**

- Nevedeli prísť na to, ako platformu používať → zlepšite onboarding
- Stránka nevyzerala dosť dobre → zlepšite templates
- Nevideli hodnotu → zlepšite funkcie alebo komunikáciu
- Našli lacnejšiu alternatívu → posilnite svoju hodnotu v danom výklenku
- Ich podnikanie skončilo → nevyhnutné, ale sledujte to samostatne

### Podpora upgradov

Zákazníkov na Starter, ktorým sa darí, treba povzbudzovať k upgradeu:

- Keď narazia na limity plánu (stránky, úložisko), zobrazte výzvy na upgrade
- Posielajte cielené emaily zdôrazňujúce funkcie plánu Growth, z ktorých by mali úžitok
- Ukážte, čo vytvorili zákazníci na Growth/Pro

### Kampane na návrat zákazníkov

Keď zákazník zruší službu:

1. Opýtajte sa prečo (výstupný prieskum alebo email)
2. Ak je to možné, vyriešte jeho obavu
3. Ponúknite zľavu na návrat (30-60 dní po zrušení)

## Týždenné a mesačné rutiny

### Týždenne

- Skontrolujte nové registrácie a zrušenia
- Odpovedzte na všetky otvorené tikety podpory
- Skontrolujte výkon platformy a uptime
- Skontrolujte všetky neúspešné platby

### Mesačne

- Analyzujte kľúčové metriky (MRR, churn, noví zákazníci, upgrady)
- Aplikujte aktualizácie WordPress a pluginov (po staging teste)
- Skontrolujte a aktualizujte znalostnú databázu na základe vzorcov podpory
- Pošlite zákazníkom newsletter alebo aktualizáciu (nové funkcie, tipy, novinky z fitness odvetvia)

### Štvrťročne

- Skontrolujte ceny voči konkurentom a spätnej väzbe zákazníkov
- Vyhodnoťte dizajn templates -- potrebujú obnoviť?
- Posúďte kapacitu hostingu -- potrebujete škálovať?
- Skontrolujte a zlepšite onboarding na základe údajov o aktivácii

## Čo sme vytvorili v tejto lekcii

- **Denné monitorovacie rutiny** pre dostupnosť, registrácie, platby a podporu
- **Stupňovitá štruktúra podpory** prispôsobená úrovniam plánov
- **Fakturačné operácie** vrátane upomínania a spracovania zrušení
- **Postupy údržby** pre aktualizácie, bezpečnosť a výkon
- **Stratégie znižovania odchodu zákazníkov** špecifické pre fitness segment
- **Týždenné, mesačné a štvrťročné prevádzkové rutiny**

---

**Ďalej:** [Lekcia 13: Škálovanie](lesson-13-growth) -- rozširovanie FitSite z malej prevádzky na skutočný biznis.
