FROM python:3-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /backend

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD python manage.py makemigrations && python manage.py migrate --run-syncdb && python manage.py runserver 0.0.0.0:8000
