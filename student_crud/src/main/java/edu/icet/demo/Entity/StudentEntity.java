package edu.icet.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "student")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer stdId;

    private String stdName;

    private String age;

    private String stdContact;

    private String grdName;

    private String grdContact;

    private  String address;
}
