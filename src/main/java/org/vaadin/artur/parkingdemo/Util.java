package org.vaadin.artur.parkingdemo;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import elemental.json.Json;
import elemental.json.JsonValue;

public class Util {

    public static JsonValue toJson(List<?> list) {
        try {
            return Json.instance().parse(new ObjectMapper().writeValueAsString(list));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return Json.createArray();
        }
    }

}