package csu.edu.happygoat.service.impl;

import csu.edu.happygoat.service.SearchService;
import csu.edu.happygoat.util.PythonExec;
import org.springframework.stereotype.Service;

@Service
public class SearchServiceImpl implements SearchService {
    @Override
    public String getHunlicehuaData(String url) {
        String[] cmd = new String[] {"python", "hunlicehuasousuo.py", url};
        return PythonExec.getResult(cmd);
    }

    @Override
    public String getHunyanjiudianData(String url) {
        String[] cmd = new String[] {"python", "hunyanjiudiansousuo.py", url};
        return PythonExec.getResult(cmd);
    }
}
