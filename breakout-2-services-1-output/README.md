https://cloud.google.com/appengine/docs/standard/nodejs/building-app


```
git clone https://github.com/koenighotze/modern-cloud-for-non-techs.git
```

in service A and service b

```
$ npm i
$ npm start
```

in second terminal or browser

```
curl http://localhost:3000/hello/helge

# check output
```

Deploy to app engine

```
$ gcloud app deploy
$ gcloud app browse
```

Check versions in console

https://cloud.google.com/appengine/docs/standard/nodejs/splitting-traffic

```
gcloud app services set-traffic [MY_SERVICE] --splits [MY_VERSION1]=[VERSION1_WEIGHT],[MY_VERSION2]=[VERSION2_WEIGHT] --split-by cookie
```

```
$ gcloud app versions list -s ds-serviceb
SERVICE      VERSION.ID       TRAFFIC_SPLIT  LAST_DEPLOYED              SERVING_STATUS
ds-serviceb  20201007t144050  0.00           2020-10-07T14:41:58+02:00  SERVING
ds-serviceb  20201007t144728  1.00           2020-10-07T14:48:15+02:00  SERVING
```

```
gcloud app services set-traffic ds-serviceb --splits 20201007t144050=0.5,20201007t144728=0.5 --split-by cookie
gcloud app services set-traffic ds-serviceb --splits 20201007t144050=0.5,20201007t144728=0.5 --split-by random
```

```
$ gcloud app versions list -s ds-serviceb
SERVICE      VERSION.ID       TRAFFIC_SPLIT  LAST_DEPLOYED              SERVING_STATUS
ds-serviceb  20201007t144050  0.50           2020-10-07T14:41:58+02:00  SERVING
ds-serviceb  20201007t144728  0.50           2020-10-07T14:48:15+02:00  SERVING
```

```
$ curl -v --cookie "GOOGAPPUID=20201007t144050" https://ds-serviceb-dot-dev1-onb-playground-18fd.appspot.com/now
```

