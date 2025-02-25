//while

let i = 0;
while (i < 3) { // показується 0, далі 1, потім 2
  console.log( i );
  i++;
}


//do..while

let q = 0;
do {
  console.log( q );
  q++;
} while (q < 3);

//for

for (let k = 0; k < 3; k++) { // показується 0, далі 1, потім 2
    console.log(k);
  }


let z = 0  
for (; z < 5; z++) { // немає необхідності в "початку"
    console.log( z ); // 0, 1, 2
  }


//break

let br = 0  
for (; br < 5; br++) { // немає необхідності в "початку"
    console.log( br ); 
    if (br==2) break; // 0, 1, 2
  }




