//All car objects in cars with licensePlate property
export function solution(cars) {
  return cars.filter((car) => car.licensePlate);
}
