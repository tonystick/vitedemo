FROM nginx

LABEL maintainer="yxtans@isoftstone.com"
COPY default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/