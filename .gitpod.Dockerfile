# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full-vnc

USER root

RUN apt update

# Installing necessary packages for tauri (ubuntu)
RUN apt install -yq build-essential \
        libwebkit2gtk-4.0-dev  \
        build-essential \
        wget \
        libssl-dev \
        libgtk-3-dev \
        libsoup2.4-dev \
        libjavascriptcoregtk-4.0-dev \
        libayatana-appindicator3-dev \
        librsvg2-dev

RUN rm -rf /var/lib/{apt,dpkg,cache,log}/ /tmp/* /var/tmp/*

# Installing Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN /home/gitpod/.deno/bin/deno completions bash > /home/gitpod/.bashrc.d/90-deno && echo 'export PATH="/home/gitpod/.deno/bin:$PATH"' >> /home/gitpod/.bashrc.d/90-deno

USER gitpod