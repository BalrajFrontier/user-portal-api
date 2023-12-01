# User Portal API

This project contains the api to list and save user information

## For local development

```
git clone <remote url>
cd user-portal-api
npm install
npm run dev
```

## Build with Docker
To build the image
```
docker build -t user-portal-api:1.0 .
```
To list the images built
```
docker images
```
To create a container and run
```
docker run --name user-portal-api -p 4000:4000 -d user-portal-api:1.0
```

Note:
The API will be running in port 4000
