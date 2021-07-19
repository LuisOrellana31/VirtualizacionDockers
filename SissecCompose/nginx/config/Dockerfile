FROM nginx:latest
 
COPY dist /usr/share/nginx/html/
RUN chmod 755 /usr/share/nginx/html/*

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80