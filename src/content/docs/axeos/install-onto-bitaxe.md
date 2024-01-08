---
title: How to install AxeOS on a BitAxe
---
This page will guide you through the process of installing AxeOS onto your Bitaxe.

## 1. Connect your BitAxe to your PC
If you don't have a BitAxe with USB connectivity make sure to establish a serial connection with either a JTAG ESP-Prog device or a USB-to-UART bridge.

Otherwise, just plug your BitAxe into your PC with a USB-cable

## 2. BitAxeTool
OSMU built [BitAxeTool](https://github.com/johnny9/bitaxetool) to make the installation process very easy. You can install it onto your system through pip. If you do not have pip installed, check this [guide](https://pip.pypa.io/en/stable/installation/).

Run in your terminal:
```bash
pip install --upgrade bitaxetool
```

## 3. Pre-Configuration

Starting with v2.0.0, the AxeOS firmware requires some basic manufacturing data to be flashed in the NVS partition.

Create a file called `config.cvs` and copy the content of [this file](https://github.com/skot/ESP-Miner/blob/master/config.cvs.example) into it. You have to modify
- `asicfrequency`
- `asicvoltage`
- `asicmodel`
- `devicemodel`
- and `boardversion`.

The following are recommendations but you must have all values in your `config.cvs` file to flash properly.

```csv title="config.cvs (for Bitaxe 100 'Max')"
key,type,encoding,value
main,namespace,,
asicfrequency,data,u16,475
asicvoltage,data,u16,1400
asicmodel,data,string,BM1397
devicemodel,data,string,max
boardversion,data,string,2.2
```
```csv title="config.cvs (for Bitaxe 200 'Ultra')"
key,type,encoding,value
main,namespace,,
asicfrequency,data,u16,485
asicvoltage,data,u16,1320
asicmodel,data,string,BM1366
devicemodel,data,string,ultra
boardversion,data,string,0.11
```

Save the file, we need it in the next step.

## 4. Flash
Download the latest firmware from the [release page](https://github.com/skot/ESP-Miner/releases) or [compile it yourself](compile). It should look like `esp-miner-factory-vX.X.X.bin`. Now you can finally flash your BitAxe! To do so type into a system terminal:
```bash /{[^{}]*\}/
bitaxetool --config {path-to-config} --firmware {path-to-firmware}
```
before executing the command replace
- `{path-to-config}` with the path to the config file from the [previous step](#3-pre-configuration)
- `{path-to-firmware}` with the path to the firmware you downloaded or compiled

BitAxeTool should now flash your BitAxe successfully.