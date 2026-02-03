---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
There isn’t a “search‑by‑license” button in the Office 365 admin console.  The only way to pull a list of users that have a particular SKU is to query it yourself – either with the Azure AD portal or with PowerShell.

**Azure AD portal** – go to **Azure Active Directory → Licenses → All services**.  From there you can click the license you’re interested in and the portal will show you the users that have that license assigned.  (You can also use the “Filter” box to narrow the list.)

**PowerShell** – run a command such as:

```powershell
# Connect to Azure AD
Connect-AzureAD

# Get all users that have the “ENTERPRISEPACK” license
Get-AzureADUser -All $true | Where-Object {
    $_.AssignedLicenses | Where-Object {$_.SkuId -eq (Get-AzureADSubscribedSku | Where-Object {$_.SkuPartNumber -eq "ENTERPRISEPACK"}).SkuId}
} | Select DisplayName, UserPrincipalName
```

or, using the older MSOnline module:

```powershell
Connect-MsolService
Get-MsolUser -All | Where-Object {
    $_.Licenses.AccountSkuId -like "*ENTERPRISEPACK*"
} | Select DisplayName, UserPrincipalName
```

Either of these methods will give you a list of all users that have the specified license assigned.
