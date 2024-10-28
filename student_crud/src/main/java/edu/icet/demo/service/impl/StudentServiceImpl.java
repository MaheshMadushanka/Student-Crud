package edu.icet.demo.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.demo.Entity.StudentEntity;
import edu.icet.demo.model.StudentModel;
import edu.icet.demo.repository.StudentRepository;
import edu.icet.demo.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final ObjectMapper objectMapper;
    private final StudentRepository studentRepository;

    @Override
    public StudentModel persist(StudentModel studentModel) {
        StudentEntity  studentEntity = studentRepository.save(objectMapper.convertValue(studentModel, StudentEntity.class));
        return objectMapper.convertValue(studentEntity,StudentModel.class);
    }

    @Override
    public List<StudentEntity> retrive() {
        Iterable<StudentEntity> entities=studentRepository.findAll();
        List<StudentEntity> studentModels=new ArrayList<>();

        for (StudentEntity entity : entities) {
            studentModels.add(
                    entity
            );
        }
        return studentModels;
    }

    @Override
    public boolean delete(Integer id) {
        StudentEntity studentEntity= studentRepository.findById(id).get();
        studentRepository.delete(studentEntity);
        return true;
    }

    @Override
    public void updateSudent(StudentEntity studentEntity) {

        studentRepository.findById(studentEntity.getStdId()).ifPresent(entity1 -> {
            entity1.setStdName(studentEntity.getStdName());
            entity1.setAge(studentEntity.getAge());
            entity1.setAddress(studentEntity.getAddress());
            studentRepository.save(entity1);
        });



    }
}
