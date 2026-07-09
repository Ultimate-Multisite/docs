---
title: समर्थन टिकटहरूको परिवर्तन सूची
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets परिवर्तन सूची {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* सुधारिएको: Git ट्र्याकिङबाट vendor/ डाइरेक्टरी हटाइयो (.gitignore ले पहिले नै समेटेको), repository आकार घटाउँदै
* सुधारिएको: WordPress 7.0 सम्म परीक्षण गरियो

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* समाधान: nullable ticket model setters मा null मानहरू स्वीकार गर्नुहोस्
* समाधान: उचित multisite समर्थनका लागि सबै tickets global network-wide tables मा भण्डारण गर्नुहोस्
* समाधान: staff fields लुकाउनुहोस् र customer new-ticket form मा blank-page redirect समाधान गर्नुहोस्
* समाधान: metadata storage का लागि undefined add_meta() calls लाई सही update_meta() ले प्रतिस्थापन गर्नुहोस्
* समाधान: unregistered capability check लाई सही wu_view_all_support_tickets ले प्रतिस्थापन गर्नुहोस्
* समाधान: ticket status, assignment, र quick-edit actions का लागि छुटेका AJAX handlers थप्नुहोस्
* समाधान: ticket views मा staff response detection का लागि method name सच्याउनुहोस्
* समाधान: duplicate reply handlers एकीकृत गर्नुहोस् र nonce action names मिलाउनुहोस्
* समाधान: [wu_submit_ticket] shortcode का लागि छुटेको frontend view थप्नुहोस्
* समाधान: छुटेको user_id column थप्नुहोस् र Support_Ticket::get_user_id() method समाधान गर्नुहोस्
* समाधान: priority filter option tag मा अतिरिक्त double-quote हटाउनुहोस्
* समाधान: super admins का लागि network admin ticket management panel थप्नुहोस्
* सुधारिएको: admin CSS लाई एउटै external stylesheet मा एकीकृत गर्नुहोस्
* सुधारिएको: subsite admin menu बाट Settings submenu हटाउनुहोस्
* सुधारिएको: frontend assets केवल support ticket pages मा conditionally load गर्नुहोस्
* सुधारिएको: Bedrock root autoloader ले dependencies पहिले नै load गरेको हुँदा plugin autoloader छोड्नुहोस्

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* थपिएको: admin र frontend का लागि पूर्ण ticket viewing functionality
* थपिएको: ticket reply submissions का लागि AJAX handler
* थपिएको: proper form handling सहित ticket reply functionality को समर्थन
* थपिएको: admin मा ticket submissions र replies का लागि उचित notice display
* थपिएको: customer self-submissions का लागि current user सँग automatic ticket association
* थपिएको: customers ले ticket ownership override गर्नबाट रोक्न security enhancement
* थपिएको: छुटेका helper functions (wu_format_date, wu_user_can_view_ticket, आदि)
* थपिएको: उचित file attachment download र handling
* थपिएको: ticket replies र status changes का लागि email notification system
* समाधान गरिएको: Ticket reply form मा अब आवश्यक ticket ID समावेश छ
* समाधान गरिएको: admin ticket views मा notice visibility issues
* समाधान गरिएको: support ticket functions मा syntax errors
* सुधारिएको: responses र attachments का लागि proper query र schema classes सहित database structure
* सुधारिएको: ticket models का लागि attributes को सट्टा real properties मा migration

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* अद्यावधिक गरिएको: consistency का लागि prefix ultimate-multisite मा नामकरण गरियो
* अद्यावधिक गरिएको: Text domain standardization
* समाधान गरिएको: साना bug fixes र improvements

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* प्रारम्भिक रिलीज
* पूर्ण ticket management system
* बहु-स्तरीय access control
* threaded conversation system
* file attachment support
* email notification system
* admin र customer interfaces
* statistics र reporting
