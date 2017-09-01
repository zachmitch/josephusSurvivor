
function josephusSurvivor(n,k){

	//Find the starting delete position
  	let deletePosition = k > n ? (k % n) - 1 : k - 1;
  
  	//If n is a multiple of k, set start delete position to final element
  	if (deletePosition == -1) {deletePosition = n - 1};

  	//Create an array from 1 - n
  	let array = new Array(n);
  	for (let i = 0; i < array.length; i++) {
    		array[i] = i + 1;
  	}

  	//Return array after splicing delete position, moving delete position,
  	//and then adjusting for changing size of array
  	while (array.length > 1) { 
    		array.splice(deletePosition,1);
    		deletePosition += k - 1;
		while (deletePosition >= array.length) { deletePosition -= array.length }; 
  	};
  
  	//Return survivor
  	return array[0];
}
