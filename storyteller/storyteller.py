import numpy as np 
import cv2
import socket
import threading
import time
import random
import os
#import tensorflow as tf 

'''
def weight_variable(shape): 
	return tf.get_variable(shape=shape, initializer=tf.truncated_normal_initializer(stddev=0.1), name='weight')


def bias_variable(shape):
	return tf.get_variable(shape=shape, initializer=tf.constant_initializer(value=0), name='bias')


def conv2d(x, W):
	return tf.nn.conv2d(x, W, strides=[1, 1, 1, 1], padding='SAME', name='conv2d')


def max_pool_2x2(x, name):
	with tf.variable_scope(name):
		return tf.nn.max_pool(x, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME', name='max_pool')


def conv_layer(x, kernal_shape, name):
	with tf.variable_scope(name):
		W = weight_variable(kernal_shape)
		b = bias_variable(kernal_shape[3])
		return tf.nn.relu(conv2d(x, W) + b, name='relu')


def fc_layer(x, shape, name, softmax=False):
	with tf.variable_scope(name):
		W = weight_variable(shape)
		b = bias_variable(shape[1])
		if softmax:
			return tf.nn.softmax(tf.matmul(x, W) + b, name='softmax')
		else:
			return tf.nn.relu(tf.matmul(x, W) + b, name='relu')


IMAGE_WIDTH = 28
IMAGE_HETGHT = 28
IMAGE_CHANNEL = 3
CLASS_NUM = 10
LEARNING_RATE = 1e-3
BATCH_SIZE = 64
KEEP_PROB = 0.5
LOG_DIR = 'log/'


with tf.variable_scope('input'):
	x = tf.placeholder(dtype=tf.float32, shape=[None, None, None, IMAGE_CHANNEL], name='image')
	x_resize = tf.image.resize_images(x, size=(IMAGE_HETGHT, IMAGE_WIDTH))
	y_ = tf.placeholder(dtype=tf.float32, shape=[None, CLASS_NUM], name='label')
	keep_prob = tf.placeholder(dtype=tf.float32, name='keep_prob')

with tf.variable_scope('layer'):
	net = conv_layer(x_resize, [5, 5, x_resize.shape[3], 32], name='conv1')
	net = max_pool_2x2(net, name='pool1')
	net = conv_layer(net, [5, 5, net.shape[3], 32], name='conv2')
	net = max_pool_2x2(net, name='pool2')
	net = tf.reshape(net, [-1, net.shape[1]*net.shape[2]*net.shape[3]], name='flatten')
	net = fc_layer(net, [net.shape[1], 512], name='fc1')
	net = tf.nn.dropout(net, keep_prob, name='drop1')

with tf.variable_scope('output'):
	y = fc_layer(net, [net.shape[1], CLASS_NUM], name='output', softmax=True)

with tf.variable_scope('accuracy'):
	cross_entropy = -tf.reduce_mean(y_*tf.log(tf.clip_by_value(y, 1e-9, 1)), name='loss')
	correct_prediction = tf.equal(tf.argmax(y, 1), tf.argmax(y_, 1))
	accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32), name='accuracy')

with tf.variable_scope('train'):
	train_step = tf.train.AdamOptimizer(LEARNING_RATE).minimize(cross_entropy)


image = cv2.imread('1.jpg')
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

sess = tf.Session()
sess.run(tf.global_variables_initializer())
print(sess.run(y, feed_dict={x:[image], keep_prob:1.0}))
'''



with open('stories.txt', 'r', encoding='utf-8') as fp:
	stories = fp.readlines()


def tcplink(sock, addr):
	while True:
		data = sock.recv(1024)
		if not data or data.decode('utf-8') == 'exit':
			break
		sock.send((random.choice(stories).encode()))
	sock.close()

sk = socket.socket()
sk.bind(("127.0.0.1", 4396))
sk.listen()

while True:
	# 接受一个新连接:
	sock, addr = sk.accept()
	# 创建新线程来处理TCP连接:
	#threading.Thread(target=tcplink, args=(sock, addr)).start()
	tcplink(sock, addr)
