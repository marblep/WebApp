var filesystem
window.onload = init;

function init()
{
	
}

function handlefiles(files)
{
	var reader = new FileReader();  // Create a FileReader object
	reader.readAsText(files[0]);           // Read the file
	reader.onload = function() 
	{    // Define an event handler
		var text = reader.result;   // This is the file contents
		var out = document.getElementById("output");    // Find output element
		out.innerHTML = text;                             // Clear it
		console.log(text);
		//out.appendChild(document.createTextNode(text)); // Display file contents
	}
	reader.onerror = function(e) 
	{  // If anything goes wrong
		console.log("Error", e);    // Just log it
	};
}