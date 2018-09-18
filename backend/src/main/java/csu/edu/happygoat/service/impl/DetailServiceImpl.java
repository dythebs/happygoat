package csu.edu.happygoat.service.impl;

import csu.edu.happygoat.service.DetailService;
import csu.edu.happygoat.util.PythonExec;
import org.springframework.stereotype.Service;

@Service
public class DetailServiceImpl implements DetailService {
    @Override
    public String getHunlicehuaData(String url) {
        String[] cmd = new String[] {"python", "hunlicehuaxiangqing.py", url};
        return PythonExec.getResult(cmd);
    }

    @Override
    public String getHunyanjiudianData(String url) {
        String[] cmd = new String[] {"python", "hunyanjiudianxiangqing.py", url};
        return PythonExec.getResult(cmd);
    }

    @Override
    public String getHunshasheyingData(String url) {
        String[] cmd = new String[] {"python", "hunshasheyingxiangqing.py", url};
        return PythonExec.getResult(cmd);
    }

    @Override
    public String getMiyueData(String url) {
        return null;
    }
}
