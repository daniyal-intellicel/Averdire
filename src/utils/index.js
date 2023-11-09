import Auxiliary from "./Auxiliary";
export { Spin } from "./Spin";
export { Auxiliary };

export const createRenderingData = (toRenderData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      createRenderingData(
        toRenderData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else if (data instanceof Date) {
    const value = data.toString();

    toRenderData.push({ key: parentKey, value });
  } else {
    const value = data === null ? "" : data;

    toRenderData.push({ key: parentKey, value });
  }
};
