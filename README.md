# Космическая битва
### Домашняя работа OTUS: Архитектура и шаблоны проектирования 02.2022
В далекой звездной системе встретились две флотилии космических кораблей. Корабли могут передвигаться по всему пространству звездной системы по прямой, поворачиваться против и по часовой стрелке, стрелять фотонными торпедами. Попадание фотонной торпеды в корабль выводит его из строя.

От каждой флотилии в сражении принимают участие по три космических корабля.
Победу в битве одерживает та флотилия, которая первой выведет из строя все корабли соперника.
Управление флотилиями осуществляется игрокам компьютерными программами (то есть не с клавиатуры).
Концептуально игра состоит из трех подсистем:

Игровой сервер, где реализуется вся игровая логика.
Player - консольное приложение, на котором отображается конкретная битва.
Агент - приложение, которое запускает программу управления танками от имени игрока и отправляет управляющие команды на игровой сервер. Реализовать движение объектов на игровом поле в рамках подсистемы Игровой сервер.

**Выполнил студент:** Спесивых Максим
> Номер ветки === номеру ДЗ
