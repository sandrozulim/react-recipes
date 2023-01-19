export const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Something went wrong!");
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
