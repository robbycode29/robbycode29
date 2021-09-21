$w.onReady(function () {
	
	$w("#productPage1").getProduct().then((product) => {

    let productName = product.name;
	$w('#text56').text = productName;
	if (productName === "Comoda"){
		$w("#html1").src = "https://www.vectary.com/viewer/v1/?model=53904a82-97f1-4b8e-be07-7ccf3e8d3131&env=studio3";

		$w('#button13').style.backgroundColor = "#C8A06C";
		$w('#button13').label = "Crem";
		$w('#button13').onClick((event) => {
			$w('#html1').src = "https://www.vectary.com/viewer/v1/?model=53904a82-97f1-4b8e-be07-7ccf3e8d3131&env=studio3";
			} );
			
	
		$w('#button14').style.backgroundColor = "#A59888";
		$w('#button14').label = "Zorba";
		$w('#button14').onClick((event) => {
			$w('#html1').src = "https://www.vectary.com/viewer/v1/?model=474b4477-4948-40cf-a1a3-73635a690019&env=studio3";
			} );
	}
	else if (productName === "Scaun lemn alb"){
		$w("#html1").src = "https://www.vectary.com/viewer/v1/?model=62ab0bd3-2620-456e-aa9b-c15c5fb2317f&allowScaling=1";

		$w('#button13').hide();
		$w('#button14').hide();
		$w('#text57').hide();

	} 
	else if (productName === "Coltar Tobias"){
		$w("#html1").src = "https://www.vectary.com/viewer/v1/?model=1bd28133-9c62-4f48-b39a-185fb9e8258a&env=studio3";

		$w('#button13').hide();
		$w('#button14').hide();
		$w('#text57').hide();

	} 
  })

  .catch((error) => {

    console.error(error);

  });
	
	

	
	
	
	
});