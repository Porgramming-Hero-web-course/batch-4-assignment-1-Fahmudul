type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  let area: number = 0;
  if (shape.shape === "circle") {
    area = Math.PI * shape.radius ** 2;
  } else if (shape.shape === "rectangle") {
    area = shape.height * shape.width;
  }
  return parseFloat(area.toFixed(2));
};

