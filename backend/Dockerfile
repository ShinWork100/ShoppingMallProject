# docker/backend/Dockerfile

FROM python:3.8.3-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt 

# Adding necessary libraries for package compilation
RUN apk add --no-cache gcc musl-dev python3-dev
RUN apk add --no-cache tzdata

RUN pip3 install -r requirements.txt
COPY . .
