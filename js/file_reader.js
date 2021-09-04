// As with JSON, use the Fetch API & ES6
fetch('https://github.com/daniel2483/PythonProjects/blob/master/Examples/calculate_age.py')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log("This is a test");
  });


