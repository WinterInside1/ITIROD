import select
import socket
import time
import PyQt5
from PyQt5 import QtWidgets

import pymysql

dbServerName = "localhost"
dbUser = "root"
dbPassword = "test"
dbName = "TerminalChat"
buffer_size = 1024
db = pymysql.connect(host=dbServerName, user=dbUser, password=dbPassword,
                     db=dbName)


def create_table():
    with db.cursor() as cursor:
        sqlCreateTableCommand = "CREATE TABLE History(id int(11)r AUTO_INCREMENT PRIMARY KEY, " \
                                "UserId varchar(32), Message varchar(512), IP  varchar(15)," \
                                "Port varchar(7) )"
        cursor.execute(sqlCreateTableCommand)
    db.close()


def store_history(data):
    # cursorObject = connectionObject.cursor()
    #
    # sqlCreateTableCommand = "CREATE TABLE History(id int AUTO_INCREMENT PRIMARY KEY, " \
    # "UserId varchar(32), Message varchar(512), IP  varchar(15)," \
    #  "Port varchar(7) )"
    db = pymysql.connect()
    with db:
        with db.cursor() as cursor:
            sql = "INSERT INTO `History` (`Message`) VALUES (%s)"
            cursor.execute(sql, data)

        db.commit()
    db.close()


def get_history():
    list = []
    db = pymysql.connect()
    cursor = db.cursor()
    cursor.execute("select * from `History` ")
    a = cursor.fetchall()
    for i in a:
        list.append(i[0])
    db.close()
    return (list)


def broadcast(server_socket, sock, message):
    for socket in input:
        if socket != server_socket and socket != sock:
            try:
                socket.send(message)
            except:
                socket.close()
                if socket in input:
                    input.remove(socket)


server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server.bind(('localhost', 25560))
BUFFER_SIZE = 1024
client_username_dict = {}
print("Welcome to the chatroom!")

while 1:
    inputready, outputready, exceptready = select.select(input, [], [])

    for s in inputready:
        if s == server:

            client, address = server.accept()
            input.append(client)
            print('New client: %s' % str(address))

            username_data = client.recv(BUFFER_SIZE)
            decoded_username_data = username_data.decode('utf-8')
            client_username_dict[client] = decoded_username_data

            enter_data = "---------------" + str(decoded_username_data) + " enter the room" + "---------------"
            encode_enter_data = enter_data.encode('utf-8')
            broadcast(server, client, encode_enter_data)

            history = get_history()
            for i in history:
                client.send(i.encode('utf-8'))
                time.sleep(0.01)

        else:
            data = s.recv(BUFFER_SIZE)
            if data:
                decode_data = str(data.decode('utf-8'))
                store_history(decode_data)
                broadcast(server, s, data)
            else:
                left_user = client_username_dict[s]
                escape = "---------------" + str(escape) + " left the room" + "---------------"
                broadcast(server, s, escape.encode('utf-8'))

                del client_username_dict[s]
                s.close()
                input.remove(s)
            if input("close"):
                server.close()



