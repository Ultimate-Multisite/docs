---
title: Referenco de ŝanĝoj
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referenze de Konfiguracio

Ta paŭrega paŭlaj ki afectas la ĉiutagaj administrajn kaj recentajn ŝanĝojn en Ultimate Multisite.

## Aliaj Opcioj

La areo **Aliaj Opcioj** aparas sub **Ultimate Multisite > Settings > Login & Registration**.

| Konfiguracio | Deskribeco |
|---|---|
| **Enable Jumper** | Montras la rapida navigitaŭlon Jumper en la administrajn areo. Uzu ĝin por salti direkte al skrenoj de Ultimate Multisite, retoj objektoj kaj suportitaj admin destinaĵoj. Dezaktive baldu ĝin, se vi ne volas ĉi tiun kurtocuŝan vidan. |

## Errareportado kaj telemetio

La antaŭa konfiguracio por registri eraraportojn estis forigita de la paĝo de konfiguracio. Anonima telemetio estas dezaktivita, kaj ne existe UI-kurtocuŝo por ĝin aktivi.

Se vi konservas internaj operacia manualoj aŭ skrotadojn por la paĝo de konfiguracio, forigu referencojn al la malnova opcio por registri eraraportojn, por ke administratoroj ne serĉus konfiguracion kiu ne estas pli nun eksista.

## Import/Export konfiguracioj

La tabulo **Import/Export** deskribas, kiom konfiguraciojn ĝi kontrolas kaj linkas direkte al **Ultimate Multisite > Site Export** por arkivaj skrenoj de la sitio kaj la retoj. Uzvu la tabulon de konfiguracio por importado/ekspodo, uzu **Tools > Export & Import** por la floco de exportado/importado de unua sitio, kaj uzu la instrumenton Site Export, kiam vi bezonas plena arkivo de Reto-Exportado.

## Konfiguracioj de konektoroj AI-providantoj

Konfiguracioj de konektoroj AI-providantoj nun eksponas nur la suportitaj OAuth konto-pooloj:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Konnekti unu elun aŭ plurajn kontojn de Anthropic Max per la OAuth-butono. Uzdu la manĝen OAuth alternan, se la sandboxed brauzilo ne povas kompleti la redirekton otomatik. |
| **OpenAI ChatGPT/Codex** | Konnekti kontojn de ChatGPT per la sama flujo de floco OAuth. Operacioj suportitaj de konektoro povas uzi instrumenton ChatGPT Codex post kiam la konto estas konektita. |
| **Google AI Pro** | Konnekti kontojn de Google AI Pro per OAuth, tiam rafraĉi la konektoron, se la listo de kontoj ne aktualiziĝas tuteble. |

Cursor Pro ne estas suportita konektoro pli mal. Uzdu la senutilajn imagojn, runbook-ojn aŭ startaj paŝojn, kiuj menciis la konfigurigon de Cursor Pro aŭ la vojojn de konektoroj.

Kiam vi aĉas aŭ forigas konektorajn kontojn, ingresu validan elektronan adreson por la konto ki ŝanĝiĝas aŭ forigas, kaj konservu la parametroj de la konektoro antaŭ testado de operacioj bazitaj sur konektoro.
