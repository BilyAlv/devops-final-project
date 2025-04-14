FROM nginx:alpine

# Copiar archivos HTML
COPY src/ /usr/share/nginx/html/

# Exponer puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
