export const validationgroup = (groupInfo = {}, setError) => {
    if (!groupInfo || !setError) {
      throw new Error(`Missing ${groupInfo} and also missing ${setError}`);
  }
    let eror = {};

  for (let field in groupInfo) {
    if (groupInfo[field] == "") {
      eror[`${field}Error`] = `${field} Missing`;
    }
  }

  setError(eror);
  return Object.keys(eror)?.length === 0;
};
