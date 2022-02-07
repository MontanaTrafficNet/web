# Ensure elevated
If (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  # Relaunch as an elevated process:
  $argv = @($MyInvocation.MyCommand.Definition) + $args
  Start-Process powershell.exe -Arg $argv -Verb RunAs
  exit
}
# Now elevated... so continue

$ip = $args[0]

Write-Output "Removing Montana Traffic Net Web ports..."
netsh interface portproxy delete v4tov4 listenport=3000 listenaddress=0.0.0.0
Write-Output "done!"

# FIREWALL...

$ruleNameMTN = "Montana Traffic Net Dev"


Write-Output "Deny Swivel Web through firewall..."
Remove-NetFirewallRule -DisplayName $ruleNameMTN;
Write-Output "done!"

Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');