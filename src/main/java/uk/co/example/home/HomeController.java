package uk.co.example.home;


import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Renders the home page.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/", method = GET)
    public String index(Model model, HttpServletRequest request) {
        return "index";
    }
}
