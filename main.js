array_of_students = [];
array_of_students_name = [];

function submit(){
    for (var i = 1;i<=4;i++){
        var student = document.getElementById("name_of_the_student_"+i).value;
        console.log(student);
        array_of_students.push(student);
    }    
    console.log(array_of_students);
    for (var j = 0;j<array_of_students.length;j++){
        array_of_students_name.push("<h4>Name -"+array_of_students[j]+"<h4>");       
    }
    console.log(array_of_students_name);
    document.getElementById("display_name_with_commas").innerHTML = array_of_students_name;
    array_of_students_without_commas = array_of_students_name.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = array_of_students_without_commas;
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("submit_button").style.display = "none";
}

function sorting(){
    array_of_students_name.sort();
    console.log(array_of_students_name);
    array_of_students_without_commas = array_of_students_name.join(" ");
    console.log(array_of_students_without_commas);
    document.getElementById("display_name_without_commas").innerHTML = array_of_students_without_commas;
    
}