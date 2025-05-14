const cloudinaryApi = import.meta.env.VITE_CLOUDINARY_API;
console.log(cloudinaryApi);
export const cloudinaryUploadImage = async (formdata) => {
  try {
    const res = await fetch(cloudinaryApi, {
      method: "POST",
      body: formdata,
    });
    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    throw new Error(`Cloudinary file upload Error ${error}`);
  }
};
