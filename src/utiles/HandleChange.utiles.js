// handleChange function
export const handleChange = (event, setGroupInfo, setError) => {
  const { name, value, files } = event.target;

  const newValue = name == "groupImage" ? files : value;
  setGroupInfo((prev) => ({
    ...prev,
    [name]: newValue,
  }));

  /**
   *
   * todo : remove the error property
   *
   * */

  setError((prevError) => {
    const updatedError = { ...prevError };

    if (newValue !== "") {
      // delete updatedError[`${name}Error`];
      updatedError[`${name}Error`] = "";
    }
    return updatedError;
  });
};
