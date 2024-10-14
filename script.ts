// Listing element
document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const uploadingElement = document.getElementById('uploading') as HTMLInputElement;

    // Type assertions for input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    // Check if all elements exist
    if (uploadingElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const uploadimg = uploadingElement.value;

        // Picture elements
        const uploadImageFile = uploadingElement.files?.[0];
        if (!uploadImageFile) {
            console.error('No file uploaded');
            return;
        }

        const reader = new FileReader();
        const uploadImageURL = URL.createObjectURL(uploadImageFile);

        const experience = experienceElement.value;
        const skills = skillsElement.value;

        reader.onload = () => {
            const imageDataURL = reader.result as string;

            // Create resume output
            const resumeOutput = `
                <h2><b>Editable Resume</b></h2>
                <img src="${imageDataURL}" alt="Uploaded Image" />
                <p><b><strong>Name:</b></strong><span contenteditable="true">${name}</span></p>
                <p><b><strong>Email:</b></strong><span contenteditable="true">${email}</span></p>
                <p><b><strong>Phone:</b></strong><span contenteditable="true">${phone}</span></p>
                <h3>Education</h3>
                <p contenteditable="true">${education}</p>
                <h3>Experience</h3>
                <p contenteditable="true">${experience}</p>
                <h3>Skills</h3>
                <p contenteditable="true">${skills}</p>
            `;

            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            } else {
                console.error('The resume output element is missing');
            }
        };

        reader.readAsDataURL(uploadImageFile);
    } else {
        console.error('One or more form elements are missing');
    }
});
