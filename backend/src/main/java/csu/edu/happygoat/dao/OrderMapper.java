package csu.edu.happygoat.dao;

import csu.edu.happygoat.domain.Order;

import java.util.List;

public interface OrderMapper {
    public Order getOrder(String orderId);
    public void insertOrder(Order order);
    public void updateOrder(Order order);
    public List<Order> getOrdersByPhoneNumber(String phoneNumber);
}
