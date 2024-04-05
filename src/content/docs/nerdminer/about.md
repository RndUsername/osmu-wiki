---
title: About Nerdminer
githubRepo: https://github.com/BitMaker-hub/NerdMiner_v2
discordChannel: https://discord.com/channels/1091348375301013615/1146926762484322466
---
This is a **free and open source project** that lets you try to reach a bitcoin block with a small piece of hardware.
The main goal of this project is to let you **learn more about minery** and to have a beautiful piece of hardware on your desktop.

It originates from the [HAN Miner](https://github.com/valerio-vaccaro/HAN).

Nerdminer is an implementation of the Stratum protocol for the ESP32 microcontroller to mine on a solo pool. It works by default with [Public Pool](/public-pool/about) (where Nerdminers are supported) but this can be changed.

The project was initialy developed using ESP32-S3, but it currently supports other boards aswell. It uses WifiManager to modify miner settings and save them to SPIFF.
The microMiner comes with several screens to monitor it's working procedure and also to show you network mining stats.
Currently includes:

- NerdMiner Screen > Mining data of Nerdminer
- ClockMiner Screen > Fashion style clock miner
- GlobalStats Screen > Global minery stats and relevant data

This miner is multicore and multithreads, both cores are used to mine and several threads are used to implementing stratum work and wifi stuff.
Every time an stratum job notification is received miner update its current work to not create stale shares.
