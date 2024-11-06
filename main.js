// Assuming you have hourly rent prices for laptops
const hourlyRentPrice = {
    "Dell XPS 13": 5, // $5 per hour
    "MacBook Air": 4, // $4 per hour
  };
  
  // Function triggered by clicking the "Rent (Hourly)" button
  function rentLaptop(laptopName) {
    // Retrieve the hourly rental rate for the selected laptop
    const rate = hourlyRentPrice[laptopName];
  
    // Prompt the user for rental duration
    let hours = prompt(`How many hours would you like to rent the ${laptopName} for?`);
    
    // Check if the user entered a valid number
    if (hours && !isNaN(hours) && hours > 0) {
      hours = parseInt(hours);
      const totalCost = rate * hours; // Calculate total cost
      alert(`You have rented the ${laptopName} for ${hours} hours. The total cost is $${totalCost}.`);
  
      // Optionally, store the rental info in the cart or proceed with further steps
      addToCart(laptopName, totalCost); // Adding rental item to cart (can be adjusted for rentals)
    } else {
      alert("Please enter a valid number of hours.");
    }
  }
  