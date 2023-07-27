FROM python:3.8-slim

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app

COPY ./entrypoint.sh .
ENTRYPOINT [ "sh", "/app/entrypoint.sh" ]

# CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"]