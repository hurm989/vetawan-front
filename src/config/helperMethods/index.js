export const convertToSlug = (text) => {
  // Convert to lowercase
  let lowercaseText = text.toLowerCase();

  // Replace spaces with hyphens
  let slugText = lowercaseText.replace(/\s+/g, "-");

  return slugText;
};
