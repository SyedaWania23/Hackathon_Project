// // //listing element
// // document.getElementById("resumeForm")?.addEventListener("submit",function(event){
// //     event.preventDefault();
var _a;
// //     //type assertion
// //     const profilePictureInput=document.getElementById("profilePicture") as HTMLInputElement
// //     const nameElement=document.getElementById("name")as HTMLInputElement;
// //     const emailElement=document.getElementById("email")as HTMLInputElement;
// //     const phoneElement=document.getElementById("phone")as HTMLInputElement;
// //     const educationElement=document.getElementById("education")as HTMLInputElement;
// //     const experienceElement=document.getElementById("experience")as HTMLInputElement;
// //     const skillsElement=document.getElementById("skills")as HTMLInputElement;
// //     if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
// //         const name=nameElement.value;
// //         const email=emailElement.value;
// //         const phone=phoneElement.value;
// //         const education=educationElement.value;
// //         const experience=experienceElement.value;
// //         const skills=skillsElement.value;
// //     //PICTURE ELEMENTS
// //     const profilePictureFile=profilePictureInput.files?.[0]
// // const profilePictureURL= profilePictureFile? URL.createObjectURL(profilePictureFile):'';
// //     // Create Resume Output
// //     const resumeOutput=`
// //     <h2>Resume</h2>
// //     ${profilePictureURL? `<Img src ="${profilePictureURL} alt="profilePicture" class="profilePicture">`:""}
// //     <p><strong>Name:</strong> <span id-"edit-name" class-"editable">${name}</span></p>
// //     <p><strong>Email:</strong><span id-"edit-name" class-"editable"> ${email}</span></p>
// //     <p><strong>Phone Number:</strong><span id-"edit-name" class-"editable"> ${phone}</span></p>
// //     <h3>Education</h3>
// //     <p id-"edit-name" class-"editable">>${education}</p>
// //     <h3>Experience</h3>
// //     <p id-"edit-experience" class-"editable">>${experience}</p>
// //     <h3>Skills</h3>
// //     <p id-"edit-skills" class-"editable">>${skills}</p>
// //      `;
// //      //display resume output
// //      const resumeOutputElement = document.getElementById("resumeOutput")
// // if(resumeOutputElement){
// //     resumeOutputElement.innerHTML=resumeOutput
// // }makeEditable()
// //     } else{
// //         console.error("one or more output elements are missing");
// //     }
// // })
// // function makeEditable(){
// //     const editableElements=document.querySelectorAll(".editable");
// //     editableElements.forEach(Element=>{
// //         Element.addEventListener("click",function(){
// //             const currentElement=Element as HTMLElement;
// //             const currentValue=currentElement.textContent||"";
// // // replace content
// // if(currentElement.tagName==="p"||currentElement.tagName==="SPAN"){
// //     const input=document.createElement("input")
// //     input.type="text"
// //     input.value=currentValue
// //     input.classList.add("editing-input")
// //     input.addEventListener("blur",function(){
// //         currentElement.textContent=input.value;
// //         currentElement.style.display="inline"
// //         input.remove()
// //     })
// //     currentElement.style.display="none"
// //     currentElement.parentNode?.insertBefore(input,currentElement)
// //     input.focus()
// // }
// //         })
// //     })
// // }
// //listing element
// document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
//     event.preventDefault();
//     //type assertion
//     const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement;
//     const educationElement = document.getElementById("education") as HTMLInputElement;
//     const experienceElement = document.getElementById("experience") as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLInputElement;
//     if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         //PICTURE ELEMENTS
//         const profilePictureFile = profilePictureInput.files?.[0];
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
//         // Create Resume Output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profilePicture" class="profilePicture">` : ""}
//             <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//             <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//             <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
//             <h3>Education</h3>
//             <p id="edit-education" class="editable">${education}</p>
//             <h3>Experience</h3>
//             <p id="edit-experience" class="editable">${experience}</p>
//             <h3>Skills</h3>
//             <p id="edit-skills" class="editable">${skills}</p>
//         `;
//         // Display resume output
//         const resumeOutputElement = document.getElementById("resumeOutput");
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             makeEditable();  // Make the generated elements editable
//         }
//     } else {
//         console.error("One or more output elements are missing");
//     }
// });
// function makeEditable() {
//     const editableElements = document.querySelectorAll(".editable");
//     editableElements.forEach((element) => {
//         element.addEventListener("click", function () {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             // Replace content with an input element
//             if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
//                 const input = document.createElement("input");
//                 input.type = "text";
//                 input.value = currentValue;
//                 input.classList.add("editing-input");
//                 input.addEventListener("blur", function () {
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = "inline";
//                     input.remove();
//                 });
//                 currentElement.style.display = "none";
//                 currentElement.parentNode?.insertBefore(input, currentElement);
//                 input.focus();
//             }
//         });
//     });
// }
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
    // Type assertions
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Ensure all input elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create Resume Output (without profile picture)
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        // Display resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable(); // Make the generated elements editable
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content with an input element
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
