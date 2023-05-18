### Разработка

1. Убедитесь, что у вас установлен `node` и `yarn`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
```shell
yarn bootstrap
```
3. Выполните команду `yarn dev` для запуска в режиме разработки
```shell
yarn dev
```
4. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент по адресу [http://localhost:3001/](http://localhost:3001/ "localhost порт 3001")
```shell
yarn dev --scope=client
```
5. Выполните команду `yarn dev --scope=server` чтобы запустить только server
```shell
yarn dev --scope=server
```

### Продуктивная сборка
1. Убедитесь, что у вас установлен `node`, `yarn` и `docker`
2. Заполните `.env` в корневой директории 
3. С помощью утилиты `make` выполните команду.
```shell
make up
```

4. Запустите приложение по адресу [http://localhost:3001/](http://localhost:3001/ "localhost порт 3001") на 3001 порту, база данных запуститься в `docker` на 5435 порту. 

5. Для работы с базой данных откройте `pgAdmin` по адресу [http://localhost:5050/](http://localhost:5050/ "localhost порт 5050") на 5050 порту

### Линтинг

```shell
yarn lint
```

### Как добавить зависимости?
В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента 
```yarn lerna add {your_dep} --scope client```

```shell
yarn lerna add {your_dep} --scope client
```

Для сервера
```yarn lerna add {your_dep} --scope server```

```shell
yarn lerna add {your_dep} --scope server
```

И для клиента и для сервера
```yarn lerna add {your_dep}```

```shell
yarn lerna add {your_dep}
```


Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
```yarn lerna add {your_dep} --dev --scope server```

```shell
yarn lerna add {your_dep} --dev --scope server
```

