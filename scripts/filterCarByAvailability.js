function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [...cars];

  // Tulis code-mu disini
  const filter = [];
  result.map((res) => {
    if (res.available === true) filter.push(res);
  });
  console.log(filter);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return filter;
}
