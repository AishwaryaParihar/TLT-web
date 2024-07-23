import React, { useState } from "react";
import Registration from "./Registration";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../../Common/SummaryAPI";
import { toast } from "react-toastify";

const EmpowermentBatch = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [data, setdata] = useState({
    photo: "",
    name: "",
    birthplace: "",
    birthdate: "",
    address: "",
    pincode: "",
    state: "",
    qualification: "",
    university: "",
    pursuingLLb: "",
    yearOfPassing: "",
    email: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    pinCodeState: "",
    pinCodeCity: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5050/tlt/registrationForm",
        {
          method: SummaryApi.signUp.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        navigate("/login");
      }
      if (result.error) {
        toast.error(result.message);
      }

      if (response.ok) {
        setMessage("Registered successful!");
      } else {
        setMessage(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred during registration!");
    }
  };

  const states = [
    { id: 1, name: "Andaman and Nicobar Islands" },
    { id: 2, name: "Andhra Pradesh" },
    { id: 3, name: "Arunachal Pradesh" },
    { id: 4, name: "Assam" },
    { id: 5, name: "Bihar" },
    { id: 6, name: "Chandigarh" },
    { id: 7, name: "Chhattisgarh" },
    { id: 8, name: "Dadra and Nagar Haveli" },
    { id: 9, name: "Daman and Diu" },
    { id: 10, name: "Delhi" },
    { id: 11, name: "Goa" },
    { id: 12, name: "Gujarat" },
    { id: 13, name: "Haryana" },
    { id: 14, name: "Himachal Pradesh" },
    { id: 15, name: "Jammu and Kashmir" },
    { id: 16, name: "Jharkhand" },
    { id: 17, name: "Karnataka" },
    { id: 18, name: "Kenmore" },
    { id: 19, name: "Kerala" },
    { id: 20, name: "Lakshadweep" },
    { id: 21, name: "Madhya Pradesh" },
    { id: 22, name: "Maharashtra" },
    { id: 23, name: "Manipur" },
    { id: 24, name: "Meghalaya" },
    { id: 25, name: "Mizoram" },
    { id: 26, name: "Nagaland" },
    { id: 27, name: "Odisha" },
    { id: 28, name: "Paschim Medinipur " },
    { id: 29, name: "Pondicherry" },
    { id: 30, name: "Punjab" },
    { id: 31, name: "Rajasthan" },
    { id: 32, name: "Sikkim" },
    { id: 33, name: "Tamil Nadu" },
    { id: 34, name: "Telangana" },
    { id: 35, name: "Tripura" },
    { id: 36, name: "Uttar Pradesh" },
    { id: 37, name: "Uttarakhand" },
    { id: 38, name: "Vaisali" },
    { id: 39, name: "West Bengal" },
  ];

  const cities = {
    //Andaman and Nicobar Islands
    1: ["Bombuflat", "Garacharma", "Port Blair", "Rangat"],
    //'Andhra Pradesh'
    2: [
      "Adoni",
      "Amalapuram",
      "Anantapur",
      "Bhimavaram",
      "Chittoor",
      " Chirala",
      "Dharmavaram",
      "Eluru",
      "Guntur",
      "Gudivada",
      "Hindupur",
      "Kakinada",
      "Kavali",
      "Kurnool",
      "Machilipatnam",
      "Machilipatnam",
      "Mangalagiri",
      " Markapur",
      " Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "   Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palasa",
      "Piduguralla",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Pulivendula",
      "Punganur",
      "Puttur",
      " Rajahmundry",
      " Rayachoti",
      "Samalkot",
      "Srikakulam",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tenali",
      "Tirupati",
      "Tuni",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
    ],
    //'Arunachal Pradesh'
    3: [
      "Aalo",
      "Anini",
      "Bomdila",
      "Changlang",
      "Daporijo",
      "Hawai",
      "Itanagar",
      "Khonsa",
      "Koloriang",
      "Longding",
      "Naharlagun",
      "Namsai",
      "Pasighat",
      "Roing",
      "Seppa",
      "Tawang",
      "Tezu",
      "Yingkiong",
      "Ziro",
    ],
    // 'Assam'
    4: [
      "Abhayapuri",
      "Amguri",
      "Badarpur",
      "Baihata",
      "Baksa",
      "Barpeta",
      "Barpeta",
      "Biswanath Chariali",
      "Bongaigaon",
      "Dhekiajuli",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Doom Dooma",
      "Gauripur",
      "Goalpara",
      "Golaghat",
      "Haflong",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Pathsala",
      "Rangia",
      "ibsagar",
      "Silchar",
      "Tinsukia",
      "Tezpur",
    ],
    //'Bihar'
    5: [
      "Arrah",
      "Aurangabad",
      "Bagaha",
      "Barauni",
      "Bettiah",
      "habua",
      "Bhagalpur",
      " Sharif",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Motihari",
      "Munger",
      "Muzaffarpur",
      "Nawada",
      "Patna",
      "Purnia",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
    ],
    //'Chandigarh'
    6: [
      "Behlana",
      "Burail",
      "Daria",
      "Dhanas",
      "Hallo Majra",
      "Kaimbwala",
      "Khuda Alisher",
      "Khuda Jassu",
      "Kishangarh",
      "Maloya",
      "Manimajra",
      "Mauli Jagran",
      "Raipur Kalan",
      "Raipur ",
      "Sarangpur",
    ],
    //'Chhattisgarh'
    7: [
      "Ambagarh Chowki",
      "Arang",
      "Bade Bacheli",
      "Balod",
      "Baloda",
      "Baloda Bazar",
      "Bhairamgarh",
      "Bhatapara",
      "Bhilai Charoda",
      "Bhilai Nagar",
      "Bilaspur",
      "Birgaon",
      "Chhuikhadan",
      "Dalli-Rajhara",
      "Dhamtari",
      "Dongargarh",
      "Durg",
      "Gariaband",
      "Jagdalpur",
      "Janjgir",
      "Jashpurnagar",
      "Kanker",
      "Kawardha",
      "Kondagaon",
      "Korba",
      "Mahasamund",
      "Mungeli",
      "Naila Janjgir",
      "Pandaria",
      "Pendra",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Ramanujganj",
      "Saraipali",
      "Simga",
      "Takhatpur",
    ],
    //'Dadra and Nagar Haveli'
    8: ["Amli", "Dadra", "Naroli", "Silvassa"],
    //'Daman and Diu'
    9: ["Daman", "Diu"],
    //delhi
    10: ["Delhi Cantonment", "New Delhi"],
    //goa
    11: [
      "Curchorem",
      "Madgaon",
      "Mapusa",
      "Marmagao",
      "Panaji",
      "Ponda",
      "Sancoale",
      "Valpoi",
    ],
    //gujarat
    12: [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Bilimora",
      "Borsad",
      "Botad",
      "Chhapra",
      "Dahod",
      "Deesa",
      "Dhoraji",
      "Gandhidham",
      "Gandhinagar",
      "Godhra",
      "Gondal",
      "Himatnagar",
      "Jamnagar",
      "Jetpur",
      "Junagadh",
      "Kadi",
      "Kalol",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Kundla",
      "Mahuva",
      "Mandvi",
      "Mangrol",
      "Mehmedabad",
      "Morbi",
      "Nadiad",
      "Navsari",
      "Palanpur",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Savarkundla",
      "Sidhpur",
      "Surat",
      "Surendranagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Veraval",
      "Visnagar",
    ],
    //haryana
    13: [
      "Ambala",
      "Ambala Cantt",
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jagadhri",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Thanesar",
      "Tohana",
      "Yamunanagar",
    ],
    //himachal pradesh
    14: [
      "Baddi",
      "Bilaspur",
      "Chamba",
      "Dalhousie",
      "Dharamshala",
      "Hamirpur",
      "Kangra",
      "Kullu",
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla",
      "Solan",
      "Una",
    ],
    //jammu kashmir
    15: [
      "Anantnag",
      "Baramulla",
      "Bari Brahmana",
      "Batote",
      "Doda",
      "Ganderbal",
      "Jammu",
      "Kathua",
      "Kishtwar",
      "Leh",
      "Poonch",
      "Pulwama",
      "Rajauri",
      "Samba",
      "Sopore",
      "Srinagar",
      "Udhampur",
    ],
    //jharkhand
    16: [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chirkunda",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Hazaribagh",
      "Jamshedpur",
      "Jharia",
      "Jhumri Tilaiya",
      "Jorapokhar",
      "Kanke",
      "Katras",
      "Khunti",
      "Lohardaga",
      "Madhupur",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh Cantonment",
      "Ranchi",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara",
    ],
    //karnataka
    17: [
      "Bagalkot",
      "Bengaluru",
      "Belagavi",
      "Bellary",
      "Bidar",
      "Chikkamagaluru",
      "Davanagere",
      "Dharwad",
      "Gadag",
      "Gulbarga",
      "Hassan",
      "Hospet",
      "Hubballi-Dharwad",
      "Kolar",
      "Mandya",
      "Mangaluru",
      "Mysuru",
      "Raichur",
      "Shivamogga",
      "Tumakuru",
      "Udupi",
      "Vijayapura",
      "Yadgir",
    ],
    //kenmore
    18: ["Kenmore"],
    //kerala
    19: [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kollam",
      "Koothuparamba",
      "Kottayam",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Manjeri",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palakkad",
      "Ponnani",
      "Punalur",
      "Shoranur",
      "Taliparamba",
      "Thalassery",
      "Thiruvananthapuram",
      "Thrissur",
      "Tirur",
      "Tiruvalla",
      "Vadakara",
    ],
    //lakshadweep
    20: [
      "Agatti",
      "Amini",
      "Andrott",
      "Bitra",
      "Chetlat",
      "Kadmat",
      "Kalpeni",
      "Kavaratti",
      "Kiltan",
      "Minicoy",
    ],
    //mp
    21: [
      "Alirajpur",
      "Ashoknagar",
      "Balaghat",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandsaur",
      "Morena",
      "Nagda",
      "Narsinghgarh",
      "Neemuch",
      "Pithampur",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shivpuri",
      "Singrauli",
      "Ujjain",
      "Vidisha",
    ],
    //maharastra
    22: [
      "Ahmednagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Baramati",
      "Bhandara",
      "Bhiwandi",
      "Bhusawal",
      "Chandrapur",
      "Dhule",
      "Gondia",
      "Ichalkaranji",
      "Jalgaon",
      "Jalna",
      "Kalyan-Dombivli",
      "Kolhapur",
      "Latur",
      "Malegaon",
      "Mumbai",
      "Nagpur",
      "Nanded",
      "Nashik",
      "Navi Mumbai",
      "Osmanabad",
      "Palghar",
      "Panvel",
      "Parbhani",
      "Pimpri-Chinchwad",
      "Pune",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Solapur",
      "Thane",
      "Ulhasnagar",
      "Vasai-Virar",
      "Wardha",
      "Yavatmal",
    ],
    // manipur
    23: [
      "Bishnupur",
      "Churachandpur",
      "Imphal",
      "Kakching",
      "Lilong",
      "Mayang Imphal",
      "Nambol",
      "Thoubal",
      "Ukhrul",
    ],
    24: [
      "Baghmara",
      "Cherrapunji",
      "Jowai",
      "Nongpoh",
      "Nongstoin",
      "Resubelpara",
      "Shillong",
      "Tura",
      "Williamnagar",
    ],
    25: [
      "Aizawl",
      "Champhai",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saiha",
      "Serchhip",
    ],
    26: ["Dimapur", "Kohima", "Mokokchung", "Tuensang", "Wokha", "Zunheboto"],
    27: [
      "Balangir",
      "Baleshwar (Balasore)",
      "Baripada",
      "Bhadrak",
      "Bhubaneswar",
      "Brahmapur",
      "Cuttack",
      "Dhenkanal",
      "Jeypore",
      "Konark",
      "Paradip",
      "Puri",
      "Rourkela",
      "Sambalpur",
    ],
    28: [
      "Belda",
      "Chandrakona",
      "Garbeta",
      "Ghatal",
      "Jhargram",
      "Kharagpur",
      "Medinipur",
      "Nayagram",
      "Salboni",
      "Sankrail",
      "Sutahata",
    ],
    29: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
    30: [
      "Amritsar",
      "Bathinda",
      "Faridkot",
      "Firozpur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Ludhiana",
      "Mohali",
      "Pathankot",
      "Patiala",
      "Sangrur",
    ],
    31: [
      "Ajmer",
      "Alwar",
      "Banswara",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Dholpur",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Kota",
      "Nagaur",
      "Pali",
      "Pratapgarh",
      "Rajsamand",
      "Sawai Madhopur",
      "Sikar",
      "Sirohi",
      "Sri Ganganagar",
      "Tonk",
      "Udaipur",
    ],
    32: ["Gangtok", "Gyalshing", "Mangan", "Namchi", "Singtam"],
    33: [
      "Chennai",
      "Coimbatore",
      "Erode",
      "Kanchipuram",
      "Madurai",
      "Salem",
      "Thanjavur",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tiruppur",
      "Vellore",
    ],
    34: [
      "Adilabad",
      "Hyderabad",
      "Jagtial",
      "Karimnagar",
      "Khammam",
      "Mahbubnagar",
      "Medak",
      "Miryalaguda",
      "Nalgonda",
      "Nizamabad",
      "Ramagundam",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Warangal",
    ],
    35: ["Agartala", "Belonia", "Dharmanagar", "Kailasahar", "Udaipur"],
    36: [
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bareilly",
      "Basti",
      "Bijnor",
      "Bulandshahr",
      "Etawah",
      "Faizabad",
      "Firozabad",
      "Ghaziabad",
      "Gorakhpur",
      "Hapur",
      "Jhansi",
      "Kanpur",
      "Lucknow",
      "Mathura",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Noida",
      "Prayagraj",
      "Rampur",
      "Saharanpur",
      "Sambhal",
      "Shahjahanpur",
      "Varanasi",
    ],
    37: [
      "Almora",
      "Dehradun",
      "Haridwar",
      "Haldwani",
      "Mussoorie",
      "Nainital",
      "Pauri",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Tehri",
      "Udham Singh Nagar",
      "Uttarkashi",
    ],
    38: ["Hajipur", "Lalganj", "Mahua", "Raghopur", "Vaishali"],
    39: [
      "Asansol",
      "Baharampur",
      "Bally",
      "Baranagar",
      "Barasat",
      "Barrackpore",
      "Bhatpara",
      "Bidhannagar",
      "Durgapur",
      "Halisahar",
      "Howrah",
      "Kolkata",
      "Kulti",
      "Malda",
      "North Dumdum",
      "Panihati",
      "Raiganj",
      "Siliguri",
      "South Dumdum",
      "Titagarh",
    ],
  };
  return (
    <div className="">
      <div className="px-5 md:px-10 lg:px-20 py-0">
        <Registration />
      </div>

      <div className="text-justify mx-auto sm:px-10 px-5 md:px-10 lg:px-40 py-0 ">
        <div className="mt-4 ">
          <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-20  ">
            EMPOWERMENT BATCH 01
          </h2>
        </div>
        <br></br>
        <form className="mt-0" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="sm:flex items-center">
              <label
                htmlFor="choose-picture"
                className="block text-left font-bold text-lg  sm:w-1/4"
              >
                Choose picture:
              </label>
              <input
                type="file"
                name="choose-picture"
                id="choose-picture"
                value={data.photo}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="name"
                className="block text-left font-bold text-lg  sm:w-1/4"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="place-of-birth"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Place Of Birth:
              </label>
              <input
                type="text"
                name="place-of-birth"
                id="place-of-birth"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="date-of-birth"
                className="block text-left font-bold text-lg  sm:w-1/4"
              >
                Date Of Birth:
              </label>
              <input
                type="date"
                name="date-of-birth"
                id="date-of-birth"
                value={data.birthplace}
                onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="full-address"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Full Address:
              </label>
              <textarea
                type="text"
                name="full-address"
                id="full-address"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="state"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                State:
              </label>
              <select
                className="form-control border rounded w-full p-2"
                name="f_state"
                id="fstate"
                value={data.birthplace}
                onChange={handleOnChange}
                // onChange={(e) => setSelectedState(e.target.value)}
              >
                <option selected hidden disabled>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="pin-code"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Pin Code:
              </label>
              <input
                type="number"
                name="pin-code"
                id="pin-code"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="qualification"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Qualification:
              </label>
              <input
                type="text"
                name="qualification"
                id="qualification"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="college-university"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                College/University:
              </label>
              <input
                type="text"
                name="college-university"
                id="college-university"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label className="block text-left font-bold text-lg   sm:w-1/5">
                Pursuing LL.B:
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="pursuingLLB"
                    value={data.birthplace}
                  onChange={handleOnChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="pursuingLLB"
                    value={data.birthplace}
                  onChange={handleOnChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="year-of-passing"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Year Of Passing:
              </label>
              <input
                type="number"
                name="year-of-passing"
                id="year-of-passing"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="email"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>
            {/* personal details */}

            <div>
              <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">
                Personal Information
              </h2>
            </div>
            <div className="sm:flex items-center">
              <label
                htmlFor="father-name"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Father's Name:
              </label>
              <input
                type="text"
                name="father-name"
                id="father-name"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="mother-name"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Mother's Name:
              </label>
              <input
                type="text"
                name="mother-name"
                id="mother-name"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="permanent-address"
                className="block text-left font-bold text-lg   sm:w-1/4"
              >
                Permanent Address:
              </label>
              <textarea
                type="text"
                name="permanent-address"
                id="permanent-address"
                value={data.birthplace}
                  onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="state"
                className="block text-left font-bold text-lg    sm:w-1/4"
              >
                State:
              </label>

              <select
                className="form-control border rounded w-full p-2"
                name="f_state"
                id="fstate"
                value={data.birthplace}
                onChange={handleOnChange}
              >
                <option selected hidden disabled>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:flex items-center">
              <label
                htmlFor="city"
                className="block text-left font-bold text-lg    sm:w-1/4"
              >
                City:
              </label>

              <select
                className="form-control border rounded w-full p-2"
                name="f_city"
                id="fcity"
                value={data.birthplace}
                onChange={handleOnChange}
                // onChange={(e) => setSelectedCity(e.target.value)}
                // disabled={!selectedState}
              >
                <option selected hidden disabled>
                  Select City
                </option>
                {selectedState &&
                  cities[selectedState].map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>
            <div className="sm:flex items-center">
              <label
                htmlFor="aadhar-card"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Upload Aadhar (Front and Back):
              </label>
              <input
                type="file"
                name="aadhar-card"
                id="aadhar-card"
                value={data.birthplace}
                onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div>
              <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
                Fees Paid ( First Installment )
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex text-left font-bold text-lg sm:w-1/5">
                {" "}
                Online / UPI:
                <input
                  type="radio"
                  name="mains"
                  value={data.birthplace}
                onChange={handleOnChange}
                  className="mx-2 mt-1"
                />{" "}
              </label>
            </div>
            <div className="sm:flex items-center">
              <label
                htmlFor=" amount-paid"
                className="block text-left font-bold text-lg sm:w-1/4"
              >
                Amount Paid :
              </label>
              <input
                type="number"
                name=" amount-paid"
                id=" amount-paid "
                value={data.birthplace}
                onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="sm:flex items-center">
              <label className="block text-left font-bold text-lg sm:w-1/5">
                Old Student of <br></br>Shubham Sir :
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="pursuingLLB"
                    value={data.birthplace}
                    onChange={handleOnChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="pursuingLLB"
                    value={data.birthplace}
                    onChange={handleOnChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="sm:flex items-center">
              <label
                htmlFor="email"
                className="block text-left font-bold text-lg    sm:w-1/4"
              >
                Institution :
              </label>
              <input
                type="text"
                name="Institution "
                id="Institution "
                value={data.birthplace}
                onChange={handleOnChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-red-500 border text-white font-bold py-2 px-4 rounded mb-10"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpowermentBatch;
