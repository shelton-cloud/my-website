
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -f index.html default.conf

COPY nginx.conf /etc/nginx/nginx.conf

COPY index.html bryan-photo.jpg ./
RUN chmod 644 index.html bryan-photo.jpg

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]