# 🐧 Linux Learning

> From command line basics to system administration and server deployment.

---

## 📁 Folder Structure

```
Linux/
├── Linux Windows Installation.pdf        # Setup guides (WSL, VM, Dual Boot, Cloud)
├── Linux_Notes for Beginner.docx         # Comprehensive beginner notes
├── ~$nux_Notes.docx                      # Temporary file (auto-generated, ignore)
└── README.md                             # This file
```

---

## 🗺️ Learning Roadmap

### Phase 1: Environment Setup (Week 1)
```
Linux Windows Installation.pdf
├── WSL 2 (Windows Subsystem for Linux) — Recommended
│   ├── wsl --install --distribution Ubuntu
│   ├── wsl --set-default-version 2
│   ├── VS Code Remote-WSL Extension
│   ├── Docker Desktop with WSL 2 Backend
│   ├── Windows Terminal (Tabs, Panes, Profiles)
│   └── File Access: \\wsl$\Ubuntu\home\user
├── Virtual Machine (VirtualBox / VMware)
│   ├── Ubuntu Server LTS / Debian / Fedora
│   ├── Snapshots for experimentation
│   ├── Bridged vs NAT Networking
│   └── Guest Additions / VMware Tools
├── Dual Boot (Advanced)
│   ├── Partitioning: EFI (512MB), Swap (RAM size), Root (/), Home (/home)
│   ├── Secure Boot & NVIDIA Drivers
│   ├── GRUB Configuration
│   └── Timeshift for system snapshots
└── Cloud Free Tier (Production-like)
    ├── AWS EC2 (Ubuntu/Amazon Linux 2023)
    ├── Oracle Cloud (Always Free: 4 ARM CPUs, 24GB RAM!)
    ├── Google Cloud (e2-micro free tier)
    └── Azure (B1S free tier)
```

### Phase 2: Command Line Mastery (Week 2-3)
```
Linux_Notes for Beginner.docx
├── Terminal & Shell
│   ├── bash (default), zsh (oh-my-zsh), fish
│   ├── Prompt: Starship / Powerlevel10k
│   ├── Shortcuts: Ctrl+R (history), Ctrl+A/E, Alt+., !$
├── Navigation & Files
│   ├── ls (lsd, exa), cd, pwd, pushd/popd
│   ├── mkdir -p, touch, cp -r, mv, rm -rf
│   ├── find (fd), locate, which, whereis, type
│   ├── ln -s (symlinks), readlink -f
├── Viewing & Editing
│   ├── cat, bat, less, head, tail -f
│   ├── nano (beginner), vim / nvim (pro), micro
│   ├── vimtutor (30 min investment, lifetime returns)
├── Permissions & Ownership
│   ├── chmod (755, u+x, g-w, o-rwx)
│   ├── chown user:group, chgrp
│   ├── umask (default perms), ACLs (setfacl/getfacl)
│   ├── Special: setuid (4), setgid (2), sticky (1)
├── Users & Groups
│   ├── useradd, usermod, userdel, passwd, chage
│   ├── groupadd, groupmod, groupdel
│   ├── /etc/passwd, /etc/shadow, /etc/group, /etc/gshadow
│   ├── sudo, visudo, /etc/sudoers.d/
│   └── su -, sudo -i, runuser
└── Processes & Jobs
    ├── ps aux, pstree, htop / btop
    ├── kill, killall, pkill, xkill
    ├── jobs, fg, bg, nohup, disown
    ├── systemctl (services), journalctl (logs)
    └── nice, renice, ionice, cpulimit
```

### Phase 3: Text Processing & Scripting (Week 3-4)
```
Core Filters (Pipeline Building Blocks)
├── grep / rg — Search (rg = ripgrep, 10x faster)
├── sed — Stream edit (s/find/replace/g)
├── awk — Field processing, math, reports
├── cut, sort, uniq, tr, wc, nl
├── xargs — Parallel execution (xargs -P4 -I{})
├── jq — JSON processing (ESSENTIAL for APIs)
├── yq — YAML processing
├── csvkit — CSV processing (csvcut, csvgrep, csvstat)
└── miller (mlr) — CSV/JSON/TSV Swiss Army knife

Shell Scripting (bash)
├── Shebang: #!/usr/bin/env bash
├── set -euo pipefail (strict mode)
├── Variables: local, readonly, arrays, associative arrays
├── Conditionals: [[ ]], (( )), case
├── Loops: for, while, until, select
├── Functions: params, return, stdout capture
├── Redirection: >, >>, <, <<HEREDOC, 2>&1, &>
├── Process Substitution: <(cmd), >(cmd)
├── Traps: trap 'cleanup' EXIT INT TERM
├── getopts / getopt — Argument parsing
├── Source vs Execute: source script.sh vs ./script.sh
└── Debugging: bash -x, set -x, shellcheck (linter)
```

### Phase 4: System Administration (Week 5-6)
```
Package Management
├── apt (Debian/Ubuntu): update, upgrade, install, remove, autoremove, search
├── dnf/yum (RHEL/Fedora): install, remove, update, search
├── pacman (Arch): -S, -R, -Syu, -Ss
├── snap, flatpak, appimage (Universal)
└── Homebrew (Linuxbrew) — User-space packages

Storage & Filesystems
├── lsblk, df -h, du -sh, ncdu (interactive)
├── mount, umount, /etc/fstab, UUID, LABEL
├── LVM: pvcreate, vgcreate, lvcreate, lvextend
├── RAID: mdadm (Software RAID 0/1/5/10)
├── Filesystems: ext4, xfs, btrfs, zfs
├── Encryption: LUKS (cryptsetup), fscrypt
└── Backup: rsync, restic, borg, timeshift

Networking
├── ip a, ip route, ip link (Modern: replaces ifconfig/route)
├── ss -tulpn (Modern: replaces netstat)
├── nmcli / nmtui (NetworkManager)
├── firewall: ufw (simple), firewalld, nftables/iptables
├── DNS: resolvectl, /etc/resolv.conf, systemd-resolved
├── SSH: ssh, scp, rsync, ssh-copy-id, ssh-agent, ~/.ssh/config
├── Tunnels: ssh -L/-R/-D, autossh
├── VPN: WireGuard (wg-quick), OpenVPN, Tailscale
└── Monitoring: nethogs, iftop, bmon, vnstat

Services & Init (systemd)
├── systemctl: start, stop, restart, enable, disable, status
├── journalctl: -u service, -f, --since, -p err
├── Unit Files: /etc/systemd/system/, [Unit], [Service], [Install]
├── Types: simple, forking, oneshot, notify, dbus
├── Timers: systemd timers (replace cron)
├── Drop-ins: systemctl edit service
└── Analysis: systemd-analyze blame, critical-chain

Logs & Monitoring
├── /var/log/ — syslog, auth.log, kern.log, dmesg
├── journalctl (systemd logs)
├── logrotate — /etc/logrotate.d/
├── Prometheus + Grafana (Modern stack)
├── Netdata (Real-time, zero-config)
├── Glances / btop (Interactive)
└── Audit: auditd, lynis (Security auditing)
```

### Phase 5: Automation & DevOps (Week 7+)
```
Configuration Management
├── Ansible (Agentless, YAML, Idempotent)
│   ├── Inventory, Playbooks, Roles, Collections
│   ├── Modules: apt, copy, template, systemd, user
│   └── Vault (Secrets), Ansible Galaxy
├── SaltStack / Chef / Puppet (Legacy, still used)

Containerization
├── Docker: Dockerfile, docker-compose, BuildKit
├── Podman (Rootless, Daemonless, Kubernetes-native)
├── Containerd / CRI-O (Kubernetes runtimes)
├── Images: Multi-stage, Distroless, Cosign (Signing)
└── Registries: Docker Hub, GHCR, Harbor, Quay

Orchestration
├── Kubernetes (k8s): kubectl, Helm, Kustomize
├── Kind / k3d / minikube (Local dev)
├── k3s / k0s / Talos (Lightweight/Edge)
├── Operators, CRDs, GitOps (ArgoCD, Flux)

CI/CD
├── GitHub Actions / GitLab CI / Jenkins / Drone
├── Pipelines: Lint → Test → Build → Scan → Deploy
├── Security: Trivy, Syft, Grype, Cosign, SLSA

Infrastructure as Code
├── Terraform / OpenTofu (State, Modules, Providers)
├── Pulumi (TypeScript/Python/Go)
├── Crossplane (K8s-native)
└── Packer (AMI/Image building)
```

---

## 🛠️ Essential Tooling (Modern Replacements)

| Classic | Modern | Install |
|---------|--------|---------|
| `ls` | `lsd` / `exa` | `cargo install lsd` |
| `cat` | `bat` | `cargo install bat` |
| `find` | `fd` | `cargo install fd-find` |
| `grep` | `rg` (ripgrep) | `cargo install ripgrep` |
| `top/htop` | `btop` / `btm` | `cargo install btop` |
| `du` | `ncdu` / `dust` | `cargo install du-dust` |
| `ps` | `procs` | `cargo install procs` |
| `vim` | `nvim` (Neovim) | `brew install neovim` |
| `bash` | `zsh` + `starship` | `sh -c "$(curl -fsSL starship.rs/install.sh)"` |
| `tmux` | `zellij` | `cargo install zellij` |
| `man` | `tldr` / `cheat` | `cargo install tealdeer` |

---

## 📋 Practice Projects

### Beginner
1. **Setup Script** — Automate dev environment (packages, dotfiles, SSH keys)
2. **Log Analyzer** — Parse nginx/Apache logs: top IPs, 404s, bandwidth
3. **Backup Script** — rsync to remote, rotation, encryption, notification
4. **System Info Dashboard** — bash script showing CPU, RAM, Disk, Network

### Intermediate
5. **Dotfiles Manager** — Stow/GNU Stow or custom, synced across machines
6. **Service Monitor** — systemd watchdog + Telegram/Slack alerts
7. **Log Rotation & Archival** — logrotate config + S3/GCS upload
8. **User Onboarding** — Create user, SSH key, sudo, home dir skeleton

### Advanced
9. **Ansible Playbook** — Deploy full LEMP stack (Nginx, PHP-FPM, MySQL)
10. **Kubernetes Homelab** — k3s cluster, ArgoCD, monitoring stack
11. **Infrastructure Repo** — Terraform + Ansible for cloud VM provisioning
12. **Security Hardening** — CIS Benchmarks, fail2ban, auditd, AIDE

---

## 📚 Resources

### Books
- **The Linux Command Line** (William Shotts) — Free online
- **Linux Bible** (Christopher Negus) — Comprehensive reference
- **How Linux Works** (Brian Ward) — Internals for admins
- **Unix and Linux System Administration Handbook** (Nemeth et al.) — The "bible"
- **Site Reliability Engineering** (Google) — Free online, DevOps philosophy

### Certifications (If Desired)
- **LPIC-1 / Linux Essentials** — Entry level
- **RHCSA / RHCE** — Red Hat, hands-on, respected
- **LFCA / LFCS / LFCE** — Linux Foundation, performance-based
- **CKA / CKAD / CKS** — Kubernetes (Linux foundation)

### Practice Platforms
- **OverTheWire: Bandit** — Linux wargames (SSH, progressively harder)
- **HackerRank Linux Shell** — Challenges
- **Linux Journey** — Interactive lessons
- **Cmdchallenge** — One-liner puzzles
- **Sadservers** — "Fix the broken server" scenarios

### YouTube Channels
- **NetworkChuck** — Enthusiastic, beginner-friendly
- **TechWorld with Nana** — DevOps, Kubernetes, Linux
- **Learn Linux TV** — Deep dives, homelab
- **Jeff Geerling** — Ansible, Raspberry Pi, Homelab
- **Bret Fisher** — Docker, DevOps

---

## ✅ Progress Tracker

| Module | Status | Notes |
|--------|--------|-------|
| Installation (WSL/VM/Cloud) | 🟡 | Choose one, master it |
| Terminal & Shell Basics | ✅ | |
| File System Navigation | ✅ | |
| Permissions & Users | 🟡 | ACLs, sudoers |
| Text Processing (grep/sed/awk) | 🟡 | jq for JSON |
| Shell Scripting | 🔴 | Start with simple automation |
| Package Management | ✅ | apt/dnf |
| Processes & Services | 🟡 | systemd units |
| Networking & SSH | 🟡 | Tunnels, config |
| Storage & Backup | 🔴 | LVM, rsync, restic |
| Logs & Monitoring | 🔴 | journalctl, Prometheus |
| Ansible / Config Mgmt | 🔴 | |
| Docker / Podman | 🔴 | |
| Kubernetes Basics | 🔴 | |

---

## 💡 Pro Tips

1. **Use `man` pages** — `man man`, `man 5 passwd`, `man 7 regex`
2. **`set -euo pipefail`** — In every script; catches silent failures
3. **`shellcheck`** — Lint every script; `shellcheck myscript.sh`
4. **Dotfiles repo** — Version control your config; symlink with `stow`
5. **SSH Config** — `~/.ssh/config` with Host aliases, keys, jump hosts
6. **Terminal Multiplexer** — `tmux` or `zellij`; survive disconnects
7. **Learn one editor well** — `vim`/`nvim` or `micro`/`nano`; don't switch
8. **Document commands** — `command # Why: explanation` in history/scripts
9. **Automate fear, not convenience** — Script the scary/manual steps first
10. **Read source** — `/usr/bin/`, `/etc/`, `/proc/`, `/sys/` — Linux is transparent

---

## 🔗 Cross-References

- **[Python Learning](../Python%20(learning%20&%20project)/README.md)** — Deploy Python apps (systemd, Docker)
- **[FullStack Learning](../FullStack%20learning/README.md)** — Deploy Flask/Django (Nginx, Gunicorn, systemd)
- **[DA-DS-ML-DL](../DA-DS-ML-DL/README.md)** — Jupyter on remote Linux server
- **[Gen AI](../Gen%20AI-Prompt%20Engineering-Agentic%20AI-AI%20Aotumation/README.md)** — Local LLMs (Ollama, vLLM on Linux)
- **[SQL Learning](../SQL%20Learning%20&%20Project/README.md)** — PostgreSQL/MySQL admin on Linux

---

*Part of [MY-LEARNINGS](../README.md) | Last updated: July 2025*