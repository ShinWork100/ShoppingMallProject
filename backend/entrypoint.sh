#!/bin/sh

python manage.py makemigrations
python manage.py makemigrations
python manage.py makemigrations

gunicorn backened.wsgi:application --bind 0.0.0.0:8000
