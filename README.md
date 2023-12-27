<h1>PokerStars statistics</h1>
Simple script(s) to track history. This will use console.log to print statistics to terminal

<b>Supported games:</b>
   * 7 Card Stud Hi/Lo
  * 7 Card Stud
  * Hold'em Limit
  * Hold'em No Limit
  * Omaha Hi/Lo Limit
  * Omaha Hi/Lo Pot Limit
  * Triple Draw 2-7 Lowball
  * Omaha Pot Limit
  * Razz

<h2>Features</h2>

Keeps track of count of played hands for each game. (list above). This includes cash and tournament games. Doesn't print games which have not been played (count 0).
<br/>

**From tournaments and sit & go's this keeps track on:**

* Total tournament plays
* Wins
* Tournament wins
* Buy-in & re-entries
* Shows difference between wins and buy-ins & re-entries

**Example output of script time when readme is updated.**
```
--- Played hands by game ---
Hold'em No Limit         967
Omaha Hi/Lo Limit        318
Razz                     316
7 Card Stud Hi/Lo        302
Hold'em Limit            297
7 Card Stud              286
Triple Draw 2-7 Lowball  261
Omaha Pot Limit          254
Omaha Hi/Lo Pot Limit    1

All played hands         3 002

--- Tournament, sit & go statistics ---
Played tournaments             9
Tournament, sit & go wins      4
Earned money                   410 125
Paid buy-ins (and rebuyis)     230 000
Diff on buy-ins and winnings   180 125
```

<h2>Build project</h2>
You need Node 17 (lower version may be ok, not tested). Im not sure will this work with >= Node 20.0.6 because env is built-in.

To compile & build project create .env file on root. There is .env.example to show what it should look like

Run command

> npm install

> npm run build

To run statistics run command

> node dist/index.js

I recommend doing bash script for this. For example I got next bash script and have set it on alias:
```
START_DIR=$(PWD)

cd /C/Users/<some path>/pokerstatistics/dist
clear

node -e "console.clear()"
node index.js

cd $START_DIR
exit 0
```
<h2>Bugs</h2>
Please open issue on GitHub if you find bug. There probably are few.
Also do that if you have problems with installation or something like that.
<h2>Feature suggestion</h2>
Please open issue on GitHub. I gladly hear out new suggestions.
