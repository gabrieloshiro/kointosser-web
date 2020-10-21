Launching with nginx on MacOS
-----------------------------

# Load

```
#> launchctl load /usr/local/cellar/nginx/1.19.3/homebrew.mxcl.nginx.plist
```

# Unload

```
#> launchctl unload /usr/local/cellar/nginx/1.19.3/homebrew.mxcl.nginx.plist
```

# Config

- Add configs in -> `/usr/local/etc/nginx/servers/`
- Default config -> `/usr/local/etc/nginx/nginx.conf`
- Logs will be in -> `/usr/local/var/log/nginx/`
- Default webroot is -> `/usr/local/var/www/`
- Default listen address -> http://localhost:8080

Launching with Docker
---------------------

# Build

```
$ docker build -t webserver .
```

# Start

```
$ docker run -it --rm -d -p 8080:80 --name web webserver
```

# Stop

```
$ docker stop web
```
