import axiosInstance from "../../axios/axiosInstance";

export const fetchSubCategories = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/categories/${categoryId}/subcategories/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
};

// fetch all popular services(subcategories)
export const fetchAllSubCategories = async() => {
  try {
    const response = await axiosInstance.get("/dashboard/popularservices/all/");
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
}


// fetch complaints
export const fetchComplaints = async () => {
  try {
    const response = await axiosInstance.get("/complaint/");
    return response.data;
  } catch (error) {
    console.error("Error fetching complaints:", error);
    throw error;
  }
};


// {
//     "subcategory_title": "cake delivery",
//     "reviews_count": 0,
//     "rating": null,
//     "amount": null,
//     "image_url": null
// }

// {
//     "id": 1,
//     "title": "cake delivery",
//     "description": "vvvbvbvbv",
//     "image": null
// }