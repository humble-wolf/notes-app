FROM python:3.10

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libpq-dev gcc python3-dev musl-dev

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate && pytest && python manage.py runserver 0.0.0.0:8000"]
