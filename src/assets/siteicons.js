import React from 'react'


export const SubIcons = {
         skill: () => (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="feather feather-airplay"
           >
             <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
             <polygon points="12 15 17 21 7 21 12 15"></polygon>
           </svg>
         ),
         goal: () => (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="28"
             height="28"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="feather feather-cast"
           >
             <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
             <line x1="2" y1="20" x2="2.01" y2="20"></line>
           </svg>
         ),
         suffer: () => (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="28"
             height="28"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="feather feather-bell"
           >
             <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
             <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
           </svg>
         ),
         title: () => (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="28"
             height="28"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="feather feather-briefcase"
           >
             <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
             <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
           </svg>
         ),
       }

export const Logo = () =>{
  return (
    <svg viewBox="0 0 120 54" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M92.7966 0C77.7729 0 65.5932 12.0886 65.5932 27C65.5932 41.9114 77.7729 54 92.7966 54C107.82 54 120 41.9114 120 27C120.001 12.0886 107.821 0 92.7966 0ZM100.603 36.4637L95.4981 31.3974V38.5965H90.0962V31.2547L84.9918 36.3199L81.1718 32.5285L88.1701 25.5825H82.0351V20.221H90.0951V15.4046H95.497V20.221H103.557V25.5825H97.2772L104.42 32.6722L100.603 36.4637Z"
        fill="#06011E"
      />
      <path
        d="M50.7522 13.506C47.1204 7.26333 41.2571 2.79749 34.2416 0.931453C27.2261 -0.934582 19.8979 0.0227064 13.608 3.62721C7.31818 7.23172 2.81861 13.0511 0.938487 20.0151C-0.94164 26.9781 0.0228779 34.2503 3.6546 40.4941C7.28633 46.7368 13.1496 51.2026 20.1651 53.0687C22.5082 53.6918 24.8854 54 27.2466 54C31.9577 54 36.6086 52.774 40.7988 50.3729C47.0886 46.7684 51.5882 40.949 53.4683 33.9861C55.3484 27.0221 54.3839 19.7487 50.7522 13.506ZM44.1746 13.8876L7.27723 35.0315C6.39575 32.8889 5.87709 30.639 5.73264 28.3564L39.1222 9.22193C41.0422 10.4874 42.746 12.0588 44.1746 13.8876ZM16.4515 8.51525C19.7648 6.61648 23.442 5.64678 27.1693 5.64678C29.021 5.64678 30.8863 5.88723 32.7232 6.37152L6.44465 21.4296C7.93806 15.9433 11.4902 11.3578 16.4515 8.51525ZM10.0946 39.9342L47.0454 18.761C47.9644 20.9273 48.5069 23.2076 48.6673 25.5229L15.1833 44.7093C13.2429 43.4145 11.5254 41.807 10.0946 39.9342ZM37.9564 45.4837C32.9814 48.3342 27.1863 49.0916 21.6381 47.6162C21.604 47.6072 21.5698 47.597 21.5346 47.5868L48.0019 32.4204C47.9928 32.4542 47.9849 32.4892 47.9758 32.5242C46.4892 38.0309 42.9303 42.6333 37.9564 45.4837Z"
        fill="#06011E"
      />
    </svg>
  )
}