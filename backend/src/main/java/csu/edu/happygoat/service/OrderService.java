package csu.edu.happygoat.service;

import csu.edu.happygoat.domain.Order;

import java.util.List;

public interface OrderService {
    public Order getOrder(String orderId);
    public void insertOrder(Order order);
    public void updateOrder(Order order);
    public void cancelOrder(String orderId);
    public List<Order> getOrdersByPhoneNumber(String phoneNumber);
}
