package csu.edu.happygoat.controller;

import csu.edu.happygoat.domain.Order;
import csu.edu.happygoat.service.OrderService;
import csu.edu.happygoat.util.ResponseTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;
    //按id查询某个订单
    @RequestMapping(value = "/orders/{orderId}", method = RequestMethod.GET)
    public Order getOrder(@PathVariable("orderId") String orderId) {
        return orderService.getOrder(orderId);
    }
    //按id更新某个订单
    @RequestMapping(value = "/orders/{orderId}", method = RequestMethod.PUT)
    public ResponseTemplate updateOrder(@PathVariable("orderId") String orderId,
                                        @RequestParam("status") String status,
                                        @RequestParam("detail") String detail,
                                        @RequestParam("time") String time,
                                        @RequestParam("phoneNumber") String phoneNumber) {
        Order order = new Order();
        order.setOrderId(orderId);
        order.setStatus(status);
        order.setDetail(detail);
        order.setTime(time);
        order.setPhoneNumber(phoneNumber);
        orderService.updateOrder(order);
        return new ResponseTemplate(200, "Success");
    }
    //按id取消某个订单
    @RequestMapping(value = "/orders/{orderId}", method = RequestMethod.DELETE)
    public ResponseTemplate cancelOrder(@PathVariable("orderId") String orderId) {
        orderService.cancelOrder(orderId);
        return new ResponseTemplate(200, "Success");
    }
    //获取用户的所有订单
    @RequestMapping(value = "/users/{phoneNumber}/orders", method = RequestMethod.GET)
    public List<Order> getOrderByUserId(@PathVariable("phoneNumber") String phoneNumber){
        return orderService.getOrdersByPhoneNumber(phoneNumber);
    }
    //为用户增加一个订单
    @RequestMapping(value = "/users/{phoneNumber}/orders", method = RequestMethod.POST)
    public ResponseTemplate addOrder(@PathVariable("phoneNumber") String phoneNumber,
                                     @RequestParam("status") String status,
                                     @RequestParam("detail") String detail,
                                     @RequestParam("time") String time) {
        Order order = new Order();
        order.setDetail(detail);
        order.setStatus(status);
        order.setTime(time);
        order.setPhoneNumber(phoneNumber);
        orderService.insertOrder(order);
        return new ResponseTemplate(200, "Success");
    }
}
