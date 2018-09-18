package csu.edu.happygoat.service.impl;

import com.sun.org.apache.xpath.internal.operations.Or;
import csu.edu.happygoat.dao.OrderMapper;
import csu.edu.happygoat.domain.Order;
import csu.edu.happygoat.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public Order getOrder(String orderId) {
        return orderMapper.getOrder(orderId);
    }

    @Override
    public void insertOrder(Order order) {
        orderMapper.insertOrder(order);
    }

    @Override
    public void updateOrder(Order order) {
        orderMapper.updateOrder(order);
    }

    @Override
    public void cancelOrder(String orderId) {
        Order order = orderMapper.getOrder(orderId);
        order.setStatus("取消");
        orderMapper.updateOrder(order);
    }

    @Override
    public List<Order> getOrdersByPhoneNumber(String phoneNumber) {
        return orderMapper.getOrdersByPhoneNumber(phoneNumber);
    }
}
