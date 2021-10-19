Kalkulon - počítací bot pro Discord
===================================

V rámci projektu [Meet and Code](https://meet-and-code.org/cz/cs/) jsme připravili výukovou hodinku s tématem "Jak si napsat Discord bota". Motivací projektu je přivést děti zvyklé na komunikaci přes Discord (při hraní Minecraftu a dalších her) k myšlence vytváření vlastních botů, aby zkrátka nabyli (sebe)vědomí, že si mohou integrovat vlastní funkcionalitu a nespoléhat se jen na hotová či placená řešení.

Záznam z přednášky je k dispozici na [Youtube](https://www.youtube.com/watch?v=CDp0MGB9u0U&ab_channel=DavidKubec) a vřele doporučuji si projít celým procesem psaní.

Pokud si ale jen naklonujete tento repozitář, můžete si robota spustit ihned sami. Před spuštěním si [musíte vyrobit Discord aplikaci, bota a získat autentikační token](https://discord.com/developers/). Ten pak vložte do souboru token.json - výsledek by měl vypadat přibližně takto (všimněte si teček v samotném tokenu, pokud token neobsahuje tečky, nejspíš jste zkopírovali špatný token):

```
{
    "token": "OBkzNDd0NuUwMjgxOTE5MTEs.xVcIuA.cBxkojKFoKbACybHAHSS_EODZf8"
}
```

Dále musíte musíte nainstalovat knihovnu `discord.js`:

```
npm install
```

A pak už jen stačí spustit vašeho bota!

```
node main.js
```

# Domácí úkol

Jako každý kód, i Kalkulona můžeme donekonečna rozvíjet. Pro zamyšlení jsem ale nechal v kódu dvě místa pro zamyšlení k zlepšení.

1) Co se stane, když někdo pošle zadání s dvěma či více operátory? (`Kolik je 1-+2?`). Jak ošetřit takový problém?
2) Program momentálně neobsahuje žádný pořádný error handling - kde je vhodné místo pro `try {} catch`?

Ohlasy prosím do issues tohoto repozitáře, díky!