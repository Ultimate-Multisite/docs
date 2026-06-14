---
title: Automaatiline otsing ja asendamine veebilehtemudelides
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automaat otsing ja asendamine veebilehtemudel (v2)

_**See tutori nõuab WP UItimo versiooni 2.x.**_

Ultimate Multisite kõige võimsamammaks funktsiooniks on võimalus lisada vaba teksti, värve ja valikud vormi sisse registreerimispilt. Kui me selle andmeid saame, siis saame neid kasutada sisut ette täidetamiseks valitud veebilehtemudel osades. Seejärel, kui uus veebileht julgustatakse, asendab Ultimate Multisite paigutajad (placeholders) tegelikud informatsioonidega, mida registreerimise ajal on sisestatud.

Näiteks saate oma veebilehtemusi paigutajadega teha. Paigutajaid tuleb lisada kaks ühine kurikku - {{paigutaja_nimi}}.

Seejärel saate lihtsalt lisada vastava registreerimisvälja, et seda andmeid saata.

Keskus saab siis kliendi selle välja täita registreerimise ajal.

Ultimate Multisite asendab seejärel paigutajad automaatselt kliendid antud andmetega.

## **"Paigutaja täidetud veebilehtem" probleem lahendamine**

See kõik on suurepärase, kuid me vastame kahjuvaldkonnas: meie veebilehtemud - mida kliendid külastavad - on täisid kaunevälja paigutajad, mis ei räägi palju.

Selle lahendamiseks pakume võimaluse seada paigutajatele valed väärtusi ja kasutame neid väärtusi veebilehtemudel otsimiseks ja asendamiseks kliendid külastamise ajal.

Saate pääseda veebilehtemud paigutajate redigeerimise juurde minema **Ultimate Multisite > Settings > Sites** läbi, scrolli Site Template Options -alikule ja klikkides **Edit Placeholders** linki.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

See viie teid paigutajate sisuredigeerimise juurde, kus saate lisada paigutajaid ja nende vastavat sisu.

[Template sisse seadistus]

Selle andmevaldkonduri abil saadikud oma WordPress-sajaga seotud tegemistega (teemadel, pluginade või muudselliste komponentide) ülesandidaid variantid. See on väga kasulik, kui soovite erinevate sümulatsioonide vahel erineva ulatuses töötavaid voolukohondisi vastata.

[Sisse andmine]

Siin on esitatud seadistus, mida saab kasutada selleks, et defineerida oma template'id ja nende konfiguratsioonid.

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
