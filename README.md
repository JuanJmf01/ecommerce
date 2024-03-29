# ecommerce

## Clone the Repository
First, clone this repository to your local machine:

```bash
git clone https://github.com/JuanJmf01/ecommerce.git
```

## 1. Installation of the Virtual Environment to server

To isolate the dependencies of this project, it is recommended to use a virtual environment. Follow these steps:

1. in the command console go to "/ecommerce"
2. Install `virtualenv` if you don't have it already:

    ```
    pip install virtualenv
    ```

3. Create a new virtual environment:

    ```
    virtualenv your_environment_name
    ```

4. Activate the virtual environment. On Windows systems, run:

    ```
    your_environment_name\Scripts\activate
    ```

## 2. Django Installation and Dependencies

Install Django and other dependencies necessary for your project:

```bash
pip install django
pip install mysqlclient
pip install djangorestframework  # Install "Django Rest Framework"
pip install django-cors-headers  # Install middleware for CORS
```

## 3. Update configuration to work with MySQL

In settings.py make the following modifications. Make sure to replace the values

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nombre_de_tu_base_de_datos',
        'USER': 'tu_usuario_de_mysql',
        'PASSWORD': 'tu_contraseña_de_mysql',
        'HOST': 'localhost',  # It may vary depending on the configuration of your MySQL server
        'PORT': '',           # Leave blank to use the default port
    }
}


## 4. Migraciones

Perform the migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

## 5. Run server

```bash
python manage.py runserver
```


## 6. react configuration

1. Make sure you have node.js installed. A version greater than 16.0

2. Open another terminal and go to "/client"
    ```
    cd client
    ```

    Your route should look like this: ".../ecommerce/client" 


3. install the packages
    ```
    npm install
    ```

4. run the client
    ```
    npm run dev
    ```



