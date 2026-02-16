---
title: Správa webů
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Správa webů

Weby (nebo podweby) jsou základem vašeho WaaS podnikání. Ultimate Multisite rozlišuje 3 typy webů:

- **Zákaznické weby** — Weby patřící konkrétním zákazníkům
- **Šablony webů** — Předpřipravené weby, které si zákazníci mohou vybrat jako výchozí bod
- **Hlavní web** — Váš primární web v síti

## Zobrazení webů

Přejděte do **Ultimate Multisite → Sites** pro zobrazení všech podwebů ve vaší síti. Každý web je označen podle typu a můžete filtrovat podle kategorií Všechny weby, Zákaznické, Šablony nebo Čekající.

![Stránka se seznamem webů](/img/admin/sites-list.png)

## Přidání nového webu

Klikněte na tlačítko **Add Site** pro vytvoření nového webu. Budete muset zadat:

- **Site Title** — Název nového webu
- **Site URL** — Doména nebo cesta k webu
- **Site Type** — Zda se jedná o zákaznický web, šablonu nebo běžný web

Volba **Copy Site** vám umožní vytvořit nový web na základě existující šablony. Po jejím zapnutí si můžete vybrat, kterou šablonu použít jako výchozí bod. Ujistěte se, že máte zapnutou možnost **Copy Media on Duplication**, aby se zkopírovaly i mediální soubory.

## Správa existujícího webu

Klikněte na **Manage** u libovolného webu pro otevření stránky **Edit Site**. Zde najdete:

### Základní informace

Název webu, typ, ID webu a popis. Uvidíte také namapovanou doménu, přiřazené členství a zákaznický účet, kterému web patří.

### Nastavení webu

Nastavte možnosti a limity webu:

- **Limity návštěv** — Maximální počet návštěv webu
- **Limity uživatelských účtů** — Limity podle uživatelských rolí
- **Diskový prostor** — Kvóta úložiště pro web
- **Vlastní doména** — Povolení mapování domény pro tento web
- **Viditelnost pluginů a šablon** — Nastavte, které pluginy a šablony vzhledu jsou viditelné, skryté nebo předaktivované

Ve výchozím nastavení weby přebírají limity nastavené na úrovni členství. Nastavení limitů na úrovni webu přepíše nastavení členství.

### Přiřazení

Pod nastavením webu najdete informace o:

- **Namapovaných doménách** přiřazených k webu
- **Členství**, pod které web spadá
- **Zákaznickém účtu** propojeném s webem

### Pravý postranní panel

Na pravé straně můžete:

- **Zapnout/vypnout web** pomocí přepínače
- **Změnit typ webu** nebo přeřadit vlastnictví
- **Nastavit obrázek/náhled webu** (zobrazuje se na frontendu u šablon webů)
- **Smazat web** trvale

:::warning
Smazání webu je nevratné. Web a veškerý jeho obsah bude trvale odstraněn.
:::
