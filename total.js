document.getElementById("calculateButton").addEventListener("click", function() {
    // Get values from the input fields
    const english = parseInt(document.getElementById("english").value) || 0;
    const hindi = parseInt(document.getElementById("hindi").value) || 0;
    const maths = parseInt(document.getElementById("maths").value) || 0;
    const science = parseInt(document.getElementById("science").value) || 0;
    const socialScience = parseInt(document.getElementById("socialScience").value) || 0;
    const sanskrit = parseInt(document.getElementById("sanskrit").value) || 0;


    // Define maximum marks per subject (e.g., 100)
    const maxMarksPerSubject = 100;
    const totalSubjects = 6; // Number of subjects
    const maxTotalMarks = maxMarksPerSubject * totalSubjects; // Total possible marks


    // Calculate the total
    const total = english + hindi + maths + science + socialScience + sanskrit;

    //percentage
    const percentage = (total / maxTotalMarks) * 100;

    // Display the total
    document.getElementById("result").innerText = `Total Marks: ${total}`;
    document.getElementById("percentage").innerText = `Percentage: ${percentage.toFixed(2)}%`
});
