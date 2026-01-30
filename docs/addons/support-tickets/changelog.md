---
title: "Support Tickets Changelog"
sidebar_position: 99
---

# Support Tickets Changelog

### 1.0.2 - 2025-12-11
* Added: Full ticket viewing functionality for admin and frontend
* Added: AJAX handler for ticket reply submissions
* Added: Support for ticket reply functionality with proper form handling
* Added: Proper notice display for ticket submissions and replies in admin
* Added: Automatic ticket association with current user for customer self-submissions
* Added: Security enhancement to prevent customers from overriding ticket ownership
* Added: Missing helper functions (wu_format_date, wu_user_can_view_ticket, etc.)
* Added: Proper file attachment download and handling
* Added: Email notification system for ticket replies and status changes
* Fixed: Ticket reply form now includes necessary ticket ID
* Fixed: Notice visibility issues in admin ticket views
* Fixed: Syntax errors in support ticket functions
* Improved: Database structure with proper query and schema classes for responses and attachments
* Improved: Migration to real properties instead of attributes for ticket models

### 1.0.1 - 2025-09-28
* Updated: Renamed prefix to ultimate-multisite for consistency
* Updated: Text domain standardization
* Fixed: Minor bug fixes and improvements

### 1.0.0 - 2025-09-01
* Initial release
* Complete ticket management system
* Multi-level access control
* Threaded conversation system
* File attachment support
* Email notification system
* Admin and customer interfaces
* Statistics and reporting
