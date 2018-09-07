package csu.edu.happygoat.util;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.util.ResourceBundle;

public class RedisPool {
    private static JedisPool pool =null;
    /*使用静态代码块，优先加载顺序在static方法之前
     * 初始化redis连接配置
     */
    static {
        //得到redis.properties 中的配置信息
        ResourceBundle bundle = ResourceBundle.getBundle("redis");
        if(bundle==null){
            throw new IllegalArgumentException("[redis.properties] is not found");
        }
        //配置信息对象config
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(Integer.valueOf(bundle.getString("redis.pool.maxActive")));
        config.setMaxIdle(Integer.valueOf(bundle.getString("redis.pool.maxIdle")));
        config.setMaxWaitMillis(Long.valueOf(bundle.getString("redis.pool.maxWait")));
        config.setTestOnBorrow(Boolean.valueOf(bundle.getString("redis.pool.testOnBorrow")));
        config.setTestOnReturn(Boolean.valueOf(bundle.getString("redis.pool.testOnReturn")));
        //创建redis连接池
        pool =  new JedisPool( config,bundle.getString("redis.ip"),Integer.valueOf(bundle.getString("redis.port")));
    }
    /**
     * 获取jedis实例
     * 在获取jedis实例方法前，加上序列化
     */
    public synchronized static Jedis getJedis(){
        if(pool!=null){
            return pool.getResource();
        }else{
            return null;
        }
    }
    /**
     * 释放jedis实例资源
     */
    public static void returnResource(Jedis jedis){
        if(jedis!=null){
            jedis.close();
        }
    }
}
