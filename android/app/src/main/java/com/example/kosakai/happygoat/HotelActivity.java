package com.example.kosakai.happygoat;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

public class HotelActivity extends AppCompatActivity {
    private ImageView hotel_img;
    private ImageView hotel_back;
    private TextView hotel_name;
    private TextView hotel_price;
    private LinearLayout hotel_order;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.hotel_layout);
        Intent intent =getIntent();
        hotel_img = (ImageView)findViewById(R.id.hotel_img);
        hotel_name = (TextView)findViewById(R.id.hotel_name);
        hotel_price = (TextView)findViewById(R.id.hotel_price);
        hotel_back = (ImageView)findViewById(R.id.hotel_back);
        hotel_order = (LinearLayout)findViewById(R.id.hotel_order);
        hotel_back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        hotel_img.setImageResource(Integer.parseInt(intent.getStringExtra("hotel_img")));
        hotel_name.setText(intent.getStringExtra("hotel_name"));
        hotel_price.setText(intent.getStringExtra("hotel_price"));
        hotel_order.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(HotelActivity.this,HotelOrderActivity.class);
                startActivity(intent);
            }
        });

    }
}
