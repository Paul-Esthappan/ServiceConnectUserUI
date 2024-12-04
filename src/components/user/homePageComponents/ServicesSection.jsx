import React, { useEffect, useState } from "react";
import ServiceCard from "../../reUsableComponents/homeReusuableComponents/ServiceCardComponent";
import { useSelector } from "react-redux";
import {
	fetchAllSubCategories,
	fetchSubCategories,
} from "../../../services/subcategories/subcategoriesApi";

const ServicesSection = () => {
	const { categories } = useSelector((state) => state.category);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [serviceData, setServiceData] = useState([]);

	console.log(serviceData);

	// call api to fetch services data with category id
	const handleFecthData = async () => {
		try {
			if (selectedCategory === "All") {
				const response = await fetchAllSubCategories();
				setServiceData(response);
			} else {
				const selectedCategoryId = categories.filter(
					(c) => c.title === selectedCategory
				);

				const id = selectedCategoryId[0].id;
				const response = await fetchSubCategories(id);
				setServiceData(response);
			}
			
		} catch (error) {}
	};

	useEffect(() => {
		handleFecthData();
	}, [selectedCategory]);

	// Get unique categories from servicesData
	const uniqueCategories = [
		"All",
		...new Set(categories.map((service) => service.title)),
	];

	// Filter services based on the selected category
	// const filteredServices =
	// 	selectedCategory === "All"
	// 		? servicesData
	// 		: servicesData.filter(
	// 				(service) => service.category === selectedCategory
	// 		  );

	return (
		<div className="py-6">
			{/* Header Section */}
			<div className="flex items-center justify-between">
				<h2 className="mb-4 text-2xl font-bold">Popular Services</h2>
				<h3 className="mb-4 text-xl font-bold cursor-pointer">
					SEE ALL
				</h3>
			</div>

			{/* Category Filters */}
			<div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
				{uniqueCategories.map((category, i) => (
					<button
						key={i}
						className={`px-4 py-1 m-2 rounded-full text-sm font-semibold ${
							selectedCategory === category
								? "bg-gray-800 text-white"
								: "bg-[#736a68] text-white"
						}`}
						onClick={() => setSelectedCategory(category)}>
						{category}
					</button>
				))}
			</div>

			{/* Services Section */}
			<div className="flex gap-6 overflow-x-auto md:overflow-x-visible md:flex-wrap scroll-smooth no-scrollbar">
				{serviceData.slice(0, 8).map((service) => (
					<ServiceCard
						key={service.id}
						category={service.category}
						serviceTitle={service.title}
						price={service.price}
						rating={service.rating}
						reviews={service.reviews}
						imgUrl={service.image}
						className="w-[85vw] md:w-[30%] lg:w-[22%] h-[220px] flex-shrink-0 md:flex-shrink"
					/>
				))}
			</div>
		</div>
	);
};

export default ServicesSection;
