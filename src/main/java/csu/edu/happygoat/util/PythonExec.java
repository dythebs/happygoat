package csu.edu.happygoat.util;

import java.io.*;
import java.util.Scanner;

public class PythonExec {
    //输入命令，获取标准输出
    public static String run(String[] cmd) {
        String line = "";
        try {
            Process process = Runtime.getRuntime().exec(cmd);

            InputStream is = process.getInputStream();
            InputStreamReader isr = new InputStreamReader(is);
            BufferedReader br = new BufferedReader(isr);

            String tmp;
            while((tmp = br.readLine()) != null) {
                line += tmp;
            }

            isr.close();
            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return line;
    }

    public static void main(String[] args) {
        String file = new File(PythonExec.class.getResource("/csu/edu/happygoat/spider/hunlicehuasousuo.py").getFile()).getAbsolutePath();
        String arg = "https://sh.daoxila.com/HunQing/Shop/AnLi";
        String[] cmd = new String[]{"python", file, arg};
        System.out.print(run(cmd));
    }

    public static String getResult(String[] cmd) {
        cmd[1] = new File(PythonExec.class.getResource("/csu/edu/happygoat/spider/"+cmd[1]).getFile()).getAbsolutePath();
        return run(cmd);
    }
}
