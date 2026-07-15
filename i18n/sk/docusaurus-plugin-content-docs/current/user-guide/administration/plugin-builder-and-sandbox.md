---
title: Konstríktor doplnkov a sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 predstavuje **Plugin Builder & Sandbox System**, ktorý umožňuje AI asistentovi generovať, aktivovať a spravovať WordPress pluginy na vašej sieti – všetko to cez bezpečnú, izolovanú sandboxu.

## Prehľad {#overview}

Plugin Builder umožňuje AI asistentovi pisyvať prispôsobené WordPress pluginy v reakcii na prirodzené jazykové požiadavky. Generované pluginy sú validované, ukladajú sa a aktivujú sa vo vrstve sandboxu, než sa vôbec zohľadnia na funkčnosť živého webu.

Použitia zahŕňajú:

- Generovanie ľahkých utility plugínov bez toho, aby ste museli byť programátorom.
- Prototypovanie funkcií, ktoré vyžadujú WordPress hooks alebo prispôsobené post-typy (custom post types).
- Vytváranie krátkodobých automatizačných skriptov pre šifrované operácie.

## Generovanie pluginu pomocou AI {#generating-a-plugin-via-ai}

Aby ste si generovali plugin, otvorte chat rozhranie Gratis AI Agent a popíšte, čo potrebujete. Napríklad:

> "Vytvorte plugin, ktorý pridá prispôsobenú notifikáciu v admin pane."

AI urobí nasledovné:

1. Vytvorí PHP kód pluginu pomocou štruktúrovaného generovania kódu.
2. Validuje výstup na chyby syntaktiky a nebezpečné vzory.
3. Ukladá generovaný plugin do sandboxového úložiště.
4. Vráti potvrdenie s slugom pluginu a tlačidlom **Aktivovať v Sandbox**.

Môžete výsledok vylepšiť, pokračovaním v diskusii v tom istom konverzacijom pred aktiváciou.

## Aktivácia v sandboxe {#sandbox-activation}

Aktivácia generovaného pluginu v sandboxe je odlišná od jeho aktivácie na živé sieti. Sandbox:

- Spustí plugin v izolovanom WordPress okvietre (wp-env).
- Zaznamená všetky chyby PHP, upozornenia alebo konflikty hookov.
- Posiela výsledok aktivácie späť do chatového rozhrania.

Aby ste aktivovali plugin v sandboxe, kliknite na tlačidlo **Aktivovať v Sandbox** v odpovedi AI chatu, alebo použite príkaz:

/activate-plugin <plugin-slug>
```

Stavový správy potvrdí, či aktivácia úspešne dokončila alebo neúspešne. Pri neúspeche sa v chatovej vlákne zobrazí log chyby.

## Správa generovaných pluginov

Generované pluginy sú zobrazené v **Gratis AI Agent → Plugin Builder → Manage Plugins**. Z tejto obrazovky môžete:

| Akcia | Popis |
|---|---|
| **Zobraziť zdrojový kód** | Prejsť si celý PHP kód pluginu. |
| **Ponová aktivácia v sandbox** | Ponová kontrola aktivácie v sandbox znovu spustíte. |
| **Instalovať na sieti** | Plugin nasadíte na živú sieť (vyžaduje manuálnu potvrdenie). |
| **Aktualizovať** | Novú verziu poskytnete AI, ktorá nahradí existujúci kód. |
| **Odstrániť** | Plugin odstránite z sandboxu. Prvne ho deaktivujete na všetkých sítioch. |

:::warning
**Instalovať na sieti** nasadí generovaný plugin na vašu živú WordPress multisite. Pred pokračovaním prejsť si kód pluginu. Gratis AI Agent požiada o potvrdenie pred dokončením živého nasadenia.
:::

## Instalácia generovaného pluginu na sieti

Keď ste s sandboxovým pluginom spokojní, môžete ho nainštalovať na živú sieť:

1. Prejdite do **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliknite na **Install on Network** vedľa pluginu, ktorý chcete nasadiť.
3. Potvrďte dialog. Plugin sa nainštaluje do `wp-content/plugins/` a je aktivovaný v sieti.

Alternatívne použite příkaz v chatovom rozhraní:

```
/install-plugin <plugin-slug>
```

## Aktualizácia pluginov

Aby ste aktualizovali generovaný plugin, popíšte AI asistentovi zmenu v novom konverzácii:

> "Aktualizuj plugin dashboard-notice tak, aby zobrazoval upozornenie iba administrátorom."

AI vygeneruje novú verziu, ktorá sa zobrazí v sandboxe vedľa aktuálnej verzie. Prejsť si diff (riznicu) a potvrdiť pred aplikovaním aktualizácie.

## Integrácia HookScanner

Plugin Builder používa integrovaný **HookScanner**, ktorý analyzuje hooky a filtry, ktoré registruje každý generovaný plugin. Výstup z HookScannera sa zobrazí v chate ako nasledovný:

- Akčné hooky (volaní `add_action`).
- Filtrované hooky (volaní `add_filter`).
- Akékoľvek hooky nájdené v závislosti pluginov (ignoruje adresáre `vendor/` a `node_modules/`).

To vám pomáha pochopiť správanie pluginu, než ho aktivujete.

## Bezpečnostné ohľady

- Generované pluginy sa ukladajú oddelenie od manuálne nainštalovaných pluginov a nie sú prístupné cez štandardnú obrazovku správu pluginov WordPress, kým ich neinstalujete explicitne v sieti.
- Sandbox používa validáciu ciest na zabránenie prechádzania do adresárov pri písaní súborov pluginov.
- Pluginy s nebezpečnými volaním funkcií (napr. `eval`, `exec`, `system`) sa počas validácie označia a nie budú aktivované.
