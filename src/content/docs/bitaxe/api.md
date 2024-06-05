---
title: Bitaxe API Endpoints
logo: ./bitaxe-logo.svg
discordChannel: https://discord.com/channels/1091348375301013615/1094385604982210633
githubRepo: https://github.com/skot/bitaxe/tree/axeTester
---

The Bitaxe features the following endpoints:

example api endpoint http://bitaxe-ip/api/system/info

**GET:**

`/api/system/info`
`/api/swarm/info`

**POST:**

`/api/system/restart`

`/api/system/OTA`

`/api/system/OTAWWW`

**PATCH:**

`/api/system/`

---

General Information about the Bitaxe can be gathered using the `/api/system/info` which will display you with some information as follows:

```{
    "power": 58.35174560546875,
    "voltage": 11906.25,
    "current": 16281.25,
    "fanSpeed": 0,
    "temp": 58,
    "boardtemp1": 30,
    "boardtemp2": 48,
    "hashRate": 2372.7583341893742,
    "bestDiff": "4.29G",
    "freeHeap": 178368,
    "coreVoltage": 1200,
    "coreVoltageActual": 1194,
    "frequency": 525,
    "ssid": "Haus1",
    "wifiStatus": "Connected!",
    "sharesAccepted": 19739,
    "sharesRejected": 0,
    "uptimeSeconds": 212115,
    "ASICModel": "BM1366",
    "stratumURL": "10.0.55.221",
    "stratumPort": 2018,
    "stratumUser": "test.hex",
    "version": "v2.0.7-48-ge561f60",
    "boardVersion": "302",
    "runningPartition": "factory",
    "flipscreen": 1,
    "invertscreen": 0,
    "invertfanpolarity": 1,
    "autofanspeed": 0,
    "fanspeed": 35
}
```

---

With POST command is it possible to restart the Bitaxe:

example:
`curl -X POST http://bitaxeip/api/system/restart`

---

The PATCH functionallity allows it to change settings on the Bitaxe.

Some settings still require a restart but changing the fanspeed can be achieve live:

```
curl -X PATCH http://yourbitaxe/api/system \
     -H "Content-Type: application/json" \
     -d '{"fanspeed": "desired_speed_value"}'
```
