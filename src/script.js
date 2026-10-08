function validateForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let qualification = document.getElementById("qualification").value;
    let technicalSkill = document.getElementById("technicalSkill").value;
    let softSkill = document.getElementById("softSkill").value;
    let experience = document.getElementById("experience").value;
    let position = document.getElementById("position").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (qualification === "") {
        alert("Please select your qualification.");
        return false;
    }

    if (technicalSkill === "") {
        alert("Please select your technical skill.");
        return false;
    }

    if (softSkill === "") {
        alert("Please select your soft skill.");
        return false;
    }

    if (experience === "") {
        alert("Please select your experience.");
        return false;
    }

    if (position === "") {
        alert("Please select the position.");
        return false;
    }

    alert("Job application submitted successfully.");
    return true;
}