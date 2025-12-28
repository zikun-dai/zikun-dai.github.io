检查终端输出是否有乱码

```powershell
Get-Content .\data.js | Select-Object -First 5
```

查看终端版本

```powershell
$PSVersionTable.PSVersion
```

先安装powershell7

```powershell
winget search --id Microsoft.PowerShell
winget install --id Microsoft.PowerShell --source winget
```



ctrl shift p搜索`Terminal: Select Default Profile`，看看下拉菜单里有无`powershell 7`



设置中搜索`integrated.profiles.windows`，`在setting.json中编辑`，末段改为以下

```json
"terminal.integrated.profiles.windows": {
    
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell"
        },
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": [],
            "icon": {
                "id": "terminal-cmd"
            }
        },
        "Git Bash": {
            "source": "Git Bash",
            "icon": "terminal-git-bash"
        },
        "PowerShell 7": {
            "path": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
            "args": [
                "-NoLogo"
            ]
        }
    },
    "terminal.integrated.defaultProfile.windows": "PowerShell 7",
        "terminal.integrated.automationProfile.windows": {
            "path": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
            "args": ["-NoLogo"]
    }
```

ctrl shift p搜索`Terminal: Select Default Profile`，下拉菜单选择`powershell 7`，关掉所有终端，打开新终端

```powershell
(Get-Command pwsh).Source
$PSVersionTable.PSVersion

Get-Content .\data.js | Select-Object -First 5
```

应该没有乱码了

之前没有大规模处理过中文文本，今天才发现这个问题