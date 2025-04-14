# 🚀 DevOps Práctica Final - CI/CD con GitHub, Docker y GitHub Actions

Este proyecto es una práctica final del curso de DevOps, en la que se integran conceptos como control de versiones, pruebas automatizadas, contenedores Docker y despliegue continuo con GitHub Actions y GitHub Pages.

---

## 📌 Objetivos

1. Crear una página web simple en HTML con un mensaje "Hola Mundo".
2. Crear una prueba unitaria que valide el contenido del HTML.
3. Servir la página usando un servidor web Nginx en un contenedor Docker.
4. Configurar GitHub Actions para ejecutar las pruebas automáticamente al hacer push.
5. Publicar la página en GitHub Pages.

---

## 📂 Estructura del Proyecto

```
devops-final-project/
├── index.html
├── styles.css
├── test_script.py
├── Dockerfile
└── .github/
    └── workflows/
        └── test.yml
```

---

## 🧪 Pruebas

El archivo `test_script.py` contiene una prueba unitaria simple que verifica que el archivo HTML incluya el texto `"Hola Mundo"`.

Ejecutar localmente:

```bash
python -m unittest test_script.py
```

---

## 🐳 Docker

### Crear imagen:
```bash
docker build -t nginx-holamundo .
```

### Ejecutar contenedor:
```bash
docker run -d -p 8080:80 nginx-holamundo
```

Accede a la página en [http://localhost:8080](http://localhost:8080)

---

## ⚙️ GitHub Actions

Cada vez que se hace push o pull request a `main`, GitHub Actions ejecuta automáticamente las pruebas definidas en `.github/workflows/test.yml`.

---

## 🌐 GitHub Pages

La página está publicada en GitHub Pages y accesible en:

📎 **https://bilyalv.github.io/devops-final-project/**

---

## 🧑‍💻 Autor

**Nombre:** Bily Alvarez  
**Curso:** DevOps - Práctica Final  
```
