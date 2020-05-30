
// changing the text for work descriptions according to which button is active

// Object creations
var workColumn = document.getElementById("work_column");
var hhe = document.getElementById("work_hhe");
var b3d = document.getElementById("work_b3d");

// Auto focus the Hill House Equine Ltd. button when page loads for less confusion
window.onload = function() 
{
    document.getElementById("hhe_button").focus();
}

// Function to change text to Hill House Equine Ltd. text
function change_work_to_hhe() 
{   
    b3d.style.display = 'none';
    hhe.style.display = 'block';
}

// Function to change text to Beyon3D text
function change_work_to_b3d()
{   
    hhe.style.display = 'none';
    b3d.style.display = 'block';
}

// Event listeners for buttons in work navigation column
document.getElementById("hhe_button").addEventListener("click", change_work_to_hhe);
document.getElementById("b3d_button").addEventListener("click", change_work_to_b3d);

