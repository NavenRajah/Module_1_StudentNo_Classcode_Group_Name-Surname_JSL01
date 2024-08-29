function validatePetAdoptionDetail(input) {
    // Regular expression to check the syntax: starts with "pet_" followed by letters and numbers
    const regex = /^pet_[a-zA-Z0-9]+$/;

    // Test the input against the regex
    if (regex.test(input)) {
        return "Valid Syntax";
    } else {
        return "Invalid Syntax";
    }
}

function validateInput() {
    // Get the input value from the form
    const petDetail = document.getElementById("petDetail").value;
    // Validate the input
    const result = validatePetAdoptionDetail(petDetail);
    // Display the result
    document.getElementById("result").textContent = result;
}
