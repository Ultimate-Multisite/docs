---
title: मापन-आधारित योजनाहरूको परिवर्तन लग
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans परिवर्तनसूची

संस्करण 1.1.0 - 2026-05-05 मा जारी गरियो
- नयाँ: multisite उपसाइटहरूका लागि AI token billing — कन्फिगर गर्न मिल्ने प्रति-token दरहरूसहित ग्राहकका साइटहरूभरि AI token प्रयोग ट्र्याक र बिल गर्नुहोस्
- नयाँ: Connector enforcement लाई गतिशील सीमा पहिचान र write-through सहित पुनर्निर्माण गरियो, जसले सबै connectors भरि वास्तविक-समय शुद्धता सुनिश्चित गर्छ
- समाधान: Database table upgrades अब BerlinDB schema definitions सँग सही रूपमा मिलाइएका छन्, जसले नयाँ installs मा upgrade failures रोक्छ
- समाधान: Database upgrade callbacks लाई सही ढाँचामा रूपान्तरण गरियो, जसले silent upgrade failures समाधान गर्छ
- समाधान: Fractional values अब AI Usage Overage Markup input field मा स्वीकारिन्छन्
- समाधान: plugin load मा fatal errors र double-initialization issues समाधान गरियो
- सुधारिएको: check-env npm script थपियो ताकि developer environments पहिलो run मा self-configure होऊन्

### 1.0.3 {#103}
* Plugin Update Checker v5 मा अद्यावधिक गरियो
* आधुनिक WordPress plugin headers थपियो
* पछिल्ला WordPress संस्करणहरूसँग compatibility सुधारियो
* usage tracking performance उन्नत बनाइयो

### 1.0.2 {#102}
* Bug fixes र performance improvements
* usage reporting उन्नत बनाइयो

### 1.0.0 {#100}
* प्रारम्भिक release
* Core metered billing functionality
* Usage tracking र overage calculation
* Automatic invoice generation
