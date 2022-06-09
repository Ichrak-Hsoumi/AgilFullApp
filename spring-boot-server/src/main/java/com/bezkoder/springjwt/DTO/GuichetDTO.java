package com.bezkoder.springjwt.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GuichetDTO {

    private Long id;

    private int number;

    private String open;

    private String close;
}
