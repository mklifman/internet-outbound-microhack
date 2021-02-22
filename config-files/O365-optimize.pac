// This PAC file will provide proxy config to Microsoft 365 services
//  using data from the public web service for all endpoints
function FindProxyForURL(url, host)
{
    var direct = "DIRECT";
    var proxyServer = "PROXY 10.57.2.4:3126";

    if(shExpMatch(host, "ipinfo.io")
       || shExpMatch(host, "*.wvd.microsoft.com")
       || shExpMatch(host, "gcs.prod.monitoring.core.windows.net")
       || shExpMatch(host, "production.diagnostics.monitoring.core.windows.net")
       || shExpMatch(host, "*xt.blob.core.windows.net")
       || shExpMatch(host, "*eh.servicebus.windows.net")
       || shExpMatch(host, "*xt.table.core.windows.net")
       || shExpMatch(host, "catalogartifact.azureedge.net")
       || shExpMatch(host, "kms.core.windows.net")
       || shExpMatch(host, "mrsglobalsteus2prod.blob.core.windows.net")
       || shExpMatch(host, "wvdportalstorageblob.blob.core.windows.net")
       || shExpMatch(host, "169.254.169.254")
       || shExpMatch(host, "168.63.129.16")
       || shExpMatch(host, "10.57.2.4"))
    {
        return direct;
    }
    
    if(shExpMatch(host, "outlook.office.com")
    ||     shExpMatch(host, "outlook.office365.com")
    ||     shExpMatch(host, "smtp.office365.com")
    ||     shExpMatch(host, "*.outlook.office.com")
    ||     shExpMatch(host, "outlook.office365.com")
    ||     shExpMatch(host, "*.outlook.office.com")
    ||     shExpMatch(host, "outlook.office365.com")
    ||     shExpMatch(host, "*.protection.outlook.com")
    ||     shExpMatch(host, "*.mail.protection.outlook.com")
    ||     shExpMatch(host, "*.lync.com")
    ||     shExpMatch(host, "*.teams.microsoft.com")
    ||     shExpMatch(host, "teams.microsoft.com")
    ||     shExpMatch(host, "*.broadcast.skype.com")
    ||     shExpMatch(host, "broadcast.skype.com")
    ||     shExpMatch(host, "*.skypeforbusiness.com")
    ||     shExpMatch(host, "*.sharepoint.com")
    ||     shExpMatch(host, "*.online.office.com")
    ||     shExpMatch(host, "*broadcast.officeapps.live.com")
    ||     shExpMatch(host, "*excel.officeapps.live.com")
    ||     shExpMatch(host, "*onenote.officeapps.live.com")
    ||     shExpMatch(host, "*powerpoint.officeapps.live.com")
    ||     shExpMatch(host, "*rtc.officeapps.live.com")
    ||     shExpMatch(host, "*shared.officeapps.live.com")
    ||     shExpMatch(host, "*view.officeapps.live.com")
    ||     shExpMatch(host, "*visio.officeapps.live.com")
    ||     shExpMatch(host, "*word-edit.officeapps.live.com")
    ||     shExpMatch(host, "office.live.com")
    ||     shExpMatch(host, "*.msftidentity.com")
    ||     shExpMatch(host, "*.msidentity.com")
    ||     shExpMatch(host, "account.activedirectory.windowsazure.com")
    ||     shExpMatch(host, "accounts.accesscontrol.windows.net")
    ||     shExpMatch(host, "adminwebservice.microsoftonline.com")
    ||     shExpMatch(host, "api.passwordreset.microsoftonline.com")
    ||     shExpMatch(host, "autologon.microsoftazuread-sso.com")
    ||     shExpMatch(host, "becws.microsoftonline.com")
    ||     shExpMatch(host, "clientconfig.microsoftonline-p.net")
    ||     shExpMatch(host, "companymanager.microsoftonline.com")
    ||     shExpMatch(host, "device.login.microsoftonline.com")
    ||     shExpMatch(host, "graph.microsoft.com")
    ||     shExpMatch(host, "graph.windows.net")
    ||     shExpMatch(host, "login.microsoft.com")
    ||     shExpMatch(host, "login.microsoftonline.com")
    ||     shExpMatch(host, "login.microsoftonline-p.com")
    ||     shExpMatch(host, "login.windows.net")
    ||     shExpMatch(host, "logincert.microsoftonline.com")
    ||     shExpMatch(host, "loginex.microsoftonline.com")
    ||     shExpMatch(host, "login-us.microsoftonline.com")
    ||     shExpMatch(host, "nexus.microsoftonline-p.com")
    ||     shExpMatch(host, "passwordreset.microsoftonline.com")
    ||     shExpMatch(host, "provisioningapi.microsoftonline.com")
    ||     shExpMatch(host, "*.manage.office.com")
    ||     shExpMatch(host, "*.protection.office.com")
    ||     shExpMatch(host, "manage.office.com")
    ||     shExpMatch(host, "protection.office.com")
    ||     shExpMatch(host, "*.portal.cloudappsecurity.com")
    ||     shExpMatch(host, "account.office.net")
    ||     shExpMatch(host, "admin.microsoft.com")
    ||     shExpMatch(host, "home.office.com")
    ||     shExpMatch(host, "portal.office.com")
    ||     shExpMatch(host, "www.office.com")
    ||     shExpMatch(host, "nexus.officeapps.live.com")
    ||     shExpMatch(host, "nexusrules.officeapps.live.com")
    ||     shExpMatch(host, "portal.microsoftonline.com"))
    {
        return direct;
    }

    return proxyServer;
}
