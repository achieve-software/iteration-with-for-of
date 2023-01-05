//* =========================================
//*            FOR-OF LOOP
//* =========================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
];

const findStudentForOf = (name) => {
  let counter = 0;

  for (let student of students) {
    //* Ternary
    // student === name.toLowerCase() ? counter++ : null

    //* Short-Circuit yontemi
    // ? kosul false uretirse counter'ı eksilt
    //! student === name.toLowerCase() || counter--

    // ? kosul true uretirse counter'ı arttir
    student === name.toLowerCase() && counter++;
  }

  return !counter
    ? `${name} can not be found`
    : `${name} found ${counter} times`;
};

console.log(findStudentForOf("MehMet"));
console.log(findStudentForOf("ismet"));
console.log(findStudentForOf("feyza"));
