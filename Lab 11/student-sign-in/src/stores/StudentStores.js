import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {

    // List of ALL students
    const studentList = ref([
        {name: 'A. Student', starID: 'aa1234aa', present: false},
        {name: 'B. Student', starID: 'bb1234bb', present: false},
        {name: 'C. Student', starID: 'cc1234cc', present: false}
    ])

    // Most recent student
    const mostRecentStudent = ref('')

    // Add new student to the studentList array.
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    // Filter student out of array after user prompt if the provided student is in the array.
    function deleteStudent(studentToDelete) {
        if(confirm(`Delete ${studentToDelete.name}?`)) {
            studentList.value = studentList.value.filter(student => student != studentToDelete)

            mostRecentStudent.val = {}
        }
    }

    // Set reactive data to the most recent student that has arrived/left.
    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    // sorts the student array by name alphabetically
    const sortedStudents = computed( () => {
        return studentList.value.toSorted((student1, student2) => {
            return student1.name.localeCompare(student2.name)
        })
    })

    const studentCount = computed( () => { return studentList.value.length })

    return {
        // Reactive Data
        studentList,
        mostRecentStudent,

        // Functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // Computed
        sortedStudents,
        studentCount
    }
})