---
title: 'Lekcija 3: Nastavitev vašega omrežja'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lekcija 3: Nastavitev vašega omrežja

Čas je za gradnjo. V tej lekciji boste namestili Ultimate Multisite in konfigurirali temelje omrežja FitSite. Vsaka odločitev tukaj je sprejeta z mislijo na fitnes nišo.

## Kje smo ostali {#where-we-left-off}

Izbrali smo fitnes studie kot svojo nišo in potrdili priložnost. Zdaj bomo to idejo spremenili v delujočo platformo.

## Izbira gostovanja {#choosing-your-hosting}

Vaša izbira gostovanja je za nišno platformo pomembnejša kot za eno samo spletno mesto. Ne gostite enega mesta -- gostite omrežje, ki bo zraslo na desetine ali stotine mest.

### Na kaj morate biti pozorni {#what-to-look-for}

- **Podpora za WordPress Multisite**: Vsi ponudniki gostovanja ne obvladujejo multisite dobro
- **Wildcard SSL**: Bistven za omrežja, ki temeljijo na poddomenah
- **Prilagodljivi viri**: Potrebujete prostor za rast brez selitve
- **Integracija Ultimate Multisite**: Avtomatizirano preslikavanje domen in SSL prihranita veliko operativnega dela

### Priporočen pristop {#recommended-approach}

Izberite ponudnika gostovanja s seznama [združljivih ponudnikov](/user-guide/host-integrations/closte). Ti so bili preizkušeni z Ultimate Multisite in zagotavljajo integracije, ki jih potrebujete za preslikavanje domen in avtomatizacijo SSL.

Za FitSite bomo uporabili konfiguracijo s poddomenami. To pomeni, da bodo spletna mesta strank sprva prikazana kot `studioname.fitsite.com`, preden po želji preslikajo svojo domeno.

## Namestitev WordPress Multisite {#installing-wordpress-multisite}

Če še nimate namestitve WordPress Multisite:

1. Namestite WordPress pri svojem ponudniku gostovanja
2. Sledite vodniku [Kako namestiti WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Ko ste pozvani, izberite konfiguracijo **poddomena**

:::tip Zakaj poddomene?
Poddomene vsakemu spletnemu mestu stranke dajo svoj ločen naslov (`studio.fitsite.com`) namesto poti (`fitsite.com/studio`). To je za vaše stranke bolj profesionalno in preprečuje konflikte s trajnimi povezavami. Za podrobno primerjavo si oglejte [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Namestitev Ultimate Multisite {#installing-ultimate-multisite}

Sledite vodniku [Namestitev Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite), da:

1. Naložite in aktivirate plugin po celotnem omrežju
2. Zaženete [čarovnika za nastavitev](/user-guide/getting-started/multisite-setup-wizard)

Med čarovnikom za nastavitev imejte v mislih nišo FitSite:

- **Valuta**: Nastavite valuto, ki jo uporabljajo vaše stranke fitnes studiev
- **Ime podjetja**: "FitSite" (ali izbrano ime vaše blagovne znamke)
- **Logotip podjetja**: Naložite logotip svoje blagovne znamke -- prikazan bo na računih in v e-poštnih sporočilih

## Konfiguracija za fitnes nišo {#configuring-for-the-fitness-niche}

Ko je Ultimate Multisite nameščen, izberite te niši prilagojene konfiguracijske možnosti:

### Splošne nastavitve {#general-settings}

Pojdite na **Ultimate Multisite > Nastavitve** in konfigurirajte:

- **Ime mesta**: FitSite
- **Privzeta vloga**: Administrator -- lastniki fitnes studiev potrebujejo popoln nadzor nad vsebino svojega spletnega mesta
- **Registracija**: Omogočite registracijo uporabnikov, da se lahko lastniki studiev prijavijo sami

### Konfiguracija e-pošte {#email-configuration}

Sistemska e-poštna sporočila naj govorijo jezik vaše niše. Pojdite na **Ultimate Multisite > Nastavitve > E-poštna sporočila** in prilagodite:

- Zamenjajte generično besedilo "vaše novo spletno mesto" s sporočili, prilagojenimi fitnesu
- Primer zadeve dobrodošlice: "Spletno mesto vašega fitnes studia je pripravljeno"
- Primer besedila dobrodošlice: Sklicujte se na njihov studio, vadbe in začetek dela z njihovim fitnes spletnim mestom

To bomo še izboljšali v lekciji 8 (Uvajanje strank), vendar nastavitev tona že zdaj zagotavlja, da se tudi zgodnje testne prijave zdijo prilagojene niši.

### Konfiguracija domen {#domain-configuration}

Če uporabljate združljivega ponudnika gostovanja, zdaj konfigurirajte preslikavanje domen:

1. Pojdite na **Ultimate Multisite > Nastavitve > Preslikavanje domen**
2. Sledite integracijskemu vodniku za svojega konkretnega ponudnika gostovanja
3. Preizkusite, da nova podmesta samodejno dobijo SSL

To zagotavlja, da bo vse delovalo od začetka do konca, ko bomo v naslednji lekciji začeli ustvarjati predloge in testna spletna mesta.

## Omrežje FitSite do zdaj {#the-fitsite-network-so-far}

Ob koncu te lekcije imate naslednje:

```
Omrežje FitSite
├── WordPress Multisite (način poddomen)
├── Ultimate Multisite (nameščen in konfiguriran)
├── Gostovanje z wildcard SSL
├── Konfigurirano preslikavanje domen
├── E-poštne predloge, prilagojene niši (začetne)
└── Pripravljeno za predloge spletnih mest (naslednja lekcija)
```

## Kaj smo zgradili v tej lekciji {#what-we-built-this-lesson}

- **Delujočo namestitev WordPress Multisite** v načinu poddomen
- **Nameščen Ultimate Multisite** in konfiguriran z blagovno znamko FitSite
- **Gostovanje in SSL** nastavljena za rastoče omrežje
- **Preslikavanje domen** konfigurirano za vašega ponudnika gostovanja
- **Niši prilagojen ton e-pošte** vzpostavljen od prvega dne

---

**Naslednje:** [Lekcija 4: Gradnja nišnih predlog](lesson-4-templates) -- ustvarili bomo predloge spletnih mest, ki jih bodo lastniki fitnes studiev dejansko želeli uporabljati.
