# Ensure elevated
If (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  # Relaunch as an elevated process:
  $argv = @($MyInvocation.MyCommand.Definition) + $args
  Start-Process powershell.exe -Arg $argv -Verb RunAs
  exit
}
# Now elevated... so continue

$ip = $args[0]

Write-Output "Adding Montana Traffic Net Web ports..."
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=$ip
Write-Output "done!"

# FIREWALL...

$ruleNameMTN = "Montana Traffic Net Dev"


Write-Output "Allow Montana Traffic Net Web through firewall..."
$result = Get-NetFirewallRule -DisplayName $ruleNameMTN 2> $null;
if (!$result) {
  Write-Output "Adding missing $ruleNameMTN rule"
  New-NetFirewallRule -DisplayName $ruleNameMTN -Profile @('Domain', 'Private') -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3000
}
Write-Output "done!"


Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');