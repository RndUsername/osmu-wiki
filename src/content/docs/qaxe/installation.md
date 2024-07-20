---
title: QAxe Installtion
logo: ./QaxeLogo.svg
githubRepo: https://github.com/shufps/qaxe
---

# Installation

The QAxe does use a STM32 and requires an external computer to run the [PyMiner Software](https://github.com/shufps/piaxe-miner).

# Compilation

```
# install curl
sudo apt install curl

# install rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# add to ~/.bash.rc (afterwards, opening a new terminal is needed)
echo 'source "$HOME/.cargo/env"' >> ~/.bashrc

# clone repository
git clone https://github.com/shufps/qaxe

# clone submodules
cd qaxe
git submodule init
git submodule update

# add rust target for STM32L0 variants
#rustup target add thumbv6m-none-eabi

# or add rust target for STM32L1 variants
rustup target add thumbv7m-none-eabi

# build firmware for L072
cd firmware/fw-L072CB
./build.sh
```

# Installation via USB Bootloader on board with BOOT button

The STM32L072CB variant has an integrated DFU Bootloader that starts when pressing the BOOT button during reset.

Afterwards the firmware can be flashed via dfu-utils:

```
# install cargo-binutils and llvm tools
cargo install cargo-binutils
rustup component add llvm-tools-preview

# create the firmware.bin
DEFMT_LOG=info cargo objcopy --release --bin qaxe -- -O binary qaxe.bin

# install dfu-utils
sudo apt-get install dfu-util

now start the stm32 in DFU mode by pressing `boot` (only works with the STM32L072CB variant)

# after booting, list the devices
dfu-util --list

# flash the binary
dfu-util -a 0 -s 0x08000000:leave -D qaxe.bin
```

# Flashing

After the source was compiled it is flashed by:

```
# build firmware for L072
cd firmware/fw-L072CB
# run firmware (this also flashes it to the stm32)
./run.sh
```

## Deprecated

### Installation via CMSIS-DAP Programmer

note: Using CMSIS-DAP and PicoProbe has been turned out to be quite a hassle for people who just want to flash the STM32 once, it's suggested to use the USB bootloader with the STM32 L072CB variant.

As programming/debug adapter the Picoprobe firmware running on a Raspi Pico works best:
https://github.com/rp-rs/rp2040-project-template/blob/main/debug_probes.md / https://github.com/raspberrypi/picoprobe/releases/tag/picoprobe-cmsis-v1.0.3

There also is a little board with only 3 parts that gives a nice low-cost solution to flash the Qaxe:
https://github.com/shufps/raspi-pico-dap

On rev3 there should be the option to boot the stm32 (by pressing the boot-button on reset) into DFU-Bootloader mode what makes flashing via USB and without CMSIS-DAP programmer possible.

:::caution[This page is not finally written yet.]
Help us to complete the wiki by using the "Edit page" button at the end of the page 👇
:::
