## Serve Dev

```bash
$ denoflare serve complimenter
```

## Check After Serve Dev


```bash
$ curl -sL 'http://localhost:3030' | awk 4
Somebody is a genius!

$ curl -sL 'http://localhost:3030?name=cowboy' | awk 4
cowboy is a genius!
```

## Deploy


```bash
$ time denoflare push complimenter
bundling complimenter into bundle.js...
bundle finished in 1286ms
computed bindings in 1ms
putting module-based undefined worker complimenter... (538bytes) (307bytes compressed)
put script complimenter in 1680ms

real    0m3.823s
user    0m5.732s
sys     0m0.210s
```

## Enable Routing

ダッシュボードから有効化する

## Check After Deploy

```bash
$ curl -sL 'https://complimenter.app-club.workers.dev/?name=cowboy' | awk 4
cowboy is a genius!

$ curl -sL 'https://complimenter.app-club.workers.dev/' | awk 4
Somebody is a genius!
```