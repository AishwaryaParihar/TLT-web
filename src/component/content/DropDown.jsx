
import React, { useState, useEffect } from 'react';

const states = [
  { id: 1, name: 'Andaman and Nicobar Islands' },
  { id: 2, name: 'Andhra Pradesh' },
  {id:3, name: "Arunachal Pradesh"
  },
  {id:4, name: "Assam"
  },
  {id:5, name: "Bihar"
  },
  {id:6, name: "Chandigarh"
  },
  {id:7, name: "Chhattisgarh"
  },
  {id:8, name: "Dadra and Nagar Haveli"
  },
  {id:9, name: "Daman and Diu"
  },
  {id:10, name: "Delhi"
  },
  {id:11, name: "Gao"
  },
  {id:12, name: "Gujarat"
  },
  {id:13, name: "Haryana"
  },
  {id:14, name: "Himachal Pradesh"
  },
  {id:15, name: "Jammu and Kashmir"
  },
  {id:16, name: "Jharkhand"
  },
  {id:17, name: "Kenmore"
  },
  {id:18, name: "Kerala"
  },
  {id:19, name: "Lakshadweep"
  },
  {id:20, name: "Madhya Pradesh"
  },
  {id:21, name: "Maharashtra"
  },
  {id:22, name: "Manipur"
  },
  {id:23, name: "Meghalaya"
  },
  {id:24, name: "Nagaland"
  },
  {id:25, name: "Natwar"
  },
  {id:26, name: "Mizoram"
  },
  {id:27, name: "Mizoram"
  },
  {id:28, name: "Odisa"
  },
  {id:29, name: "Paschim Medinipur"
  },
  {id:30, name: "Pondicherry"
  },
  {id:31, name: "Panjab"
  },
  {id:32, name: "Rajasthan"
  },
  {id:33, name: "Sikkim"
  },
  {id:34, name: "Tamil Nadu"
  },
  {id:35, name: "Telangana"
  },
  {id:36, name: "Tripura"
  },
  {id:37, name: "Uttar Pradesh"
  },
  {id:38, name: "Uttarakhand"
  },
  {id:39, name: "Vaishali"
  },
  {id:40, name: "West Bengal"
  },
  // ... add other states
];

const cities = {
  1: ['Port Blair', 'Other City 1'],
  2: ['Hyderabad', 'Vishakhapatnam'],
  // ... add other cities corresponding to state ids
};

const DropDown = () => {
  const [selectedState, setSelectedState] = useState('');
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      setAvailableCities(cities[selectedState] || []);
    }
  }, [selectedState]);

  return (
    <>
      <div>DropDown</div>
      <div>
        <select
          className="form-control"
          name="f_state"
          id="fstate"
          onChange={(e) => setSelectedState(e.target.value)}
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
      <div>
        <select className="form-control" name="f_city" id="fcity" disabled={!selectedState}>
          <option selected hidden disabled>
            Select City
          </option>
          {availableCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
