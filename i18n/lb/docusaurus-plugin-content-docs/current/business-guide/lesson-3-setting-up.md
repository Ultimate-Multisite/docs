---
title: 'Lektioun 3: Däin Netzwierk ariichten'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lektioun 3: Däin Netzwierk ariichten

Zäit fir ze bauen. An dëser Lektioun installéiers du Ultimate Multisite a konfiguréiers d’Grondlag vum FitSite-Netzwierk. All Entscheedung hei gëtt mat der Fitness-Nisch am Kapp getraff.

## Wou mir opgehalen hunn

Mir hunn Fitnessstudioen als eis Nisch gewielt an d’Méiglechkeet validéiert. Elo verwandele mir déi Iddi an eng funktionéierend Plattform.

## Däin Hosting auswielen

Deng Hosting-Wiel ass fir eng Nisch-Plattform méi wichteg wéi fir eng eenzel Websäit. Du host net eng Säit -- du host en Netzwierk, dat op Dutzenden oder Honnerte vu Säite wuesse wäert.

### Op wat s du oppasse solls

- **WordPress Multisite-Ënnerstëtzung**: Net all Hoster handhaben Multisite gutt
- **Wildcard SSL**: Essenziell fir Netzwierker op Subdomain-Basis
- **Skaléierbar Ressourcen**: Du brauchs Plaz fir ze wuessen, ouni ze migréieren
- **Ultimate Multisite-Integratioun**: Automatiséiert Domain-Mapping an SSL spuert bedeitenden operationellen Opwand

### Recommandéiert Approche

Wiel en Hoster aus der Lëscht vun de [kompatibelen Ubidder](/user-guide/host-integrations/closte). Dës goufe mat Ultimate Multisite getest a bidden d’Integratiounen, déi s du fir Domain-Mapping an SSL-Automatiséierung brauchs.

Fir FitSite benotze mir eng Subdomain-Konfiguratioun. Dat bedeit, datt Client-Säiten ufanks als `studioname.fitsite.com` erschéngen, éier si optional hir eege Domain zouuerdnen.

## WordPress Multisite installéieren

Wann s du nach keng WordPress Multisite-Installatioun hues:

1. Installéier WordPress bei dengem Hosting-Ubidder
2. Folleg dem Guide [Wéi een WordPress Multisite installéiert](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Wiel **Subdomain**-Konfiguratioun, wann s du dozou opgefuerdert gëss

:::tip Firwat Subdomains?
Subdomains ginn all Client-Säit hir eege kloer ënnerscheedbar Adress (`studio.fitsite.com`) amplaz vun engem Pfad (`fitsite.com/studio`). Dat wierkt méi professionell fir deng Clienten a vermeit Permalink-Konflikter. Kuck [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) fir en detailléierte Verglach.
:::

## Ultimate Multisite installéieren

Folleg dem Guide [Ultimate Multisite installéieren](/user-guide/getting-started/installing-ultimate-multisite), fir:

1. De Plugin netzwierkwäit eropzelueden an z’aktivéieren
2. Den [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) auszeféieren

Wärend dem Setup Wizard solls du d’FitSite-Nisch am Kapp behalen:

- **Wärung**: Setz se op d’Wärung, déi deng Fitnessstudio-Clientë benotzen
- **Firmennumm**: "FitSite" (oder däi gewielte Markennumm)
- **Firmenlogo**: Lued däi Markelogo erop -- dëst erschéngt op Rechnungen an E-Mailen

## Fir d’Fitness-Nisch konfiguréieren

Nodeems Ultimate Multisite installéiert ass, maach dës nisch-spezifesch Konfiguratiounswielen:

### Allgemeng Astellungen

Navigéier op **Ultimate Multisite > Settings** a konfiguréier:

- **Säitenumm**: FitSite
- **Standardroll**: Administrator -- Fitnessstudio-Besëtzer brauche voll Kontroll iwwer den Inhalt vun hirer Säit
- **Registréierung**: Aktivéier d’Benotzerregistréierung, sou datt Studio-Besëtzer sech selwer umelle kënnen

### E-Mail-Konfiguratioun

Deng System-E-Maile sollten d’Sprooch vun denger Nisch schwätzen. Navigéier op **Ultimate Multisite > Settings > Emails** a personaliséier:

- Ersetz generesch Formuléierunge wéi "deng nei Säit" duerch fitness-spezifesch Messagen
- Beispill fir e Begréissungs-Sujet: "Deng Fitnessstudio-Websäit ass prett"
- Beispill fir e Begréissungs-Text: Bezéi dech op hire Studio, hir Coursen an de Start mat hirer Fitness-Säit

Mir verfeineren dëst weider an der Lektioun 8 (Client-Onboarding), mee den Toun elo schonn ze setzen suergt dofir, datt och fréi Test-Umeldunge sech nisch-spezifesch ufillen.

### Domain-Konfiguratioun

Wann s du e kompatibelen Hosting-Ubidder benotz, konfiguréier Domain-Mapping elo:

1. Navigéier op **Ultimate Multisite > Settings > Domain Mapping**
2. Folleg dem Integratiounsguide fir däi spezifeschen Hoster
3. Test, datt nei Ënnersäiten automatesch SSL kréien

Dat suergt dofir, datt, wa mir an der nächster Lektioun ufänke Schablounen an Test-Säiten ze erstellen, alles vun Ufank bis Enn funktionéiert.

## D’FitSite-Netzwierk bis elo

Um Enn vun dëser Lektioun hues du Folgendes:

```
FitSite-Netzwierk
├── WordPress Multisite (Subdomain-Modus)
├── Ultimate Multisite (installéiert a konfiguréiert)
├── Hosting mat Wildcard SSL
├── Domain-Mapping konfiguréiert
├── Nisch-spezifesch E-Mail-Schablounen (initial)
└── Prett fir Säite-Schablounen (nächst Lektioun)
```

## Wat mir an dëser Lektioun gebaut hunn

- **Eng funktionéierend WordPress Multisite**-Installatioun am Subdomain-Modus
- **Ultimate Multisite installéiert** a mat FitSite-Branding konfiguréiert
- **Hosting an SSL** fir e wuessend Netzwierk ageriicht
- **Domain-Mapping** fir däin Hosting-Ubidder konfiguréiert
- **Nisch-spezifeschen E-Mail-Toun** vum éischten Dag u festgeluecht

---

**Nächst:** [Lektioun 4: Nisch-Schabloune bauen](lesson-4-templates) -- mir erstellen Säite-Schablounen, déi Fitnessstudio-Besëtzer tatsächlech benotze wëllen.
