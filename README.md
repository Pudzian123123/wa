# [ ru ] Как начать пользоваться данной сборкой?

> Данная сборка первой версии, соответственно в ней присутствуют баги. В следующий версиях они будут исправлены. Заходите на наш [дискорд сервер](https://discord.gg/FcNPVK5), чтобы указать нам нашедший Вами баг.

- Все очень просто, для начала давайте скачаем архив с файлами (это можно сделать нажав на [меня](https://github.com/perssBest/MySql-bot/archive/master.zip))

- Для работы со сборкой нам понадобятся некоторые вещи:  
+ 1. Необходимо установить [nodejs (официальный сайт)](https://nodejs.org/en/)
+ 2. После установки нам необходимо зарегистрироваться на сайте [mysql](https://remotemysql.com/login.php)
+ 3. После регистрации заходим в вкладку **DATABASES**
+ 4. Находим кнопку **CREATE NEW DATABASE**
+ 5. Записываем пароли, и другие данные в блокнот (на всякий случай, в дальнейшим у Вас могут возникнуть с этим проблемы.)

- Разархивируем архив в перекидываем его в убодное вам место. Открываете редактор кода ([Atom](https://atom.io), 
[Visual Studio Code](https://code.visualstudio.com)) и заходите в проект.

- Открываем файл под названием **config.json** и подстраиваем все настройки под себя.

- Далее давайте разберемся с базой данных. После того как вы создали ее, Вы сможете увидеть базу, рядом будет кнопка **ACTION**. Нажимаем на нее и после у нас появляются новые кнопки, нам необходима только одна: ***PHPMyAdmin***.

- После, мы должны войти либо зарегистрироваться, с помощью тех данных, которые вам дали при регистрации базы данных.

- В строку "Пользователь" вставляете "Username", а в строку "Пароль", пароль от базы (тот который был выдан при регистрации самой базы данных MySQL)

- После успешного входа создаем новую табличку 
![Пример](https://cdn.discordapp.com/attachments/653197646823030824/669801093554896916/unknown.png)

- В появившимся окне выставляем такие же значения как на скриншоте.
![Скриншот](https://cdn.discordapp.com/attachments/653197646823030824/669802183805501450/unknown.png)

- Остальные значения не трогаем! Сохраняем таблицу кнопкой "Сохранить".

- Нам понадобиться еще одна таблица для экономики бота. Скриншот как создавать след таблицу ниже:
![Скриншот](https://cdn.discordapp.com/attachments/653197646823030824/669804760400003072/unknown.png)

- Также в стоблике **money, xp, lvl** можете поставить значние **30000**. Это сделает ограничение в 30.000 монет и т.д.

- Сохранием столбики. Остальные элементы тоже не трогаем.

> **Фух. Сложное уже позади. Напоминаю, что в config.json необходимо вставить данные от созданной Вами базы данных.**

- Для установки модулей нам понадобиться **yarn**. Если же у вас его нету можете использовать обычный **npm**

```
Установка: yarn add <module>

Установка: npm install/i <module>
```

- Запускаем файл `starting.bat`. Если у вас бот находится в оффлайне или есть какие-то другие проблемы заходите на наш [дискорд сервер](https://discord.gg/FcNPVK5) и попросите помощи. Будем вам рады помочь!

> **Не рекомендую устанавливать данную сборку на Glitch, Wix, Repl.it и т.п. хосты. Оптимальный хост будет Heroku, да и проблем в дальнейшим с ним будет поменьше.**




# [ en ] How to start using this assembly?

> This assembly is the first version, respectively, it contains bugs. In future versions they will be fixed. Visit our [discord server](https://discord.gg/FcNPVK5) to indicate to us the bug that you found

- Everything is very simple, for a start let's download the archive with files (this can be done by clicking on [me](https://github.com/perssBest/MySql-bot/archive/master.zip))

- To work with the assembly, we need some things.
1) You need to install [nodejs(official site)](https://nodejs.org/en/)
2) After installation, we need to register on the site [mysql](https://remotemysql.com/login.php)
3) After registration, go to the tab **DATABASES**
4) Find the button **CREATE NEW DATABASE**
5) We write down passwords and other data in a notepad(just in case, in the future you may have problems with this.)

- “Unzip the archive in throwing it to a place that suits you.” Open the code editor([Atom](https://atom.io), 
[Visual Studio Code](https://code.visualstudio.com)) go into the project.

- Open **config.json** and adjust everything for yourself.

- Next, let's deal with the database. After you created it, you can twist the base, the **ACTION** button will be next to it, click on it and after we have new buttons, we only need one: ***MyPHPAdmin***.

- After, we must log in using the data that you were given when registering the database.

- In the line "User" insert "Username", in the line "Password", the password from the database (the one that was issued when registering the database itself)

- After a successful login, create a new plate
![Example](https://cdn.discordapp.com/attachments/653197646823030824/669801093554896916/unknown.png)

- In the window that appears, set the same values as in the screenshot.
![Screenshot](https://cdn.discordapp.com/attachments/653197646823030824/669802183805501450/unknown.png)

- Do not touch the remaining values! Save the table with the "Save" button

“We need another table.” For Bot Economy. Screenshot of how to create a trace of the table below:
![Screenshot](https://cdn.discordapp.com/attachments/653197646823030824/669804760400003072/unknown.png)

- Also in stoblik **money, xp, lvl** you can put significant **30000**. This will make a limit of 30.000 coins and so on.

- Save the columns. The remaining elements are also not touched.

> **Fuh. It’s hard already. I understand that in config.json you need to insert data from the created database.**

- To install the modules we need **yarn**. If you don’t have one, you can use regular **npm**

```
Installation: yarn add <module>

Installation: npm install (i) <module>
```

- We start starting.bat. If your bot is offline or if you have any other problems, go to our [discord server](https://discord.gg/FcNPVK5) and ask for help. We will be glad to see you!

> **I do not recommend installing this assembly on glitch, wix, repl.it. The optimal host will be Heroku, and there will be less problems with it later.**

## **Готовая база-данных. Ready database.** 
```
  "host": "remotemysql.com",
  "user": "h4wBbXM10s",
  "password": "g7XNHBUCSg",
  "database": "h4wBbXM10s",
  "port": "3306"
```

### **Огромное спасибо этим людям за поддержку и помощь: | Many thanks to these people for their support and help:**

[x] [komunre#2298](https://github.com/komunre)

[x] manul#8612 

[x] [Milkiy#0001](https://github.com/FletcherShiro)
