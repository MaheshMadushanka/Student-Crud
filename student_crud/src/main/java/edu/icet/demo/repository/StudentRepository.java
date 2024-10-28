package edu.icet.demo.repository;

import edu.icet.demo.Entity.StudentEntity;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<StudentEntity,Integer> {
}
