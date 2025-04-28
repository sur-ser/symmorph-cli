# Symmorph CLI

SymmetricMorph CLI is a powerful command-line tool for encrypting and decrypting files using the unique **[SymmetricMorph](https://github.com/sur-ser/symmetricmorph)** algorithm.

## ✨ Features

- 🔒 **Symmetric stream encryption** for robust security
- ⚡ **Fast and secure** processing
- 📦 **Cross-platform** support: Windows, Linux, macOS
- 🪶 **Lightweight** with no external dependencies except `symmetricmorph`
- 🖥 **User-friendly** CLI interface

## 📥 Installation

### Global Installation
Install Symmorph CLI globally using npm or Yarn:

```bash
npm install -g symmorph-cli
```
or
```bash
yarn global add symmorph-cli
```
Or use without installing globally:
```bash
npx symmorph-cli <command> [options]
```
## 🚀 Usage

### Encrypt a File
Encrypt a file with a password:

```bash
symmorph encrypt --input ./file.txt --output ./file.enc --password "StrongPassword123"
```
or using shortcuts:
```bash
symmorph encrypt -i ./file.txt -o ./file.enc -p "StrongPassword123"
```

### Decrypt a File
Decrypt a file with the same password:

```bash
symmorph decrypt --input ./file.enc --output ./file.txt --password "StrongPassword123"
```
or using shortcuts:
```bash
symmorph decrypt -i ./file.enc -o ./file.txt -p "StrongPassword123"
```

## 📚 Options

| Option       | Shortcut | Description                          | Required |
|--------------|----------|--------------------------------------|----------|
| `--input`    | `-i`     | Path to input file                   | Yes      |
| `--output`   | `-o`     | Path to output file                  | Yes      |
| `--password` | `-p`     | Password for encryption/decryption   | Yes      |

## 🌎 Supported Platforms

- **Windows**: cmd, PowerShell, Git Bash
- **macOS**: Terminal
- **Linux**: bash, zsh, and more

## 📄 License

MIT License © 2025