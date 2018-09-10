package csu.edu.happygoat.interceptor;

import csu.edu.happygoat.annotation.AuthToken;
import csu.edu.happygoat.util.Constrant;
import csu.edu.happygoat.util.RedisPool;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import redis.clients.jedis.Jedis;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.lang.reflect.Method;

public class AuthorizationInterceptor implements HandlerInterceptor {
    private String httpHeaderName = "Authorization";

    private String unauthorizedErrorMessage = "401 unauthorized";

    private int unauthorizedErrorCode = HttpServletResponse.SC_UNAUTHORIZED;

    public static final String REQUEST_CURRENT_KEY = "REQUEST_CURRENT_KEY";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (!(handler instanceof HandlerMethod)) {
            return true;
        }
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        Method method = handlerMethod.getMethod();
        if (method.getAnnotation(AuthToken.class) != null || handlerMethod.getBeanType().getAnnotation(AuthToken.class) != null) {


            String token = request.getHeader(httpHeaderName);
            String username = "";
            Jedis jedis = RedisPool.getJedis();
            if (token != null && token.length() != 0) {

                username = jedis.get(token);
            }
            if (username != null && !username.trim().equals("")) {
                Long tokeBirthTime = Long.valueOf(jedis.get(token + username));
                Long diff = System.currentTimeMillis() - tokeBirthTime;
                if (diff > Constrant.TOKEN_RESET_TIME) {
                    jedis.expire(username, Constrant.TOKEN_EXPIRE_TIME);
                    jedis.expire(token, Constrant.TOKEN_EXPIRE_TIME);
                    Long newBirthTime = System.currentTimeMillis();
                    jedis.set(token + username, newBirthTime.toString());
                }

                jedis.close();
                request.setAttribute(REQUEST_CURRENT_KEY, username);
                return true;


            } else {
                JSONObject jsonObject = new JSONObject();

                PrintWriter out = null;
                try {
                    response.setStatus(unauthorizedErrorCode);
                    response.setContentType(MediaType.APPLICATION_JSON_VALUE);

                    jsonObject.put("code", ((HttpServletResponse) response).getStatus());
                    jsonObject.put("message", HttpStatus.UNAUTHORIZED);
                    out = response.getWriter();
                    out.println(jsonObject);

                    return false;
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (null != out) {
                        out.flush();
                        out.close();
                    }
                }

            }

        }

        request.setAttribute(REQUEST_CURRENT_KEY, null);

        return true;
    }
}