// Helper function to construct asset paths with the base URL
export const getAssetPath = (assetPath) => {
  return import.meta.env.BASE_URL + assetPath.replace(/^\//, '');
};
