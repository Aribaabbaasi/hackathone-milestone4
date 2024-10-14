var _a;
// Listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var uploadingElement = document.getElementById('uploading');
    // Type assertions for input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all elements exist
    if (uploadingElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var uploadimg = uploadingElement.value;
        // Picture elements
        var uploadImageFile = (_a = uploadingElement.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!uploadImageFile) {
            console.error('No file uploaded');
            return;
        }
        var reader_1 = new FileReader();
        var uploadImageURL = URL.createObjectURL(uploadImageFile);
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        reader_1.onload = function () {
            var imageDataURL = reader_1.result;
            // Create resume output
            var resumeOutput = "\n                <h2><b>Editable Resume</b></h2>\n                <img src=\"".concat(imageDataURL, "\" alt=\"Uploaded Image\" />\n                <p><b><strong>Name:</b></strong><span contenteditable=\"true\">").concat(name_1, "</span></p>\n                <p><b><strong>Email:</b></strong><span contenteditable=\"true\">").concat(email_1, "</span></p>\n                <p><b><strong>Phone:</b></strong><span contenteditable=\"true\">").concat(phone_1, "</span></p>\n                <h3>Education</h3>\n                <p contenteditable=\"true\">").concat(education_1, "</p>\n                <h3>Experience</h3>\n                <p contenteditable=\"true\">").concat(experience_1, "</p>\n                <h3>Skills</h3>\n                <p contenteditable=\"true\">").concat(skills_1, "</p>\n            ");
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
            else {
                console.error('The resume output element is missing');
            }
        };
        reader_1.readAsDataURL(uploadImageFile);
    }
    else {
        console.error('One or more form elements are missing');
    }
});
