const bookings = [
  {
    "id": 1,
    "provider_id": "123",
    "title": "Plumbing Repair",
    "category": "Plumbing",
    "providerName": "Alex",
    "description": "Fix leaking kitchen tap and replace pipe under the sink.",
    "availabilityFrom": "Sep 30, 2024",
    "availabilityTo": "2024-09-25T10:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "10:00 AM",
    "additional_requirements": "Please bring a new pipe and sealant.",
    "amount": "150",
    "payment": "Paid",
    "job": "active",
    "complaint": "",
    "status": "accepted"
  },
  {
    "id": 2,
    "provider_id": "456",
    "title": "Electrical Wiring Setup",
    "category": "Electrical",
    "providerName": "Stev",
    "description": "Install new electrical wiring for a three-bedroom apartment.",
    "availabilityFrom": "Sep 30, 2024",
    "availabilityTo": "2024-09-26T16:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "10:00 AM",
    "additional_requirements": "Ensure wiring meets safety standards.",
    "amount": "350",
    "payment": "Pending",
    "job": "",
    "complaint": "",
    "status": "pending"
  },
  {
    "id": 3,
    "provider_id": "789",
    "title": "Carpet Cleaning",
    "category": "Cleaning",
    "providerName": "Carlo",
    "description": "Deep cleaning for 2 carpets and 1 rug.",
    "availabilityFrom": "Sep 30, 2024",
    "availabilityTo": "2024-09-27T12:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "10:00 AM",
    "additional_requirements": "Use eco-friendly cleaning products.",
    "amount": "75",
    "payment": "",
    "job": "",
    "complaint": "",
    "status": "rejected"
  },
  {
    "id": 4,
    "provider_id": "012",
    "title": "Furniture Assembly",
    "category": "Assembly",
    "providerName": "Pual",
    "description": "Assemble a new IKEA dining table and chairs.",
    "availabilityFrom": "Sep 30, 2024",
    "availabilityTo": "2024-09-28T15:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "10:00 AM",
    "additional_requirements": "Bring necessary tools for assembly.",
    "amount": "100",
    "payment": "Pending",
    "job": "completed",
    "complaint": "resolved",
    "status": "accepted"
  },
  {
    "id": 5,
    "provider_id": "345",
    "title": "Window Cleaning",
    "category": "Cleaning",
    "providerName": "Jane",
    "description": "Clean all windows of a 2-story house.",
    "availabilityFrom": "Sep 30, 2024",
    "availabilityTo": "2024-09-29T11:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "11:00 AM",
    "additional_requirements": "Use streak-free cleaning products.",
    "amount": "120",
    "payment": "Paid",
    "job": "active",
    "complaint": "",
    "status": "accepted"
  },
  {
    "id": 6,
    "provider_id": "678",
    "title": "Garden Maintenance",
    "category": "Gardening",
    "providerName": "Mike",
    "description": "Mow the lawn and trim the hedges.",
    "availabilityFrom": "Sep 30, 2024",
    "availabilityTo": "2024-09-30T14:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "12:00 PM",
    "additional_requirements": "Dispose of garden waste after the service.",
    "amount": "80",
    "payment": "Pending",
    "job": "",
    "complaint": "",
    "status": "pending"
  },
  {
    "id": 7,
    "provider_id": "901",
    "title": "House Painting",
    "category": "Painting",
    "providerName": "Lucas",
    "description": "Paint the interior walls of a 3-bedroom house.",
    "availabilityFrom": "Oct 1, 2024",
    "availabilityTo": "2024-10-01T16:00:00",
    "timeFrom": "10:00 AM",
    "timeTo": "04:00 PM",
    "additional_requirements": "Use low-VOC paint.",
    "amount": "500",
    "payment": "Paid",
    "job": "completed",
    "complaint": "resolved",
    "status": "accepted"
  },
  {
    "id": 8,
    "provider_id": "234",
    "title": "Roof Inspection",
    "category": "Inspection",
    "providerName": "Chris",
    "description": "Inspect the roof for leaks and damage.",
    "availabilityFrom": "Oct 1, 2024",
    "availabilityTo": "2024-10-02T09:00:00",
    "timeFrom": "08:00 AM",
    "timeTo": "10:00 AM",
    "additional_requirements": "Bring safety equipment for roof access.",
    "amount": "200",
    "payment": "Pending",
    "job": "",
    "complaint": "",
    "status": "pending"
  },
  {
    "id": 9,
    "provider_id": "567",
    "title": "Air Conditioner Repair",
    "category": "Repair",
    "providerName": "Tina",
    "description": "Fix the cooling issue in the living room air conditioner.",
    "availabilityFrom": "Oct 2, 2024",
    "availabilityTo": "2024-10-02T14:00:00",
    "timeFrom": "10:00 AM",
    "timeTo": "12:00 PM",
    "additional_requirements": "Check the filter and refrigerant levels.",
    "amount": "250",
    "payment": "Paid",
    "job": "active",
    "complaint": "requested",
    "status": "accepted"
  },
  {
    "id": 10,
    "provider_id": "890",
    "title": "Gutter Cleaning",
    "category": "Cleaning",
    "providerName": "Raj",
    "description": "Clean the gutters and downspouts of a 2-story house.",
    "availabilityFrom": "Oct 3, 2024",
    "availabilityTo": "2024-10-03T11:00:00",
    "timeFrom": "08:00 AM",
    "timeTo": "11:00 AM",
    "additional_requirements": "Remove all debris from the property.",
    "amount": "180",
    "payment": "Pending",
    "job": "",
    "complaint": "",
    "status": "pending"
  },
  {
    "id": 11,
    "provider_id": "111",
    "title": "Carpet Installation",
    "category": "Installation",
    "providerName": "Eve",
    "description": "Install new carpets in 3 bedrooms and the living room.",
    "availabilityFrom": "Oct 4, 2024",
    "availabilityTo": "2024-10-04T13:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "01:00 PM",
    "additional_requirements": "Bring carpet adhesives and underlay.",
    "amount": "600",
    "payment": "Paid",
    "job": "completed",
    "complaint": "",
    "status": "accepted"
  },
  {
    "id": 12,
    "provider_id": "222",
    "title": "TV Mounting",
    "category": "Mounting",
    "providerName": "George",
    "description": "Mount a 65-inch TV on the living room wall.",
    "availabilityFrom": "Oct 5, 2024",
    "availabilityTo": "2024-10-05T14:00:00",
    "timeFrom": "10:00 AM",
    "timeTo": "12:00 PM",
    "additional_requirements": "Ensure the wall can hold the TV weight.",
    "amount": "150",
    "payment": "",
    "job": "",
    "status": "rejected"
  },
  {
    "id": 13,
    "provider_id": "333",
    "title": "Deck Staining",
    "category": "Painting",
    "providerName": "Linda",
    "description": "Stain the wooden deck in the backyard.",
    "availabilityFrom": "Oct 6, 2024",
    "availabilityTo": "2024-10-06T12:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "01:00 PM",
    "additional_requirements": "Use weather-resistant wood stain.",
    "amount": "200",
    "payment": "Paid",
    "job": "completed",
    "complaint": "resolved",
    "status": "accepted"
  },
  {
    "id": 14,
    "provider_id": "444",
    "title": "Pest Control",
    "category": "Pest Control",
    "providerName": "Sam",
    "description": "Perform pest control for rodents and insects.",
    "availabilityFrom": "Oct 7, 2024",
    "availabilityTo": "2024-10-07T16:00:00",
    "timeFrom": "11:00 AM",
    "timeTo": "02:00 PM",
    "additional_requirements": "Use non-toxic treatments.",
    "amount": "250",
    "payment": "Pending",
    "job": "active",
    "complaint": "requested",
    "status": "accepted"
  },
  {
    "id": 15,
    "provider_id": "555",
    "title": "Move-Out Cleaning",
    "category": "Cleaning",
    "providerName": "Karen",
    "description": "Perform a deep move-out cleaning for a 2-bedroom apartment.",
    "availabilityFrom": "Oct 8, 2024",
    "availabilityTo": "2024-10-08T18:00:00",
    "timeFrom": "09:00 AM",
    "timeTo": "06:00 PM",
    "additional_requirements": "Ensure the apartment is left spotless for the new tenants.",
    "amount": "300",
    "payment": "Paid",
    "job": "completed",
    "complaint": "resolved",
    "status": "accepted"
  }
];

export default bookings;

