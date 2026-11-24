# The World Today — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/fitriadin/news-image-20261124-v2/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/fitriadin/news-image-20261124-v2/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page newspaper front page summing up Tuesday 24 November 2026's world news — the deadly candy-factory fire in Banten, Indonesia (24 killed, about 30 still missing); COP31 collapsing in Antalya with no fossil-fuel deal; Modi and Nepal's PM Shah flagging off the Saryu–Kamala Express between Ayodhya and Janakpur; Nvidia bringing back Jensen Huang as Wall Street rebounds; and Rishabh Pant's 128 powering India to a record 720, plus Max Verstappen's Las Vegas Grand Prix win. The page is drawn in code (`poster.html`, rendered once with a headless browser) and the program copies the finished 1024×1024 image to `/output/entry.png`, deterministically and with no network.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program (Node 22+): clears only the contents of the output directory and copies `entry.png` there.
- `poster.html` — the front page itself, hand-written HTML/CSS/SVG.
- `entry.png` — the rendered 1024×1024 front page.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3jqkx1q8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
