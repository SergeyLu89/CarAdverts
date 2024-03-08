export const formatingMile = mile => {
  let formatingMile = String(mile);
  if (formatingMile.length > 3)
    formatingMile = formatingMile.slice(0, 1) + ',' + formatingMile.slice(1);
  return formatingMile;
};
