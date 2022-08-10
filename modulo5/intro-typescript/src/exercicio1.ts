function checaTriangulo(a: number, b: number, c: number) :string{
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

console.log(checaTriangulo(0, 1, 2))
console.log(checaTriangulo(0, 0, 0))
console.log(checaTriangulo(0, 0, 1))