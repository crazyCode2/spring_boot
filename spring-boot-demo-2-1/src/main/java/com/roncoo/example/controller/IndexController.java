package com.roncoo.example.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roncoo.example.bean.User;

@RestController
@RequestMapping(value = "/index")
public class IndexController {

	@RequestMapping
	public String index() {
		return "hello world";
	}

	@RequestMapping(value = "get")
	public Map<String, String> get(@RequestParam String name) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("name", name);
		map.put("value", "hello world");

		return map;
	}
	
	@RequestMapping(value = "find/{id}/{name}")
	public User get(@PathVariable int id, @PathVariable String name) {
		User u = new User();
		u.setId(id);
		u.setName(name);
		u.setDate(new Date());
		return u;
	}
}
