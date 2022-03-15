import socket
import sys
import threading

host = ('localhost', 55555)

print('connecting to  server')

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(('0.0.0.0', 50001))
sock.sendto(b'0', host)

while True:
    data = sock.recv(1024).decode()

    if data.strip() == 'ready':
        print('checked in with server, waiting')
        break

data = sock.recv(1024).decode()
ip, sport= data.split(' ')
sport = int(sport)


print('  ip:          {}'.format(ip))
print('  source port: {}'.format(sport))

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(('0.0.0.0', sport))

print('ready to exchange messages\n')


def listen():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind(('0.0.0.0', sport))

    while True:
        data = sock.recv(1024)
        print('\rpeer: {}\n> '.format(data.decode()), end='')


listener = threading.Thread(target=listen, daemon=True);
listener.start()

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    msg = input('> ')
    sock.sendto(msg.encode(), (ip, sport))
