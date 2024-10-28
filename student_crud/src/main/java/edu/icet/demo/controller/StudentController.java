package edu.icet.demo.controller;

import edu.icet.demo.Entity.StudentEntity;
import edu.icet.demo.model.StudentModel;
import edu.icet.demo.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin
@RestController
public class StudentController {
    private final StudentService studentService;

    @PostMapping("/student")
    StudentModel persist(@RequestBody StudentModel studentModel){
        return studentService.persist(studentModel);
    }

    @GetMapping("/studentTable")
    List<StudentEntity> retrive(){
        return studentService.retrive();
    }
    @DeleteMapping("/student/{id}")
    boolean delete(@PathVariable Integer id){
        boolean delete = studentService.delete(id);
        return delete;
    }

    @PutMapping("/student/update")
    public void updateSudent(@RequestBody StudentEntity studentEntity){
         studentService.updateSudent(studentEntity);
    }

}
