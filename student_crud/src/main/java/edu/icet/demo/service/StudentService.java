package edu.icet.demo.service;

import edu.icet.demo.Entity.StudentEntity;
import edu.icet.demo.model.StudentModel;

import java.util.List;

public interface StudentService {
    StudentModel persist(StudentModel studentModel);

    List<StudentEntity> retrive();

    boolean delete(Integer id);

    void updateSudent(StudentEntity studentEntity);
}
